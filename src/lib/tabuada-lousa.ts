/** Explicações infinitas e exatas da tabuada para a lousa. Tudo é calculado, nada é escrito à mão. */

export type PassoLousa = { linha: string; fala: string };
export type Metodo = { id: string; nome: string; passos: PassoLousa[] };

/** Converte a escrita matemática em fala correta em português. */
export function paraFala(t: string): string {
  return t
    .replace(/(\d)\s*×\s*(\d)/g, "$1 vezes $2")
    .replace(/×/g, " vezes ")
    .replace(/\s*=\s*/g, " é igual a ")
    .replace(/\s*\+\s*/g, " mais ")
    .replace(/\s*[−-]\s*(?=\d)/g, " menos ")
    .replace(/\s+/g, " ")
    .trim();
}
const p = (linha: string, fala?: string): PassoLousa => ({ linha, fala: paraFala(fala ?? linha) });
const soma = (n: number, vezes: number) => Array.from({ length: vezes }, () => n).join(" + ");
const saltos = (passo: number, qtd: number) => Array.from({ length: qtd }, (_, i) => passo * (i + 1)).join(", ");

export function metodosPara(a: number, b: number): Metodo[] {
  const r = a * b;
  const m: Metodo[] = [];
  m.push({ id: "grupos", nome: "Grupos iguais", passos: [
    p(`${a} × ${b}`, `Vamos descobrir quanto é ${a} vezes ${b}.`),
    p(`${a} grupos de ${b}`, `${a} vezes ${b} quer dizer ${a} grupos, e cada grupo tem ${b}.`),
    p(`${soma(b, a)}`, `Juntando os grupos, somamos o ${b}, ${a} vezes.`),
    p(`= ${r}`, `O resultado é ${r}.`),
    p(`${a} × ${b} = ${r}`),
  ] });
  m.push({ id: "saltos", nome: "Pulos na reta", passos: [
    p(`${a} × ${b}`, `Agora vamos pular de ${b} em ${b} na reta dos números.`),
    p(`0 → ${saltos(b, a)}`, `Contando os pulos: ${saltos(b, a)}.`),
    p(`${a} pulos de ${b} = ${r}`, `Demos ${a} pulos de ${b} e chegamos no ${r}.`),
    p(`${a} × ${b} = ${r}`),
  ] });
  if (a !== b) m.push({ id: "troca", nome: "Trocar a ordem", passos: [
    p(`${a} × ${b} = ${b} × ${a}`, `Na multiplicação, trocar a ordem não muda o resultado.`),
    p(`${b} grupos de ${a}`, `Então podemos pensar em ${b} grupos de ${a}.`),
    p(`${soma(a, b)} = ${r}`),
    p(`${a} × ${b} = ${r}`, `Por isso ${a} vezes ${b} também é ${r}. Você aprende duas contas de uma vez!`),
  ] });
  if (a >= 2) m.push({ id: "vizinha", nome: "Conta vizinha", passos: [
    p(`${a} × ${b}`, `Vamos usar uma conta que já sabemos, com um grupo a menos.`),
    p(`${a - 1} × ${b} = ${(a - 1) * b}`),
    p(`${(a - 1) * b} + ${b} = ${r}`, `Agora colocamos mais um grupo de ${b}: ${(a - 1) * b} mais ${b} é igual a ${r}.`),
    p(`${a} × ${b} = ${r}`),
  ] });
  if (a > 5) m.push({ id: "partes", nome: "Separar em partes", passos: [
    p(`${a} = 5 + ${a - 5}`, `Vamos separar o ${a} em 5 e ${a - 5}, que são contas mais fáceis.`),
    p(`5 × ${b} = ${5 * b}`),
    p(`${a - 5} × ${b} = ${(a - 5) * b}`),
    p(`${5 * b} + ${(a - 5) * b} = ${r}`, `Juntamos as duas partes: ${5 * b} mais ${(a - 5) * b} é igual a ${r}.`),
    p(`${a} × ${b} = ${r}`),
  ] });
  if (a === 2 || a === 4 || a === 8) {
    const dobros = [b];
    while (dobros.length <= Math.log2(a)) dobros.push(dobros[dobros.length - 1] * 2);
    m.push({ id: "dobro", nome: "Dobrar", passos: [
      p(`${a} × ${b}`, `Multiplicar por ${a} é dobrar ${Math.log2(a)} vez${a > 2 ? "es" : ""}.`),
      ...dobros.slice(1).map((d, i) => p(`${dobros[i]} + ${dobros[i]} = ${d}`, `O dobro de ${dobros[i]} é ${d}.`)),
      p(`${a} × ${b} = ${r}`),
    ] });
  }
  if (a === 9 || a === 10) m.push({ id: "dez", nome: a === 10 ? "Colocar o zero" : "Dez menos um grupo", passos: a === 10 ? [
    p(`10 × ${b}`, `Vezes 10 é contar de 10 em 10.`),
    p(`${saltos(10, b)}`),
    p(`${b} com um zero = ${r}`, `Veja: é o ${b} com um zero no final, ${r}.`),
  ] : [
    p(`9 × ${b}`, `9 é quase 10. Fazemos vezes 10 e tiramos um grupo.`),
    p(`10 × ${b} = ${10 * b}`),
    p(`${10 * b} − ${b} = ${r}`, `Tiramos um grupo de ${b}: ${10 * b} menos ${b} é igual a ${r}.`),
    p(`9 × ${b} = ${r}`),
  ] });
  if (a === 5) m.push({ id: "mao", nome: "Contar nas mãos", passos: [
    p(`5 × ${b}`, `Cada mão tem 5 dedos. Vamos contar de 5 em 5.`),
    p(`${saltos(5, b)}`),
    p(`5 × ${b} = ${r}`, `O resultado da tabuada do 5 sempre termina em 0 ou 5. Aqui deu ${r}.`),
  ] });
  return m;
}

/** Sequência infinita de explicações: percorre métodos e contas sem fim. */
export function explicacao(n: number, indice: number): { a: number; b: number; metodo: Metodo } {
  const b = ((indice * 7 + 3) % 10) + 1;
  const ms = metodosPara(n, b);
  return { a: n, b, metodo: ms[indice % ms.length] };
}
