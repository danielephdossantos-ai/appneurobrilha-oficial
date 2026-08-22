# FASE L — ENTREGA FINAL PARA IMPLANTAÇÃO

## Status
Este pacote consolida as edições Premium realizadas até a validação K4:
- planos Premium e árbitro diário;
- Rotina Premium;
- Central de Apoio Escolar;
- limpeza da Área dos Pais;
- melhorias de Anamnese;
- isolamento para duas crianças;
- mascotes/gamificação por `child_id`;
- Push por papel de dispositivo;
- Professor Mentor/persistência;
- normalização de leitura/TTS PT-BR;
- validação de ensino antes de atividade em aulas IA.

## O que esta entrega NÃO afirma
- Não afirma que o build de produção foi executado neste ambiente.
- Não afirma Push testado fisicamente em todos os celulares.
- Não afirma qualidade acústica de todas as vozes instaladas em cada sistema operacional.

## Pendências obrigatórias de implantação
1. Instalar dependências.
2. Regenerar route tree e confirmar `/apoio-escolar`.
3. Aplicar migrations.
4. Configurar secrets.
5. Configurar cron de Push.
6. Rodar testes/lint/build.
7. Executar teste de aceite com 2 crianças e 3 dispositivos.
8. Ouvir bateria TTS real.
9. Publicar somente após todos os bloqueios críticos passarem.

## Regra de produto
NeuroBrilha deve continuar sendo apresentado como plataforma de apoio educacional. Não diagnostica, não prescreve tratamento e não substitui escola ou acompanhamento profissional.
