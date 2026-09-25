# Tabuada Brilha — aprender de verdade

Hoje a tela é só "conta + digitar resposta", com 3 níveis. Ela vira uma trilha: a criança escolhe a tabuada, primeiro aprende com o Professor Pip e depois joga.

## Como a criança vai aprender (métodos comprovados)
Ordem das tabuadas, da mais fácil para a mais difícil: 1 → 10 → 2 → 5 → 3 → 4 → 9 → 6 → 7 → 8.

Cada tabuada tem 4 etapas fixas, sempre com explicação antes de jogar:

1. **Entender (Concreto)**: grupos de objetos com o mascote. "3 × 4 são 3 pratinhos com 4 maçãs." A criança toca para juntar os grupos, e o Pip explica em voz alta.
2. **Ver (Figura)**: uma grade de pontinhos que a criança monta tocando. Mostra que 3 × 4 é o mesmo que 4 × 3, o que corta pela metade o que precisa decorar.
3. **Estratégia da tabuada**: um truque próprio de cada uma, como dobrar para a do 2, contar de 5 em 5 na mão, a do 9 nos dedos, a do 10 com um zero no fim, e a do 4 como o dobro do dobro.
4. **Jogos**: só abrem depois das etapas anteriores.
   - **Pula-Pula**: pular na reta numérica contando de N em N.
   - **Complete a Sequência**: 3, 6, _, 12.
   - **Balões**: estourar a resposta certa entre 3 opções, sem digitar.
   - **Memória da Tabuada**: formar pares de conta e resultado.
   - **Desafio Relâmpago**: opcional, sem cronômetro que pressione. O tempo só aparece se a criança quiser.

## Adaptações para crianças com necessidades especiais
- Sempre 3 opções para tocar, e digitar é opcional (ajuda na dificuldade motora e na dislexia).
- Quando a criança erra, o Pip mostra o jeito certo com os grupos e explica o raciocínio, sem "errado!" nem perda de pontos.
- Rodadas curtas de 5 contas, com pausa e estrela no final (ajuda no TDAH).
- Tela limpa: uma coisa por vez, letras grandes e sem animações piscando (ajuda no TEA).
- Revisão espaçada: as contas erradas voltam depois.
- O progresso fica salvo neste aparelho, e a próxima tabuada abre quando a anterior termina.

## Visual
Usa os mascotes que o app já tem, sem criar imagens novas. A voz é a mesma do app.

## Detalhes técnicos
- `src/lib/tabuada-brilha.ts`: ordem das tabuadas, estratégia por tabuada, gerador de questões com distratores plausíveis e fila de revisão.
- `src/routes/tabuada-brilha.tsx`: mapa das tabuadas + fluxo das etapas (Entender → Ver → Estratégia → Jogos).
- Componentes novos em `src/components/tabuada/`: `GruposConcretos`, `GradeArray`, `PulaPula`, `CompleteSequencia`, `Baloes`, `MemoriaTabuada`.
- Progresso salvo em localStorage por criança; voz pelo TTS nativo que o app já usa.
- Testes cobrindo geração, distratores e desbloqueio.
