# HUMUS

Revista brasileira de vínculo, inclusão e neurodiversidade.

Enfrenta o preconceito religioso sem transformar hipótese em genética e sem inventar direito que a lei não dá.

## Três camadas

- **Direito** — Constituição, Convenção da ONU, LBI, cotas, Lei Berenice Piana, Leis 14.254/2021, 14.992/2024, 15.256/2025, 13.370/2016, BPC. TDAH não é deficiência automática. TEA é.
- **Ciência** — herdabilidade alta, cronotipo vespertino, DRD4-7R como hipótese (variante relativamente jovem, não “gene primitivo”). Revisão de 2016: contas evolutivas ainda não testadas de modo adequado sobre os sintomas nucleares.
- **Leitura** — o silêncio da Bíblia não é um gene omitido. É uma norma de dois mil anos que chamou de preguiça, demônio ou falta de fé o que não cabia no banco e no relógio.

## O que esta casa não afirma

Não afirma que TDAH grave seja mais próximo de Deus, que haja uma casta de primeiros filhos, nem que a natureza guardou esses genes para o dia do desastre. Isso fica explícito nos textos.

## Fonte

Conteúdo em `src/content`. Não é consulta médica, jurídica ou religiosa.
Em crise: CVV 188 · SAMU 192.

## FOCO CLARO + NeuroVínculos Brasil

Integração adicionada em uma pasta própria. A revista mantém seus componentes e conteúdos. O módulo estático entra pelo cartão da página inicial e pelo rodapé.

- `public/neurovinculos/index.html`: portal de ciência, direitos e inclusão.
- `public/neurovinculos/foco-claro/PAINEL.html`: avaliador, pedidos para agente e cursos.
- `tools/neurovinculos`: fontes, motores Python/JavaScript, agente, habilidade portátil, testes e lista permitida do pacote público.

Para manter o módulo: executar `npm run check` e `npm run build` dentro de `tools/neurovinculos`, depois copiar o conteúdo de `dist` para `public/neurovinculos`. Sem dependências de instalação. Documentos pessoais e backups não fazem parte deste módulo.

O selo é editorial experimental. Até70 sem selo; >70 até80 bronze; >80 até90 prata; >90 ouro. Falta de evidência ou critérios apenas inferidos mantém pendência. Probabilidades de sucesso profissional não são estimadas.

A exportação original do HUMUS não contém package.json, lockfile nem todos os componentes importados pelo framework. O módulo estático foi validado separadamente; a construção completa da revista e o deploy precisam do ambiente de origem. Esta integração no GitHub não confirma publicação.
