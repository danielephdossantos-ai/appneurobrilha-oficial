"""
Fase 1 + Fase 2 — Português 4º ano.

Fase 1: injeta `dica` (pista adaptativa) e `reensino` (Professor Digital
explica o raciocínio) em toda questão que tenha feedbackErro.
Fase 2: nas questões de `momento10_avaliacao`, garante 4 alternativas com
distrator plausível do próprio tema da aula + `feedbackOpcoes` explicativo.

Uso: python3 scripts/nivelar-pt-4ano.py
"""
import glob
import os
import re
import sys

RAIZ = os.path.join("src", "escola-brilha", "curso-v4", "portugues-4ano")


# --------------------------------------------------------------------------
# Mini-scanner de objeto literal TS (respeita strings, template e comentários)
# --------------------------------------------------------------------------
def scan(text, i):
    """Avança i por cima de string/template/comentário; devolve novo i ou None."""
    c = text[i]
    if c in "\"'":
        j = i + 1
        while j < len(text):
            if text[j] == "\\":
                j += 2
                continue
            if text[j] == c:
                return j + 1
            j += 1
        return len(text)
    if c == "`":
        j = i + 1
        while j < len(text):
            if text[j] == "\\":
                j += 2
                continue
            if text[j] == "`":
                return j + 1
            j += 1
        return len(text)
    if text.startswith("//", i):
        j = text.find("\n", i)
        return len(text) if j < 0 else j
    if text.startswith("/*", i):
        j = text.find("*/", i)
        return len(text) if j < 0 else j + 2
    return None


def fim_do_objeto(text, abre):
    """Dado o índice de '{', devolve o índice do '}' correspondente."""
    i = abre + 1
    nivel = 1
    while i < len(text):
        s = scan(text, i)
        if s is not None:
            i = s
            continue
        c = text[i]
        if c in "{[(":
            nivel += 1
        elif c in "}])":
            nivel -= 1
            if nivel == 0:
                return i
        i += 1
    raise ValueError("objeto sem fechamento")


def chaves_top(text, abre, fecha):
    """Mapa chave -> (inicio_valor, fim_valor) no nível 1 do objeto."""
    out = {}
    i = abre + 1
    while i < fecha:
        s = scan(text, i)
        if s is not None:
            i = s
            continue
        c = text[i]
        if c in "{[(":
            i = fim_do_objeto(text, i) + 1
            continue
        m = re.match(r"([A-Za-z_][A-Za-z0-9_]*)\s*:", text[i:fecha])
        if m and (i == abre + 1 or text[:i].rstrip()[-1:] in "{,"):
            chave = m.group(1)
            j = i + m.end()
            while j < fecha and text[j] in " \n\t":
                j += 1
            k = j
            while k < fecha:
                s2 = scan(text, k)
                if s2 is not None:
                    k = s2
                    continue
                if text[k] in "{[(":
                    k = fim_do_objeto(text, k) + 1
                    continue
                if text[k] == ",":
                    break
                if text[k] in "}])":
                    break
                k += 1
            out[chave] = (j, k)
            i = k + 1
            continue
        i += 1
    return out


def literal(text, span):
    """Valor bruto -> string Python se for literal de string simples."""
    bruto = text[span[0]:span[1]].strip()
    if len(bruto) >= 2 and bruto[0] in "\"'" and bruto[-1] == bruto[0]:
        corpo = bruto[1:-1]
        return corpo.replace('\\"', '"').replace("\\'", "'").replace("\\n", "\n")
    # string quebrada em várias linhas pelo prettier: junta os pedaços
    pedacos = re.findall(r'"((?:[^"\\]|\\.)*)"', bruto)
    if pedacos and bruto.startswith('"'):
        return "".join(p.replace('\\"', '"') for p in pedacos)
    return None


def q(s):
    """Serializa string Python como literal TS de aspas duplas."""
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n") + '"'


def lista_strings(text, span):
    bruto = text[span[0]:span[1]]
    if not bruto.strip().startswith("["):
        return None
    itens = []
    i = bruto.index("[") + 1
    fim = len(bruto) - 1
    atual = None
    while i < fim:
        s = scan(bruto, i)
        if s is not None:
            if bruto[i] == '"':
                pedaco = bruto[i + 1:s - 1].replace('\\"', '"')
                atual = pedaco if atual is None else atual + pedaco
            i = s
            continue
        if bruto[i] == ",":
            if atual is not None:
                itens.append(atual)
                atual = None
        elif bruto[i] in "{[(":
            return None  # não é lista simples de strings
        i += 1
    if atual is not None:
        itens.append(atual)
    return itens


# --------------------------------------------------------------------------
# Geração de texto pedagógico
# --------------------------------------------------------------------------
LIXO = re.compile(r"^[^\wÀ-ÿ(“\"']+\s*")


def limpa(s):
    s = s.replace("\n", " ")
    s = re.sub(r"\s+", " ", s).strip()
    s = LIXO.sub("", s)
    return s


def minuscula_inicial(s):
    if not s:
        return s
    if s[:2].isalpha() and s[:2].isupper():  # sigla em caixa alta: preserva
        return s
    return s[0].lower() + s[1:]


def termina_bem(s):
    return s if s[-1:] in ".!?…" else s + "."


def faz_dica(feedback_erro, onde, pergunta):
    if onde:
        return (
            "🧭 Pista de explorador: volte ao texto e releia este trecho — “"
            + limpa(onde).strip("… .")
            + "”."
        )
    base = minuscula_inicial(limpa(feedback_erro))
    return termina_bem("🧭 Pista de explorador: " + base)


def faz_reensino(pergunta, opcao_certa, feedback_acerto, feedback_erro):
    explicacao = limpa(feedback_acerto) or limpa(feedback_erro)
    explicacao = LIXO.sub("", explicacao)
    explicacao = re.sub(
        r"^(Isso mesmo!?|Isso!?|Exato!?|Exatamente!?|Correto!?|Perfeito!?|Boa!?)\s*",
        "",
        explicacao,
    ).strip()
    partes = ["📚 Vamos rever juntos:"]
    if opcao_certa:
        partes.append("a resposta certa é “" + limpa(opcao_certa) + "”.")
    if explicacao:
        partes.append(termina_bem(explicacao[0].upper() + explicacao[1:]))
    partes.append(
        "Agora releia a pergunta com essa ideia na cabeça — pense antes de responder."
    )
    return " ".join(partes)


def faz_feedback_opcao(opcao, feedback_erro):
    return (
        "❌ “"
        + limpa(opcao)
        + "” não é a resposta. "
        + termina_bem(limpa(feedback_erro) or "Releia a pergunta com calma.")
    )


# --------------------------------------------------------------------------
# Processamento por arquivo
# --------------------------------------------------------------------------
def blocos_questao(text):
    """Devolve spans (abre, fecha) de objetos que têm feedbackErro no nível 1."""
    spans = []
    for m in re.finditer(r"\bfeedbackErro\s*:", text):
        i = m.start()
        # sobe procurando o '{' que abre este objeto
        nivel = 0
        j = i
        while j >= 0:
            c = text[j]
            if c in "}])":
                nivel += 1
            elif c in "{[(":
                if nivel == 0:
                    break
                nivel -= 1
            j -= 1
        if j < 0 or text[j] != "{":
            continue
        fecha = fim_do_objeto(text, j)
        if (j, fecha) not in spans:
            spans.append((j, fecha))
    return sorted(spans)


def span_avaliacao(text):
    i = text.find("momento10_avaliacao")
    if i < 0:
        return (-1, -1)
    abre = text.index("{", i)
    return (abre, fim_do_objeto(text, abre))


def processa(caminho):
    original = open(caminho, encoding="utf-8").read()
    text = original
    av_ini, av_fim = span_avaliacao(text)
    spans = blocos_questao(text)

    # banco de distratores do próprio tema da aula (opções erradas de outras questões)
    banco = []
    for abre, fecha in spans:
        ks = chaves_top(text, abre, fecha)
        if "opcoes" not in ks or "correta" not in ks:
            continue
        ops = lista_strings(text, ks["opcoes"])
        if not ops:
            continue
        certa_raw = text[ks["correta"][0]:ks["correta"][1]].strip()
        if not certa_raw.isdigit():
            continue
        certa = int(certa_raw)
        for idx, o in enumerate(ops):
            if idx != certa and len(o) > 12:
                banco.append(o)

    # remove duplicatas preservando a ordem, para variar o distrator por questão
    vistos = set()
    banco = [b for b in banco if not (limpa(b) in vistos or vistos.add(limpa(b)))]
    rodizio = {"i": 0}

    edicoes = []  # (posicao, texto_a_inserir) e substituições
    stats = {"dica": 0, "reensino": 0, "quarta": 0, "feedbackOpcoes": 0}

    for abre, fecha in spans:
        ks = chaves_top(text, abre, fecha)
        fe = literal(text, ks["feedbackErro"]) if "feedbackErro" in ks else None
        if not fe:
            continue
        fa = literal(text, ks["feedbackAcerto"]) if "feedbackAcerto" in ks else ""
        onde = literal(text, ks["ondeEstaNoTexto"]) if "ondeEstaNoTexto" in ks else None
        pergunta = (
            literal(text, ks["pergunta"])
            if "pergunta" in ks
            else (literal(text, ks["instrucao"]) if "instrucao" in ks else "")
        ) or ""

        ops = lista_strings(text, ks["opcoes"]) if "opcoes" in ks else None
        if ops is None and "hipoteses" in ks:
            ops = re.findall(r'texto:\s*"((?:[^"\\]|\\.)*)"', text[ks["hipoteses"][0]:ks["hipoteses"][1]])
        certa_key = "correta" if "correta" in ks else ("respostaCerta" if "respostaCerta" in ks else None)
        certa = None
        if certa_key:
            raw = text[ks[certa_key][0]:ks[certa_key][1]].strip()
            if raw.isdigit():
                certa = int(raw)
        opcao_certa = ops[certa] if (ops and certa is not None and certa < len(ops)) else ""

        # indentação usada dentro do objeto
        linha_ini = text.rfind("\n", 0, abre) + 1
        ind = re.match(r"\s*", text[linha_ini:]).group(0) + "  "

        novos = []
        na_avaliacao = av_ini <= abre <= av_fim

        # ---------- Fase 2: 4 alternativas + feedbackOpcoes -----------------
        if na_avaliacao and ops and certa is not None:
            if len(ops) < 4:
                n = len(banco)
                tentativas = 0
                while len(ops) < 4 and n and tentativas < n * 2:
                    cand = banco[rodizio["i"] % n]
                    rodizio["i"] += 1
                    tentativas += 1
                    if cand in ops or limpa(cand) == limpa(opcao_certa):
                        continue
                    ops.append(cand)
                if len(ops) == 4:
                    stats["quarta"] += 1
            if "feedbackOpcoes" not in ks:
                fbs = [
                    "null" if i == certa else q(faz_feedback_opcao(o, fe))
                    for i, o in enumerate(ops)
                ]
                novos.append(
                    "feedbackOpcoes: [\n"
                    + "".join(ind + "  " + f + ",\n" for f in fbs)
                    + ind
                    + "]"
                )
                stats["feedbackOpcoes"] += 1
            # reescreve a lista de opções com o mesmo formato
            nova_lista = (
                "[\n" + "".join(ind + "  " + q(o) + ",\n" for o in ops) + ind + "]"
            )
            if "opcoes" in ks:
                edicoes.append(("sub", ks["opcoes"][0], ks["opcoes"][1], nova_lista))

        # ---------- Fase 1: dica + reensino --------------------------------
        if "dica" not in ks:
            novos.append("dica: " + q(faz_dica(fe, onde, pergunta)))
            stats["dica"] += 1
        if "reensino" not in ks and (ops or opcao_certa or fa):
            novos.append(
                "reensino: " + q(faz_reensino(pergunta, opcao_certa, fa, fe))
            )
            stats["reensino"] += 1

        if novos:
            insercao = "".join(ind + n + ",\n" for n in novos)
            # insere antes do '}' de fechamento, preservando indentação
            pos = text.rfind("\n", 0, fecha) + 1
            edicoes.append(("ins", pos, pos, insercao))

    # aplica de trás pra frente
    for tipo, i, j, conteudo in sorted(edicoes, key=lambda e: -e[1]):
        if tipo == "ins":
            text = text[:i] + conteudo + text[i:]
        else:
            text = text[:i] + conteudo + text[j:]

    if text != original:
        open(caminho, "w", encoding="utf-8").write(text)
    return stats


def main():
    total = {"dica": 0, "reensino": 0, "quarta": 0, "feedbackOpcoes": 0}
    arquivos = sorted(glob.glob(os.path.join(RAIZ, "unidade-*", "aula-*.ts")))
    for caminho in arquivos:
        s = processa(caminho)
        for k in total:
            total[k] += s[k]
        print(os.path.relpath(caminho, RAIZ), s)
    print("TOTAL", total, "arquivos:", len(arquivos))


if __name__ == "__main__":
    sys.exit(main())
