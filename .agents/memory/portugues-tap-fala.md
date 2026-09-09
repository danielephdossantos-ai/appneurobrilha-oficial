# Português (EF01LP*) — padrão travado: tap image + speak name

## Regra
Toda aula de Língua Portuguesa (EI e Ensino Fundamental — `EF01LP*` e futuras `EF02LP*` etc.) deve usar o tipo interativo `escolherFigura` sempre que a atividade for "reconhecer / associar palavra ↔ figura".

- Criança **toca direto na imagem** (não em botão de texto).
- Ao tocar, o TTS fala em voz alta o `nome` da opção (ex.: "SOL") — associação áudio ↔ visual ↔ texto.
- Cada figura mostra o rótulo escrito embaixo (associação visual ↔ texto), mas a criança não precisa ler pra responder.
- **NÃO** usar `contarQuiz` em Português (contarQuiz é para matemática — conta cliques).

## Onde NÃO se aplica
- Educação Infantil (EI03*) — mantido como está, não alterar aulas existentes.
- Matemática (EF*MA*) — segue padrão `contarQuiz` / `operacao` (contar tocando).

## Shape do tipo
Definido em `src/escola-brilha/types.ts`:

```ts
{
  tipo: "escolherFigura";
  titulo: string;
  instrucao?: string;
  pergunta?: string;
  opcoes: Array<{ nome: string; imagemUrl: string; rotulo?: string }>;
  correta: number;
  acerto?: string;
  erro?: string;
}
```

Renderer: `JogoEscolherFigura` em `src/escola-brilha/player/MultiModal.tsx`.

## Referência aprovada
Aula gabarito: `src/escola-brilha/data/EF01LP02.ts` — fases 1, 2 e 5.
