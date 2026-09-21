import { Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpenCheck, Clock3, Eye, GraduationCap, Printer } from "lucide-react";
import { useEffect, useState } from "react";
import { url as madeiraImg } from "@/assets/ciencias-1ano/u1-a1/brinquedos-madeira.jpg.asset.json";
import { url as vidroImg } from "@/assets/ciencias-1ano/u1-a1/copo-vidro.jpg.asset.json";
import { url as metalImg } from "@/assets/ciencias-1ano/u1-a1/panela-metal.jpg.asset.json";
import { url as tecidoImg } from "@/assets/ciencias-1ano/u1-a1/roupa-tecido.jpg.asset.json";
import { url as plasticoImg } from "@/assets/ciencias-1ano/u1-a1/garrafa-plastico.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { TeacherShell as Shell } from "@/components/teacher/TeacherShell";

type PrintMode = "all" | "teacher" | "student";

const materiais = [
  { nome: "Madeira", imagem: madeiraImg, pistas: "rígida, pode ter veios e vem de partes das árvores", exemplos: "lápis, mesa e brinquedo" },
  { nome: "Vidro", imagem: vidroImg, pistas: "pode ser transparente e é quebrável", exemplos: "copo e janela" },
  { nome: "Metal", imagem: metalImg, pistas: "geralmente é rígido; alguns metais têm brilho", exemplos: "panela, chave e moeda" },
  { nome: "Tecido", imagem: tecidoImg, pistas: "flexível, dobra e é formado por fios", exemplos: "camisa, meia e cobertor" },
  { nome: "Plástico", imagem: plasticoImg, pistas: "pode ser rígido ou flexível e ter muitas cores", exemplos: "garrafa, régua e brinquedo" },
];

const adaptacoes = [
  { perfil: "TEA", orientacao: "Antecipe a sequência com quatro cartões: observar, comparar, registrar e concluir. Evite exigir toque em materiais que causem desconforto sensorial." },
  { perfil: "TDAH", orientacao: "Entregue dois objetos por vez, use etapas de até cinco minutos e permita que o aluno seja o organizador dos cartões." },
  { perfil: "Dislexia", orientacao: "Leia os comandos em voz alta, use cartões com imagem e palavra, fonte ampliada e não desconte ortografia nesta habilidade de Ciências." },
  { perfil: "Deficiência intelectual", orientacao: "Comece com duas categorias bem contrastantes, modele uma resposta completa e só depois acrescente outros materiais." },
  { perfil: "Disgrafia ou dificuldade motora", orientacao: "Aceite apontar, circular, colar cartões, responder oralmente ou usar comunicação alternativa no lugar da escrita extensa." },
  { perfil: "Hiperfoco", orientacao: "Troque os objetos pelos do interesse do aluno, mantendo a pergunta científica: de que material é feito e qual propriedade ajuda no uso?" },
];

function CabecalhoFolha({ pagina, titulo }: { pagina: string; titulo: string }) {
  return <header className="border-b-2 border-emerald-700 pb-3">
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-xs font-black uppercase tracking-widest text-emerald-700">NeuroBrilha Kids · Ciências · 1º ano</p>
        <h2 className="mt-1 text-2xl font-black text-slate-900">{titulo}</h2>
      </div>
      <span className="rounded-full border border-emerald-700 px-3 py-1 text-xs font-black text-emerald-800">{pagina}</span>
    </div>
    <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
      <p>Nome: __________________________________</p>
      <p>Data: ____ / ____ / ______</p>
    </div>
  </header>;
}

function Rodape() {
  return <footer className="mt-8 flex items-center justify-between border-t pt-3 text-[10px] font-bold uppercase tracking-wider text-slate-500">
    <span>NeuroBrilha Kids · material pedagógico</span><span>EF01CI01</span>
  </footer>;
}

export function InclusiveLessonEF01CI01() {
  const [printMode, setPrintMode] = useState<PrintMode>("all");

  useEffect(() => {
    const reset = () => setPrintMode("all");
    window.addEventListener("afterprint", reset);
    return () => window.removeEventListener("afterprint", reset);
  }, []);

  const imprimir = (mode: PrintMode) => {
    setPrintMode(mode);
    requestAnimationFrame(() => requestAnimationFrame(() => window.print()));
  };

  const showTeacher = printMode !== "student";
  const showStudent = printMode !== "teacher";

  return <Shell>
    <main className="mx-auto max-w-5xl space-y-5 p-4 md:p-6 print:max-w-none print:p-0">
      <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link to="/area-professor/biblioteca-inclusiva" className="inline-flex min-h-11 items-center gap-2 font-bold text-primary">
          <ArrowLeft className="h-4 w-4"/> Biblioteca
        </Link>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => imprimir("teacher")}><GraduationCap className="mr-2 h-4 w-4"/>Professor</Button>
          <Button variant="outline" onClick={() => imprimir("student")}><BookOpenCheck className="mr-2 h-4 w-4"/>Estudante</Button>
          <Button onClick={() => imprimir("all")}><Printer className="mr-2 h-4 w-4"/>Material completo</Button>
        </div>
      </div>

      <header className="overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 to-teal-600 p-6 text-white print:rounded-none print:border-2 print:border-slate-800 print:bg-white print:text-black md:p-8">
        <div className="flex flex-wrap items-center gap-2 text-sm font-black uppercase tracking-wider">
          <span className="rounded-full bg-white/20 px-3 py-1 print:border">EF01CI01</span>
          <span>Ciências · 1º ano</span><span>·</span><span>30 minutos</span>
        </div>
        <h1 className="mt-3 text-3xl font-black md:text-5xl">Do que são feitas as coisas?</h1>
        <p className="mt-3 max-w-3xl text-lg">Comparar objetos do cotidiano, identificar seus materiais e relacionar propriedades observáveis ao uso.</p>
        <p className="mt-4 rounded-xl bg-black/15 p-3 text-sm font-semibold print:border print:bg-white">
          Aula original: Escola Brilha · Ciências 1º ano · Unidade 1 · Aula 1. Material adaptado para ensino presencial e impressão.
        </p>
      </header>

      {showTeacher && <section data-print-bundle="teacher" className="space-y-5">
        <article className="rounded-3xl border-2 border-emerald-200 bg-white p-6 shadow-sm print:break-after-page print:rounded-none print:border-slate-700 print:shadow-none md:p-8">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-700">Página 1 · roteiro do professor</p>
          <h2 className="mt-2 text-2xl font-black">Antes da aula</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <section className="rounded-2xl bg-emerald-50 p-5 print:border print:bg-white">
              <h3 className="font-black">Objetivo observável</h3>
              <p className="mt-2">Ao final, o estudante identifica o material de pelo menos quatro objetos e justifica uma escolha usando uma propriedade observável.</p>
            </section>
            <section className="rounded-2xl bg-amber-50 p-5 print:border print:bg-white">
              <h3 className="font-black">Materiais seguros</h3>
              <p className="mt-2">Lápis de madeira, régua plástica, colher de metal, retalho de tecido e as fotografias desta aula. O adulto segura o objeto de vidro.</p>
            </section>
          </div>
          <section className="mt-5 rounded-2xl border p-5">
            <h3 className="font-black">Cuidado científico</h3>
            <p className="mt-2">Não ensine que um material é sempre mais pesado que outro. Compare propriedades do objeto observado: rígido ou flexível, transparente ou opaco, liso ou áspero. Peso depende do tamanho e da quantidade de material.</p>
          </section>
          <Rodape/>
        </article>

        <article className="rounded-3xl border-2 border-emerald-200 bg-white p-6 shadow-sm print:break-after-page print:rounded-none print:border-slate-700 print:shadow-none md:p-8">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-700">Página 2 · condução em 30 minutos</p>
          <h2 className="mt-2 text-2xl font-black">Ensine passo a passo</h2>
          <ol className="mt-5 space-y-4">
            {[
              ["0–5 min", "Descoberta", "Mostre uma colher de metal e um lápis. Pergunte: do que cada objeto é feito? Como você descobriu? Registre as hipóteses sem corrigir imediatamente."],
              ["5–10 min", "Modelagem", "Pense em voz alta: esta colher é rígida e tem brilho. Ela é feita de metal. A propriedade observada é a pista; metal é o nome do material."],
              ["10–18 min", "Investigação guiada", "Apresente madeira, vidro, metal, tecido e plástico. Em duplas, os alunos associam imagem, nome, propriedade e exemplo."],
              ["18–25 min", "Prática", "Use as folhas do estudante. Leia um comando por vez e permita resposta oral, apontada, colada, desenhada ou escrita."],
              ["25–30 min", "Fechamento", "Pergunte: qual material escolheria para uma toalha? E para uma janela? A resposta precisa incluir uma propriedade que justifique a escolha."],
            ].map(([tempo, titulo, texto]) => <li key={tempo} className="grid gap-3 rounded-2xl border p-4 md:grid-cols-[110px_150px_1fr]">
              <span className="flex items-center gap-2 font-black text-emerald-700"><Clock3 className="h-4 w-4"/>{tempo}</span><b>{titulo}</b><p>{texto}</p>
            </li>)}
          </ol>
          <Rodape/>
        </article>

        <article className="rounded-3xl border-2 border-emerald-200 bg-white p-6 shadow-sm print:break-after-page print:rounded-none print:border-slate-700 print:shadow-none md:p-8">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-700">Página 3 · adaptações funcionais</p>
          <h2 className="mt-2 text-2xl font-black">Mude o acesso, não o objetivo</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {adaptacoes.map((item) => <section key={item.perfil} className="rounded-2xl border p-4">
              <h3 className="font-black text-indigo-800">{item.perfil}</h3><p className="mt-2 text-sm leading-relaxed">{item.orientacao}</p>
            </section>)}
          </div>
          <Rodape/>
        </article>
      </section>}

      {showStudent && <section data-print-bundle="student" className="space-y-5">
        <article className="rounded-3xl border-2 border-sky-200 bg-white p-6 shadow-sm print:break-after-page print:rounded-none print:border-slate-700 print:shadow-none md:p-8">
          <CabecalhoFolha pagina="Folha 1" titulo="Conheça os materiais"/>
          <p className="mt-5 text-lg font-bold">Observe as imagens. O professor fará a leitura dos cartões.</p>
          <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3">
            {materiais.map((material) => <figure key={material.nome} className="overflow-hidden rounded-2xl border-2 border-slate-200">
              <img src={material.imagem} alt={`Exemplo de objeto feito de ${material.nome.toLowerCase()}`} className="h-32 w-full object-cover print:h-28"/>
              <figcaption className="p-3"><h3 className="text-lg font-black">{material.nome}</h3><p className="mt-1 text-sm">{material.pistas}</p><p className="mt-2 text-xs font-bold text-slate-500">Exemplos: {material.exemplos}</p></figcaption>
            </figure>)}
          </div>
          <Rodape/>
        </article>

        <article className="rounded-3xl border-2 border-sky-200 bg-white p-6 shadow-sm print:break-after-page print:rounded-none print:border-slate-700 print:shadow-none md:p-8">
          <CabecalhoFolha pagina="Folha 2" titulo="Detetives dos materiais"/>
          <p className="mt-5 text-lg font-bold">Ligue cada objeto ao material principal de que ele é feito.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[{ n: "1", nome: "Panela", img: metalImg }, { n: "2", nome: "Copo", img: vidroImg }, { n: "3", nome: "Roupa", img: tecidoImg }, { n: "4", nome: "Garrafa", img: plasticoImg }].map((objeto) => <div key={objeto.n} className="flex items-center gap-4 rounded-2xl border-2 p-3">
              <span className="text-2xl font-black text-sky-700">{objeto.n}</span><img src={objeto.img} alt={objeto.nome} className="h-20 w-24 rounded-xl object-cover"/><b className="text-lg">{objeto.nome}</b>
            </div>)}
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
            {["VIDRO", "METAL", "TECIDO", "PLÁSTICO"].map((nome) => <div key={nome} className="rounded-2xl border-2 border-dashed border-slate-400 p-4 text-center font-black">{nome}</div>)}
          </div>
          <section className="mt-7 rounded-2xl bg-sky-50 p-5 print:border print:bg-white">
            <p className="font-black">Escolha um dos objetos. Complete:</p>
            <p className="mt-4">O objeto __________________ é feito principalmente de __________________.</p>
            <p className="mt-5">Uma pista que observei foi ______________________________________________.</p>
          </section>
          <Rodape/>
        </article>

        <article className="rounded-3xl border-2 border-sky-200 bg-white p-6 shadow-sm print:break-after-page print:rounded-none print:border-slate-700 print:shadow-none md:p-8">
          <CabecalhoFolha pagina="Folha 3" titulo="Escolha o material adequado"/>
          <div className="mt-6 space-y-6 text-lg">
            <section><p className="font-black">1. Para fazer uma janela que permita a passagem de luz, qual material você escolheria?</p><p className="mt-3">☐ Tecido &nbsp;&nbsp; ☐ Vidro &nbsp;&nbsp; ☐ Madeira</p><p className="mt-3">Por quê? ______________________________________________________________</p></section>
            <section><p className="font-black">2. Para fazer uma camiseta flexível, qual material você escolheria?</p><p className="mt-3">☐ Metal &nbsp;&nbsp; ☐ Tecido &nbsp;&nbsp; ☐ Vidro</p><p className="mt-3">Por quê? ______________________________________________________________</p></section>
            <section><p className="font-black">3. Observe um objeto da sala e complete.</p><p className="mt-3">Objeto: __________________________ Material: __________________________</p><p className="mt-4">Propriedade observada: __________________________________________________</p></section>
          </div>
          <Rodape/>
        </article>
      </section>}

      {showTeacher && <section data-print-bundle="teacher" className="space-y-5">
        <article className="rounded-3xl border-2 border-emerald-300 bg-emerald-50 p-6 print:break-before-page print:rounded-none print:border-slate-700 print:bg-white md:p-8">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-800">Somente para o professor</p>
          <h2 className="mt-2 text-2xl font-black">Gabarito, observação e intervenção</h2>
          <div className="mt-5 space-y-4">
            <section className="rounded-2xl border bg-white p-4"><h3 className="font-black">Folha 2</h3><p className="mt-2">1–Metal; 2–Vidro; 3–Tecido; 4–Plástico. Na frase, aceitar qualquer combinação coerente entre objeto, material e propriedade observável.</p></section>
            <section className="rounded-2xl border bg-white p-4"><h3 className="font-black">Folha 3</h3><p className="mt-2">1–Vidro, porque permite passagem de luz ou pode ser transparente. 2–Tecido, porque é flexível e apropriado para vestir. 3–Resposta variável, desde que objeto, material e propriedade sejam coerentes.</p></section>
            <section className="rounded-2xl border bg-white p-4"><h3 className="font-black">Se o aluno escolher pela aparência</h3><p className="mt-2">Mostre dois objetos de cores parecidas feitos de materiais diferentes. Pergunte: além da cor, o que podemos tocar ou observar para descobrir o material?</p></section>
            <section className="rounded-2xl border bg-white p-4"><h3 className="font-black">Se confundir objeto com material</h3><p className="mt-2">Modele a frase: panela é o objeto; metal é o material. Depois peça outra dupla usando copo e vidro.</p></section>
            <section className="rounded-2xl border bg-white p-4"><h3 className="font-black">Se souber nomear, mas não justificar</h3><p className="mt-2">Ofereça escolhas visuais de propriedades: rígido, flexível, transparente e opaco. O aluno aponta uma pista e completa oralmente.</p></section>
          </div>
          <section className="mt-5 rounded-2xl border-2 border-dashed border-emerald-500 p-4">
            <h3 className="flex items-center gap-2 font-black"><Eye className="h-5 w-5"/>Registro rápido</h3>
            <p className="mt-3">☐ Identificou materiais &nbsp; ☐ Comparou propriedades &nbsp; ☐ Justificou uma escolha</p>
            <p className="mt-4">Apoio que funcionou: _____________________________________________________</p>
            <p className="mt-4">Próximo passo: __________________________________________________________</p>
          </section>
          <Rodape/>
        </article>
      </section>}
    </main>
  </Shell>;
}
