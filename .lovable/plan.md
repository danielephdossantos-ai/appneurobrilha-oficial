# Contrato — Auditoria Matemática do App

Aprovado pela usuária. Duas partes obrigatórias, nesta ordem.

---

## PARTE 1 — Melhorias pedagógicas no 8º ano · U1 · Aulas 02 a 07

**Escopo travado** (não expandir):
- `src/escola-brilha/curso-v4/matematica-8ano/unidade-1/aula-02-potencias.ts`
- `aula-03-notacao-grande.ts`
- `aula-04-notacao-pequeno.ts`
- `aula-05-operacoes-nc.ts`
- `aula-06-comparar.ts`
- `aula-07-missao.ts`

Aula 01 já está no padrão piloto — não mexer.

**As 6 melhorias a aplicar em cada aula (o que couber):**

1. Converter passos de resolução de `tipo: "tabela"` para `trinomioPassoAPasso` com "Continuar" + campo `professor` explicando cada linha (padrão travado da aula 01 e do Trinômio).
2. Transformar `momento03_descoberta` de texto corrido em passo-a-passo animado com `visualMat` (mesmo motor).
3. **Aula 02 (Potências)** — adicionar contra-exemplo `(−2)² = 4` vs `−2² = −4` (erro clássico de 8º ano) + destacar `a⁰ = 1` só quando `a ≠ 0`.
4. **Aula 05 (Operações NC)** — adicionar caso explícito de mantissa que fica < 1 (ex.: `0,4·10⁷ → 4·10⁶`) com explicação, não só como "ajuste".
5. **Aulas 03 e 04 (NC)** — bônus opcional: mostrar 1÷10 na chave para reforçar padrão das potências de 10.
6. Rever cada `momento10_avaliacao` para exigir simplificação/forma canônica quando aplicável (mesma correção da aula 01 com 27/99 → 3/11).

**Regra**: NÃO inventar erro onde não tem. As 6 aulas foram auditadas e estão **matematicamente 100% corretas**. Estas melhorias são para elevar o nível pedagógico ao padrão "escola particular top", não para consertar erros.

**Entrega da Parte 1**: as 6 aulas atualizadas + confirmação de typecheck limpo. Um turno só.

---

## PARTE 2 — Auditoria matemática pura, série por série

**Ordem obrigatória**: 3º ano → 4º ano → 5º ano → 6º ano. **Uma série por turno.**

**O que é auditoria pura:**
- Ler cada aula (todas as unidades da série).
- Conferir **cada cálculo** como professor de matemática de escola particular.
- Detectar: contas erradas, resultados incorretos, feedback errado na avaliação, gabarito trocado, regra explicada errada, exemplo que quebra a regra que ele mesmo ensina, unidades trocadas, simplificação faltando quando deveria ter.
- **NÃO propor melhoria pedagógica** nesta fase. Só corretude matemática.

**Formato do relatório por série (antes de corrigir):**

Tabela com colunas:
- Aula (arquivo)
- Momento (ex.: `momento10_avaliacao Q2`)
- Erro encontrado
- Correção proposta
- Severidade: **CRÍTICO** (conta errada / gabarito errado) · **MÉDIO** (regra explicada de forma confusa) · **LEVE** (falta simplificação, texto ambíguo)

**Fluxo por turno:**
1. Usuária pede: "audita 3º ano".
2. Eu leio todas as aulas do 3º ano e entrego a tabela de erros.
3. Usuária aprova as correções.
4. Só então eu aplico as correções em bloco.
5. Confirmo typecheck limpo e passo para o próximo ano no próximo turno.

**Séries fora do escopo desta auditoria:**
- 2º ano de matemática — **TRAVADO** por constraint (`matematica-2ano-travada.md`).
- Educação Infantil e 1º ano matemática — **SOMENTE LEITURA** por constraint (`ei-somente-leitura-mat-ingles.md`).
- 7º ano e Ensino Médio — não existem ainda.

**8º ano** — a Parte 1 já cobre a auditoria da U1. As U2 a U7 do 8º entram no ciclo depois do 6º ano, se a usuária quiser.

---

## Regras gerais do contrato

- **Não expandir escopo** sem aprovação explícita da usuária.
- **Não misturar as duas partes** no mesmo turno.
- **Não considerar aula "pronta"** sem eu ter conferido cada conta com olhos de professor.
- Nunca dizer que está pronto sem validar de verdade (memória `mem://~user`).
- Se durante a auditoria eu encontrar erro crítico (conta errada, gabarito trocado), **avisar imediatamente** mesmo se não for o foco daquele turno.
