## O que vou construir

Geografia é uma **nova disciplina** no curso-v4, com um paradigma visual **totalmente diferente** de Matemática e Português. Nada de leitura de texto — a criança **investiga fotografias reais** com o **GeoScanner** e descobre por que os lugares são como são.

Vou entregar **a Aula 1 completa e polida** primeiro, pra você validar cena por cena antes de eu escalar pras próximas aulas/unidades.

## Aula piloto — EF02GE01 · "Por que nem toda casa é igual?"

10 momentos, todos visuais e interativos, seguindo a sua história do Aurora + GeoScanner:

1. **Motivação** — Aurora entrega o GeoScanner. Só imagem + fala curta.
2. **Galeria dos 5 lugares** — grade com 5 fotos reais (apartamento, casa urbana, sítio, ribeirinha, aldeia). Toque abre o Modo Investigador.
3. **Modo Investigador** — foto grande, hotspots animados no GeoScanner destacando pistas (📍rio, 🌧chuva, 🪵madeira, ⬆estacas). Sem texto explicativo ainda.
4. **Hipótese** — pergunta ("Por que essa casa fica acima da água?"), criança escolhe. Só depois vem a explicação.
5. **Comparar** — 2 fotos lado a lado. "Qual suporta enchente?" / "Qual reúne mais famílias?"
6. **Painel comparativo** — tabela visual (clima × construção × motivo) que se preenche com as descobertas da criança.
7. **Investigação livre** — foto nova, criança marca as pistas que enxerga (☑ rio, ☑ estrada, ☑ plantação) e recebe leitura das pistas.
8. **Laboratório do Explorador** — a criança muda ☀/🌧/🏞/🌊 e a moradia se adapta na tela.
9. **Arquiteto do Lugar Certo (minijogo)** — cenário sorteado (rio + chuva + pescadores) → criança escolhe materiais e formato da casa.
10. **Missão em família** — observar 2 casas da rua e registrar no Diário do GeoExplorador.

Recompensas: 200 XP, 120 moedas, insígnia "Investigador das Moradias".

## Arquitetura técnica (para dev)

**Novo contrato + novo player, isolados** (não mexem em Matemática/Português):

- `src/escola-brilha/curso-v4/types.ts` — adicionar `AulaGeografiaV4`, `CursoGeografia`, blocos (`GaleriaLugares`, `ModoInvestigador`, `Hipotese`, `CompararLugares`, `PainelComparativo`, `InvestigacaoLivre`, `LaboratorioExplorador`, `ArquitetoLugarCerto`). Expandir `CursoAny`.
- `src/escola-brilha/curso-v4/registry.ts` — adicionar `isGeografia`, `getCursoGeografia`, `getAulaGeografiaFromCurso`.
- `src/escola-brilha/curso-v4/player-geografia/PlayerGeografiaV4.tsx` — player novo com estética de "campo de exploração" (fundo escura, foto ocupando quase tudo, HUD tipo scanner).
- `src/escola-brilha/curso-v4/player-geografia/blocos/*.tsx` — um componente por bloco (10 blocos).
- `src/escola-brilha/curso-v4/geografia-2ano/curso.ts` + `unidade-1/aula-01-lugares-onde-vivemos.ts`.
- `src/routes/escola-brilha.aula-geo-v4.$curso.$aula.tsx` — nova rota espelhando o padrão de Português.
- Cadastrar Geografia no listagem de cursos (mesma trilha) para aparecer no seletor.

**Assets**: 5 fotografias reais dos tipos de moradia. Vou gerar via `imagegen` em estilo fotográfico realista (não kawaii — Geografia pede realidade), salvar em `src/assets/geografia/moradias/` e subir como Lovable Assets.

## Fluxo de validação (respeitando sua regra)

Faço em **3 etapas separadas**, cada uma você valida antes da próxima:

1. **Etapa A — infra + galeria + Modo Investigador de 1 lugar** (Casa Ribeirinha completa). Você aprova o "visual novo".
2. **Etapa B — resto dos 4 lugares + hipóteses + painel comparativo**.
3. **Etapa C — Laboratório + Arquiteto + Missão em família + polimento**.

Depois de aprovar as 3 etapas, escalo pras próximas aulas da Unidade 1 e para as outras unidades.

## Nesta rodada (Etapa A)

- Tipos + registry + rota + curso stub.
- Player Geografia (shell + HUD scanner).
- Bloco `Motivação`, `GaleriaLugares` (5 fotos), `ModoInvestigador` funcionando na Casa Ribeirinha.
- 1 fotografia real gerada (ribeirinha) + placeholders pra outras 4.
- Aula acessível em `/escola-brilha/aula-geo-v4/geografia-2ano/aula-01-lugares-onde-vivemos`.

Confirma que posso começar pela **Etapa A** desse jeito?
