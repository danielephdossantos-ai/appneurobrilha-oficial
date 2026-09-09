---
name: Contrato — Auditoria matemática do app
description: Contrato em duas partes aprovado pela usuária. Parte 1 = melhorias pedagógicas no 8º U1 aulas 02-07. Parte 2 = auditoria matemática pura série por série (3º→4º→5º→6º), uma por turno, com tabela de erros antes de corrigir.
type: feature
---

## Contrato ativo — ver `.lovable/plan.md` para versão completa.

## Parte 1 (fazer primeiro, um turno só)
Aplicar 6 melhorias pedagógicas nas aulas 02–07 do 8º ano U1 (`src/escola-brilha/curso-v4/matematica-8ano/unidade-1/`). Aula 01 já pronta, NÃO mexer.

Melhorias: passos como `trinomioPassoAPasso` (não tabela), descoberta como passo-a-passo animado, contra-exemplo (−2)² vs −2² na aula 02, caso mantissa <1 na aula 05, simplificação obrigatória nas avaliações.

**Regra crítica**: as 6 aulas já estão matematicamente 100% corretas — auditadas linha por linha. Estas mudanças são elevar padrão, NÃO consertar erro.

## Parte 2 (série por série, um turno cada)
Ordem: **3º → 4º → 5º → 6º**. Uma série por turno.

Fluxo por turno:
1. Ler todas as unidades da série alvo.
2. Entregar **tabela de erros** (aula, momento, erro, correção, severidade CRÍTICO/MÉDIO/LEVE).
3. Esperar aprovação da usuária.
4. Aplicar correções em bloco.
5. Confirmar typecheck limpo.

Foco: **só corretude matemática**, não melhoria pedagógica.

## Fora do escopo
- 2º ano (travado)
- EI e 1º ano matemática (somente leitura)
- 7º e Médio (não existem)
- 8º U2–U7 (só depois do 6º, se a usuária pedir)

## Regras
- Nunca misturar as duas partes no mesmo turno.
- Nunca declarar pronto sem conferir cada conta.
- Erro crítico encontrado fora do foco → avisar na hora.
