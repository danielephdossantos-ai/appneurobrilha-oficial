# Motor Pedagógico — Escola Brilha

Núcleo **único** responsável por toda a lógica pedagógica do aplicativo.

```ts
import { MotorPedagogico } from "@/escola-brilha/motor";
```

## Responsabilidades

| Área | API |
|---|---|
| Carregar missão da BNCC | `MotorPedagogico.missoes.carregar(codigo)` |
| Aula base (fallback) | `MotorPedagogico.missoes.carregarAulaBase(codigo)` |
| Listar por disciplina/ano | `missoes.listarPorDisciplina` / `listarPorAno` |
| Próxima habilidade na sequência oficial | `MotorPedagogico.sequencia.proxima(codigo)` |
| Adaptação por idade | `MotorPedagogico.adaptacaoIdade.calcular(perfil)` |
| Adaptação por desempenho | `MotorPedagogico.adaptacaoDesempenho.calcular(desempenho)` |
| Registrar conclusão + repetição espaçada | `MotorPedagogico.revisao.registrarConclusao(...)` |
| Revisões recomendadas | `MotorPedagogico.revisao.recomendar(childId)` |
| Progresso / nível de domínio | `MotorPedagogico.progresso.*` |
| Próxima missão + roteiro | `MotorPedagogico.recomendacoes.*` |
| Conquistas | `MotorPedagogico.conquistas.registrar(...)` |

## Regra de ouro

**Nenhum componente, rota ou player pode implementar lógica pedagógica
própria.** Sempre passar pelo Motor. Se uma regra nova aparecer, ela vai
para dentro deste módulo (ou para os submódulos que ele compõe), nunca
duplicada em `player/`, `routes/` ou hooks.

Este arquivo é a **fachada oficial** — usa e centraliza:

- `registry.ts` (aulas base)
- `biblioteca-oficial/` (missões oficiais)
- `bncc-sequencia.ts` (sequência oficial da BNCC)
- `proxima-missao.ts` (recomendação da próxima missão)
- RPCs do banco: `registrar_conclusao_aula`, `recomendar_revisoes`,
  `pode_avancar_habilidade`.
