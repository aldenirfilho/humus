export type Ambito = "Geral" | "Educação" | "Trabalho" | "Saúde" | "Cuidado";

export type Law = {
  id: string;
  diploma: string;
  nome: string;
  ambito: Ambito;
  garante: string;
  limite: string;
};

export const laws: Law[] = [
  {
    id: "cf",
    diploma: "Constituição de 1988",
    nome: "Dignidade, igualdade e prioridade",
    ambito: "Geral",
    garante:
      "A dignidade da pessoa humana é fundamento da República (art. 1º, III). Igualdade e não discriminação estão no art. 5º. Educação é direito de todos (art. 205). Criança e adolescente com deficiência têm prioridade, com atendimento educacional especializado (art. 227, §1º, II).",
    limite:
      "A Constituição não cria um estatuto próprio do TDAH. Ela impede que qualquer neurodivergência seja tratada como menos humanidade.",
  },
  {
    id: "onu",
    diploma: "Dec. Leg. 186/2008 e Decreto 6.949/2009",
    nome: "Convenção da ONU sobre os direitos da pessoa com deficiência",
    ambito: "Geral",
    garante:
      "No Brasil, a Convenção entrou com status de emenda constitucional. Troca o modelo médico-caritativo pelo modelo de direitos humanos: deficiência nasce também das barreiras, não só do corpo ou do cérebro. Adaptação razoável é obrigação, não favor.",
    limite:
      "Vale quando a pessoa está no conceito de deficiência. Não é um atalho para dispensar avaliação.",
  },
  {
    id: "lbi",
    diploma: "Lei 13.146/2015",
    nome: "Lei Brasileira de Inclusão",
    ambito: "Geral",
    garante:
      "Define deficiência de forma biopsicossocial: impedimento de longo prazo que, com barreiras, limita a participação plena (art. 2º). Proíbe discriminação (art. 4º). No trabalho, exige condições justas e adaptações razoáveis (art. 34). O art. 88 trata a discriminação em razão da deficiência como crime, com reclusão e multa.",
    limite:
      "Ter um laudo de TDAH não aciona a LBI sozinho. TDAH grave, persistente e com prejuízo funcional pode ser avaliado como deficiência, caso a caso. Não é a regra automática.",
  },
  {
    id: "cotas",
    diploma: "Lei 8.213/1991, art. 93",
    nome: "Cota de emprego",
    ambito: "Trabalho",
    garante:
      "Empresas com 100 ou mais empregados devem preencher de 2% a 5% dos postos com pessoas com deficiência habilitadas ou reabilitadas. A LBI soma a isso acessibilidade e adaptação, para a cota não ser só número.",
    limite:
      "TDAH não entra na cota pelo nome do diagnóstico. TEA entra, porque a lei o equipara à deficiência. TDAH só entra se houver enquadramento individual como deficiência.",
  },
  {
    id: "7853",
    diploma: "Lei 7.853/1989",
    nome: "Apoio às pessoas com deficiência",
    ambito: "Geral",
    garante:
      "Marco anterior da política de integração: educação especial, saúde, trabalho, criminalização de preconceito e tutela coletiva pelo Ministério Público.",
    limite:
      "Foi em grande parte relida pela LBI e pela Convenção. Continua útil, mas não é o mapa completo.",
  },
  {
    id: "tea",
    diploma: "Lei 12.764/2012",
    nome: "Lei Berenice Piana",
    ambito: "Geral",
    garante:
      "A pessoa com transtorno do espectro autista é considerada pessoa com deficiência para todos os efeitos legais (art. 1º, §2º). Direito a diagnóstico, atendimento multiprofissional, educação e inclusão.",
    limite:
      "Não existe lei equivalente que declare todo TDAH como deficiência. Comparar os dois sem esse aviso gera expectativa falsa e laudo usado como selo.",
  },
  {
    id: "15256",
    diploma: "Lei 15.256/2025",
    nome: "Diagnóstico de autismo em adultos e idosos",
    ambito: "Saúde",
    garante:
      "Inclui, nas diretrizes da política do TEA, o incentivo à investigação diagnóstica em adultos e idosos. Muita gente chegou à vida adulta confundida com ansiedade, depressão ou outro rótulo.",
    limite:
      "É diretriz de política pública, não uma fila mágica no SUS no dia seguinte. O direito existe; a rede ainda é desigual.",
  },
  {
    id: "sistea",
    diploma: "Lei 14.992/2024 e Decreto 12.115/2024",
    nome: "SisTEA ligado ao SINE",
    ambito: "Trabalho",
    garante:
      "O cadastro nacional da pessoa com TEA passa a conversar com o Sistema Nacional de Emprego, para intermediação de vagas e aprendizagem.",
    limite:
      "Cadastro não substitui adaptação no posto. Incluir no sistema e manter a pessoa num turno hostil é inclusão de papel.",
  },
  {
    id: "14254",
    diploma: "Lei 14.254/2021",
    nome: "Acompanhamento integral na escola",
    ambito: "Educação",
    garante:
      "O poder público deve manter programa de acompanhamento para educandos com dislexia, TDAH ou outro transtorno de aprendizagem: identificação, encaminhamento para diagnóstico, apoio educacional e apoio terapêutico na rede de saúde. Escolas públicas e privadas da educação básica, com a família. Professores têm direito a informação e formação continuada.",
    limite:
      "É lei de escola, não de cota, BPC ou isenção. Não transforma TDAH em deficiência automática. Adaptações escolares (tempo, fracionar tarefa, menos distração) dependem da necessidade documentada.",
  },
  {
    id: "cuidador",
    diploma: "Lei 13.370/2016",
    nome: "Jornada de quem cuida no serviço público",
    ambito: "Cuidado",
    garante:
      "Abre horário especial a servidor público federal responsável por pessoa com deficiência, para acompanhar cuidado e terapias, nos termos da lei e da comprovação.",
    limite:
      "Não obriga a empresa privada a reduzir jornada. No setor privado, o caminho é negociar ou discutir adaptação razoável quando há enquadramento de deficiência — não existe o mesmo artigo automático.",
  },
  {
    id: "loas",
    diploma: "Lei 8.742/1993",
    nome: "BPC / LOAS",
    ambito: "Cuidado",
    garante:
      "Benefício assistencial de um salário mínimo a pessoa com deficiência e a idoso que comprovem baixa renda e impedimentos de longo prazo, após avaliação.",
    limite:
      "TDAH, dislexia ou qualquer laudo não dão BPC por diagnóstico. Exige impedimento, barreiras e critério de renda. Prometer benefício por post em rede é desinformação.",
  },
  {
    id: "10216",
    diploma: "Lei 10.216/2001",
    nome: "Direitos em saúde mental",
    ambito: "Saúde",
    garante:
      "Protege a pessoa em sofrimento mental contra tratamento degradante, internação como castigo e perda de cidadania. O cuidado deve ser o menos invasivo possível.",
    limite:
      "TDAH não é, por definição, o objeto histórico dessa lei. Ela serve como trava ética: neurodivergência não autoriza humilhação, exorcismo forçado nem internação punitiva.",
  },
  {
    id: "acess",
    diploma: "Lei 10.098/2000",
    nome: "Acessibilidade",
    ambito: "Geral",
    garante:
      "Acessibilidade em espaços, mobiliário, comunicação e serviços. A LBI amplia isso para barreiras atitudinais, não só rampa e banheiro.",
    limite:
      "Acessibilidade cognitiva — instrução clara, um canal por vez, tempo — ainda é a parte que patrões e igrejas mais fingem que não existe.",
  },
  {
    id: "eca",
    diploma: "Lei 8.069/1990",
    nome: "Estatuto da Criança e do Adolescente",
    ambito: "Educação",
    garante:
      "Proteção integral, prioridade absoluta, direito à educação, à dignidade e a não ser submetido a tratamento vexatório. Vale para a criança neurodivergente na escola, na igreja e em casa.",
    limite:
      "Não lista TDAH. O que protege é a pessoa, não a sigla.",
  },
  {
    id: "clt",
    diploma: "CLT",
    nome: "O que a lei trabalhista não escreveu",
    ambito: "Trabalho",
    garante:
      "Saúde do trabalhador, intervalo, não discriminação e, quando a pessoa é enquadrada como com deficiência, estabilidade relativa da cota e as garantias da LBI. Adaptação razoável pode incluir instrução escrita, pausa curta, menos estímulos e, em alguns casos, horário flexibilizado.",
    limite:
      "Não há artigo da CLT chamado TDAH. Sem enquadramento, muita adaptação ainda é boa-fé e gestão, não cota. Recusar emprego, promoção ou manter a pessoa só por pena, por causa da deficiência reconhecida, pode ser discriminação.",
  },
];

export const ambitos: Array<Ambito | "Tudo"> = [
  "Tudo",
  "Geral",
  "Educação",
  "Trabalho",
  "Saúde",
  "Cuidado",
];
