// Conteúdo de cada uma das 17 etapas da anamnese científica.
// Cada Step recebe `value` (parcial) e `onChange` para atualizar campo a campo.
import { LikertScale } from "../components/LikertScale";
import { YesNoField } from "../components/YesNoField";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type {
  AnamneseV2Responses,
  Likert,
  SimNao,
  Step01_Identificacao,
  Step02_Gestacao,
  Step03_Marcos,
  Step04_HistoricoMedico,
  Step05_HistoricoFamiliar,
  Step06_Escolar,
  Step07_Atencao,
  Step08_Hiperatividade,
  Step09_ComunicacaoSocial,
  Step10_Repetitivos,
  Step11_Sensorial,
  Step12_Linguagem,
  Step13_Memoria,
  Step14_Motora,
  Step15_Emocional,
  Step16_Autonomia,
  Step17_FuncoesExecutivas,
} from "../v2/types";

type Updater<K extends keyof AnamneseV2Responses> = (patch: AnamneseV2Responses[K]) => void;

function calcAge(iso: string): number {
  if (!iso) return 0;
  const d = new Date(iso);
  if (isNaN(d.getTime())) return 0;
  const now = new Date();
  let age = now.getFullYear() - d.getFullYear();
  const m = now.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < d.getDate())) age--;
  return age;
}

// ─── ETAPA 1 ──────────────────────────────────────────────────────
export function Step1({
  value,
  onChange,
}: {
  value: Partial<Step01_Identificacao>;
  onChange: Updater<"step1">;
}) {
  const set = (patch: Partial<Step01_Identificacao>) => onChange(patch);
  return (
    <div className="space-y-4">
      <div>
        <Label>Nome da criança</Label>
        <Input value={value.nome ?? ""} onChange={(e) => set({ nome: e.target.value })} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label>Data de nascimento</Label>
          <Input
            type="date"
            value={value.data_nascimento ?? ""}
            onChange={(e) =>
              set({ data_nascimento: e.target.value, idade: calcAge(e.target.value) })
            }
          />
        </div>
        <div>
          <Label>Idade</Label>
          <Input type="number" value={value.idade ?? ""} readOnly className="bg-muted" />
        </div>
      </div>
      <div>
        <Label>Sexo</Label>
        <div className="grid grid-cols-4 gap-2 mt-1">
          {[
            { v: "feminino", l: "Feminino" },
            { v: "masculino", l: "Masculino" },
            { v: "outro", l: "Outro" },
            { v: "nao_informado", l: "Não informar" },
          ].map((o) => (
            <button
              key={o.v}
              type="button"
              onClick={() => set({ sexo: o.v as any })}
              className={`rounded-lg border-2 px-2 py-2 text-xs font-medium ${value.sexo === o.v ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}
            >
              {o.l}
            </button>
          ))}
        </div>
      </div>
      <div>
        <Label>Série escolar</Label>
        <Input
          value={value.serie ?? ""}
          onChange={(e) => set({ serie: e.target.value })}
          placeholder="Ex: Pré II, 1º ano, 3º ano…"
        />
      </div>
      <div>
        <Label>Nome do responsável</Label>
        <Input
          value={value.responsavel ?? ""}
          onChange={(e) => set({ responsavel: e.target.value })}
        />
      </div>
      <div>
        <Label>Escola</Label>
        <Input value={value.escola ?? ""} onChange={(e) => set({ escola: e.target.value })} />
      </div>
      <div>
        <Label>Professor(a)</Label>
        <Input value={value.professor ?? ""} onChange={(e) => set({ professor: e.target.value })} />
      </div>
    </div>
  );
}

// ─── ETAPA 2 ──────────────────────────────────────────────────────
export function Step2({
  value,
  onChange,
}: {
  value: Partial<Step02_Gestacao>;
  onChange: Updater<"step2">;
}) {
  const yn = (k: keyof Step02_Gestacao, label: string) => (
    <YesNoField
      label={label}
      value={value[k] as SimNao | undefined}
      onChange={(v) => onChange({ [k]: v } as any)}
    />
  );
  return (
    <div className="space-y-1">
      <p className="text-sm font-bold text-primary mb-2">Gestação</p>
      {yn("gravidez_planejada", "A gravidez foi planejada?")}
      {yn("medicamentos_gestacao", "Usou medicamentos durante a gestação?")}
      {yn("infeccoes_gestacao", "Teve infecções durante a gestação?")}
      
      <p className="text-sm font-bold text-primary mt-4 mb-2">Parto</p>
      <div className="mb-3">
        <Label>Tipo de parto</Label>
        <div className="grid grid-cols-3 gap-2 mt-1">
          {[
            { v: "vaginal", l: "Vaginal" },
            { v: "cesariana", l: "Cesariana" },
            { v: "nao_informado", l: "Não informado" },
          ].map((o) => (
            <button
              key={o.v}
              type="button"
              onClick={() => onChange({ tipo_parto: o.v as any })}
              className={`rounded-lg border-2 px-2 py-2 text-xs font-medium ${
                value.tipo_parto === o.v ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"
              }`}
            >
              {o.l}
            </button>
          ))}
        </div>
      </div>
      {yn("complicacoes_parto", "Houve complicações no parto?")}
      {yn("sofrimento_fetal", "Sinais de sofrimento fetal?")}
      {yn("anoxia", "Asfixia perinatal (anoxia)?")}
      
      <p className="text-sm font-bold text-primary mt-4 mb-2">Prematuridade e nascimento</p>
      {yn("prematuro", "O bebê nasceu prematuro?")}
      <div className="grid grid-cols-2 gap-3 py-3">
        <div>
          <Label>Semanas de gestação</Label>
          <Input
            type="number"
            value={value.semanas_gestacao ?? ""}
            onChange={(e) =>
              onChange({ semanas_gestacao: e.target.value ? Number(e.target.value) : null })
            }
          />
        </div>
        <div>
          <Label>Peso ao nascer (kg)</Label>
          <Input
            type="number"
            step="0.1"
            value={value.peso_nascer_kg ?? ""}
            onChange={(e) =>
              onChange({ peso_nascer_kg: e.target.value ? Number(e.target.value) : null })
            }
          />
        </div>
      </div>
      {yn("uti_neonatal", "Houve internação em UTI neonatal?")}
    </div>
  );
}

// ─── ETAPA 3 ──────────────────────────────────────────────────────
export function Step3({
  value,
  onChange,
}: {
  value: Partial<Step03_Marcos>;
  onChange: Updater<"step3">;
}) {
  const num = (k: keyof Step03_Marcos, label: string) => (
    <div className="py-2">
      <Label className="text-sm">
        {label} <span className="text-xs text-muted-foreground">(meses)</span>
      </Label>
      <Input
        type="number"
        value={(value[k] as number | null) ?? ""}
        onChange={(e) => onChange({ [k]: e.target.value ? Number(e.target.value) : null } as any)}
        placeholder="Idade em meses"
      />
    </div>
  );
  const lk = (k: keyof Step03_Marcos, label: string) => (
    <LikertScale
      label={label}
      value={value[k] as Likert | undefined}
      onChange={(v) => onChange({ [k]: v } as any)}
    />
  );
  return (
    <div className="space-y-3">
      <p className="text-sm font-bold text-primary">Motor</p>
      {num("sustentou_cabeca", "Sustentou cabeça")}
      {num("sentou_sozinho", "Sentou sozinho")}
      {num("engatinhou", "Engatinhou")}
      {num("andou", "Andou")}
      <p className="text-sm font-bold text-primary pt-3">Linguagem</p>
      {num("primeiras_palavras", "Primeiras palavras")}
      {num("frases", "Formação de frases")}
      {lk("compreensao_verbal", "Compreensão verbal atual")}
      <p className="text-sm font-bold text-primary pt-3">Social</p>
      {lk("contato_visual", "Contato visual")}
      {lk("brincadeiras_compartilhadas", "Brincadeiras compartilhadas")}
      {lk("interacao_outras_criancas", "Interação com outras crianças")}
    </div>
  );
}

// ─── ETAPA 4 ──────────────────────────────────────────────────────
export function Step4({
  value,
  onChange,
}: {
  value: Partial<Step04_HistoricoMedico>;
  onChange: Updater<"step4">;
}) {
  const yn = (k: keyof Step04_HistoricoMedico, label: string) => (
    <YesNoField
      label={label}
      value={value[k] as SimNao | undefined}
      onChange={(v) => onChange({ [k]: v } as any)}
    />
  );
  return (
    <div className="space-y-1">
      {yn("convulsoes", "Já teve convulsões?")}
      {yn("epilepsia", "Diagnóstico de epilepsia?")}
      {yn("deficiencia_auditiva", "Possui deficiência auditiva?")}
      {yn("deficiencia_visual", "Possui deficiência visual?")}
      {yn("transtornos_neurologicos", "Possui transtornos neurológicos diagnosticados?")}
      <div className="py-3">
        <Label>Medicamentos em uso</Label>
        <Textarea
          value={value.medicamentos_uso ?? ""}
          onChange={(e) => onChange({ medicamentos_uso: e.target.value })}
          placeholder="Liste os medicamentos atuais"
        />
      </div>
      <div className="py-3">
        <Label>Terapias atuais</Label>
        <Textarea
          value={value.terapias_atuais ?? ""}
          onChange={(e) => onChange({ terapias_atuais: e.target.value })}
          placeholder="Ex: fonoaudiologia, TO, psicologia…"
        />
      </div>
    </div>
  );
}

// ─── ETAPA 5 ──────────────────────────────────────────────────────
export function Step5({
  value,
  onChange,
}: {
  value: Partial<Step05_HistoricoFamiliar>;
  onChange: Updater<"step5">;
}) {
  const yn = (k: keyof Step05_HistoricoFamiliar, label: string) => (
    <YesNoField
      label={label}
      value={value[k] as SimNao | undefined}
      onChange={(v) => onChange({ [k]: v } as any)}
    />
  );
  return (
    <div className="space-y-1">
      <p className="text-xs text-muted-foreground mb-2">
        Há na família (pais, irmãos, avós, tios)?
      </p>
      {yn("tdah", "TDAH")}
      {yn("tea", "TEA (autismo)")}
      {yn("dislexia", "Dislexia")}
      {yn("deficiencia_intelectual", "Deficiência intelectual")}
      {yn("transtornos_psiquiatricos", "Transtornos psiquiátricos")}
      {yn("dificuldades_escolares", "Dificuldades escolares importantes")}
    </div>
  );
}

// ─── ETAPA 6 ──────────────────────────────────────────────────────
export function Step6({
  value,
  onChange,
}: {
  value: Partial<Step06_Escolar>;
  onChange: Updater<"step6">;
}) {
  const lk = (k: keyof Step06_Escolar, label: string) => (
    <LikertScale
      label={label}
      value={value[k] as Likert | undefined}
      onChange={(v) => onChange({ [k]: v } as any)}
    />
  );
  return (
    <div className="space-y-1">
      <p className="text-sm font-bold text-primary mb-2">Leitura</p>
      {lk("reconhece_letras", "Reconhece letras")}
      {lk("reconhece_silabas", "Reconhece sílabas")}
      {lk("le_palavras", "Lê palavras")}
      {lk("le_frases", "Lê frases")}
      {lk("le_textos", "Lê pequenos textos")}
      <p className="text-sm font-bold text-primary mt-3 mb-2">Escrita</p>
      {lk("copia_palavras", "Copia palavras")}
      {lk("escreve_espontaneamente", "Escreve espontaneamente")}
      {lk("troca_letras", "Troca letras ao escrever")}
      {lk("organiza_frases", "Organiza frases")}
      <p className="text-sm font-bold text-primary mt-3 mb-2">Compreensão de texto</p>
      {lk("compreende_textos", "Compreende textos lidos")}
      
      <p className="text-sm font-bold text-primary mt-3 mb-2">Matemática</p>
      {lk("reconhece_numeros", "Reconhece números")}
      {lk("conta_objetos", "Conta objetos")}
      {lk("adicao", "Realiza adição")}
      {lk("subtracao", "Realiza subtração")}
      {lk("problemas_simples", "Resolve problemas simples")}
    </div>
  );
}

// ─── ETAPAS 7..16 (Likert puro) ───────────────────────────────────
function likertList<T extends Record<string, any>>(
  value: Partial<T>,
  onChange: (patch: Partial<T>) => void,
  items: { k: keyof T; l: string }[],
) {
  return (
    <div className="space-y-1">
      {items.map(({ k, l }) => (
        <LikertScale
          key={String(k)}
          label={l}
          value={value[k] as Likert | undefined}
          onChange={(v) => onChange({ [k]: v } as any)}
        />
      ))}
    </div>
  );
}

export function Step7({
  value,
  onChange,
}: {
  value: Partial<Step07_Atencao>;
  onChange: Updater<"step7">;
}) {
  return likertList(value, onChange, [
    { k: "distrai_facil", l: "Distrai-se facilmente" },
    { k: "esquece_instrucoes", l: "Esquece instruções" },
    { k: "perde_objetos", l: "Perde objetos" },
    { k: "dificuldade_concluir", l: "Tem dificuldade para concluir tarefas" },
    { k: "evita_concentracao", l: "Evita atividades que exigem concentração" },
    { k: "mantem_foco_escolar", l: "Mantém foco em atividades escolares" },
  ]);
}

export function Step8({
  value,
  onChange,
}: {
  value: Partial<Step08_Hiperatividade>;
  onChange: Updater<"step8">;
}) {
  return likertList(value, onChange, [
    { k: "levanta_constantemente", l: "Levanta constantemente" },
    { k: "corre_excessivamente", l: "Corre excessivamente" },
    { k: "interrompe_conversas", l: "Interrompe conversas" },
    { k: "responde_antes", l: "Responde antes da pergunta terminar" },
    { k: "dificuldade_esperar", l: "Tem dificuldade para esperar sua vez" },
  ]);
}

export function Step9({
  value,
  onChange,
}: {
  value: Partial<Step09_ComunicacaoSocial>;
  onChange: Updater<"step9">;
}) {
  return likertList(value, onChange, [
    { k: "responde_chamado", l: "Responde quando chamado(a) pelo nome" },
    { k: "mantem_contato_visual", l: "Mantém contato visual" },
    { k: "compartilha_interesses", l: "Compartilha interesses (mostra, aponta)" },
    { k: "demonstra_emocoes", l: "Demonstra emoções adequadas ao contexto" },
    { k: "entende_expressoes", l: "Entende expressões faciais alheias" },
  ]);
}

export function Step10({
  value,
  onChange,
}: {
  value: Partial<Step10_Repetitivos>;
  onChange: Updater<"step10">;
}) {
  return likertList(value, onChange, [
    { k: "alinha_objetos", l: "Alinha objetos" },
    { k: "movimentos_repetitivos", l: "Movimentos repetitivos (balança, gira)" },
    { k: "interesses_restritos", l: "Interesses restritos e intensos" },
    { k: "resistencia_mudancas", l: "Resistência a mudanças" },
    { k: "rotinas_rigidas", l: "Mantém rotinas rígidas" },
  ]);
}

export function Step11({
  value,
  onChange,
}: {
  value: Partial<Step11_Sensorial>;
  onChange: Updater<"step11">;
}) {
  return likertList(value, onChange, [
    { k: "sensibilidade_sons", l: "Sensibilidade a sons" },
    { k: "sensibilidade_luz", l: "Sensibilidade à luz" },
    { k: "sensibilidade_toque", l: "Sensibilidade ao toque" },
    { k: "seletividade_alimentar", l: "Seletividade alimentar" },
    { k: "busca_estimulos", l: "Busca excessiva por estímulos" },
  ]);
}

export function Step12({
  value,
  onChange,
}: {
  value: Partial<Step12_Linguagem>;
  onChange: Updater<"step12">;
}) {
  return likertList(value, onChange, [
    { k: "compreende_instrucoes", l: "Compreende instruções" },
    { k: "nomeia_objetos", l: "Nomeia objetos" },
    { k: "conta_historias", l: "Conta histórias" },
    { k: "formula_frases", l: "Formula frases completas" },
    { k: "trocas_fonologicas", l: "Apresenta trocas fonológicas" },
  ]);
}

export function Step13({
  value,
  onChange,
}: {
  value: Partial<Step13_Memoria>;
  onChange: Updater<"step13">;
}) {
  return likertList(value, onChange, [
    { k: "recorda_instrucoes", l: "Recorda instruções dadas" },
    { k: "recorda_historias", l: "Recorda histórias ouvidas" },
    { k: "memoriza_sequencias", l: "Memoriza sequências" },
    { k: "reconhece_informacoes", l: "Reconhece informações já aprendidas" },
  ]);
}

export function Step14({
  value,
  onChange,
}: {
  value: Partial<Step14_Motora>;
  onChange: Updater<"step14">;
}) {
  return (
    <div className="space-y-1">
      <p className="text-sm font-bold text-primary mb-2">Motricidade fina</p>
      {likertList(value, onChange, [
        { k: "segura_lapis", l: "Segura o lápis adequadamente" },
        { k: "recorta", l: "Recorta com tesoura" },
        { k: "abotoa", l: "Abotoa roupas" },
        { k: "manipula_pequenos", l: "Manipula pequenos objetos" },
      ])}
      <p className="text-sm font-bold text-primary mt-3 mb-2">Motricidade grossa</p>
      {likertList(value, onChange, [
        { k: "corre", l: "Corre" },
        { k: "salta", l: "Salta" },
        { k: "equilibra", l: "Equilibra-se" },
        { k: "chuta_bola", l: "Chuta bola" },
      ])}
    </div>
  );
}

export function Step15({
  value,
  onChange,
}: {
  value: Partial<Step15_Emocional>;
  onChange: Updater<"step15">;
}) {
  return likertList(value, onChange, [
    { k: "ansiedade", l: "Apresenta ansiedade" },
    { k: "irritabilidade", l: "Apresenta irritabilidade" },
    { k: "baixa_autoestima", l: "Demonstra baixa autoestima" },
    { k: "frustracao", l: "Frustra-se facilmente" },
    { k: "mudancas_humor", l: "Mudanças frequentes de humor" },
  ]);
}

export function Step16({
  value,
  onChange,
}: {
  value: Partial<Step16_Autonomia>;
  onChange: Updater<"step16">;
}) {
  return likertList(value, onChange, [
    { k: "alimentacao", l: "Alimenta-se sozinho(a)" },
    { k: "higiene", l: "Cuida da higiene pessoal" },
    { k: "vestuario", l: "Veste-se sozinho(a)" },
    { k: "organizacao_materiais", l: "Organiza seus materiais" },
    { k: "independencia_diaria", l: "Independência em tarefas diárias" },
  ]);
}

// ─── ETAPA 17 ──────────────────────────────────────────────────────
export function Step17({
  value,
  onChange,
}: {
  value: Partial<Step17_FuncoesExecutivas>;
  onChange: Updater<"step17">;
}) {
  return (
    <div className="space-y-1">
      <p className="text-xs text-muted-foreground mb-3">
        Escalas adaptadas para triagem: SNAP-IV, M-CHAT-R, CARS-2, ABAS, Vineland
      </p>
      <p className="text-sm font-bold text-primary mb-2">Memória de trabalho</p>
      {likertList(value, onChange, [
        { k: "memoria_trabalho", l: "Mantém informações na mente para usar" },
      ])}
      <p className="text-sm font-bold text-primary mt-3 mb-2">Planejamento</p>
      {likertList(value, onChange, [
        { k: "planejamento", l: "Consegue planejar e sequenciar passos" },
      ])}
      <p className="text-sm font-bold text-primary mt-3 mb-2">Controle inibitório</p>
      {likertList(value, onChange, [
        { k: "controle_inibitorio", l: "Consegue controlar impulsos e esperar" },
      ])}
      <p className="text-sm font-bold text-primary mt-3 mb-2">Flexibilidade cognitiva</p>
      {likertList(value, onChange, [
        { k: "flexibilidade_cognitiva", l: "Consegue mudar de estratégia ou pensamento" },
        { k: "organizacao_pensamento", l: "Organiza pensamentos de forma lógica" },
        { k: "iniciativa", l: "Consegue iniciar atividades autonomamente" },
      ])}
    </div>
  );
}
