# Biblioteca Pedagógica

Cada arquivo `.json` representa **uma única habilidade BNCC** e deve ser nomeado com o código da habilidade (ex.: `EF01MA01.json`, `EI03EO02.json`).

## Estrutura

```
biblioteca-pedagogica/
  educacao_infantil/
  1ano/ ... 9ano/
    portugues/
    matematica/
    ciencias/
    historia/
    geografia/
    ingles/
    arte/
    educacao_fisica/
    ensino_religioso/
```

## Importação

Use a página `/admin/import-lessons` para enviar os arquivos. Eles entram em `lesson_drafts` com status `pending` e só vão ao ar após aprovação via `approve_lesson_draft()`.
