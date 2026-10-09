export type Profile = {
  id: string;
  nome: string;
  linha: string;
  leituraErrada: string;
  oQueE: string;
  lei: string;
  cuidado: string;
};

export const profiles: Profile[] = [
  {
    id: "tdah",
    nome: "TDAH",
    linha: "Atenção instável, impulso, corpo que não desliga — e foco fundo quando o assunto importa.",
    leituraErrada:
      "Preguiça, falta de Deus, criança mal criada, adulto irresponsável, gênio preguiçoso. Na igreja, às vezes vira demônio ou prova de que a pessoa não jejua.",
    oQueE:
      "Transtorno do neurodesenvolvimento, com herdabilidade alta em estudos de gêmeos. Não é falta de caráter nem efeito exclusivo de tela. A tela pode piorar o sono e o foco; não cria o quadro. Há desatenção, hiperatividade, impulsividade, desregulação emocional e, com frequência, cronotipo mais tardio.",
    lei: "Lei 14.254/2021 na educação básica. Deficiência só se a avaliação biopsicossocial mostrar prejuízo persistente. Não é PCD automática.",
    cuidado:
      "Uma instrução por vez. Prazo visível. Pausa sem humilhação. Não usar o hiperfoco como hora extra grátis. Medicação, quando indicada, é ferramenta clínica — não falta de fé.",
  },
  {
    id: "tea",
    nome: "Autismo",
    linha: "Outro jeito de perceber, comunicar e organizar o mundo. Não é frieza nem falta de alma.",
    leituraErrada:
      "Indiferença, grosseria, possessão, falta de educação, ou o oposto: anjo sem desejo próprio. Os dois apagam a pessoa.",
    oQueE:
      "Espectro. Comunicação, sensorialidade, rotina e interesses intensos variam muito. Diagnóstico na vida adulta é comum e, desde 2025, a lei manda a política pública deixar de olhar só a infância.",
    lei: "Lei 12.764/2012: deficiência para todos os efeitos legais. Lei 15.256/2025. SisTEA e ponte com o SINE (Lei 14.992/2024).",
    cuidado:
      "Previsibilidade, linguagem concreta, respeito sensorial, nada de surpresa como teste de obediência. Inclusão não é obrigar contato visual.",
  },
  {
    id: "dislexia",
    nome: "Dislexia",
    linha: "A leitura trava. A inteligência não.",
    leituraErrada: "Burro, preguiçoso para ler a Bíblia, rebelde na prova.",
    oQueE:
      "Transtorno específico de aprendizagem da leitura e da escrita, com base neurobiológica. A pessoa pode pensar com clareza e mesmo assim quebrar na decodificação.",
    lei: "Lei 14.254/2021, junto com TDAH e outros transtornos de aprendizagem.",
    cuidado:
      "Prova oral, tempo, fonte legível, texto antecipado. Não confundir fé com velocidade de leitura em voz alta no culto.",
  },
  {
    id: "tourette",
    nome: "Tourette e tiques",
    linha: "O corpo fala sem pedir licença. Isso não é falta de respeito.",
    leituraErrada: "Provocação, espiritismo, falta de domínio próprio no banco da igreja.",
    oQueE:
      "Tiques motores e vocais que oscilam com estresse, sono e atenção. Segurar o dia inteiro cansa. O tic não é uma opinião.",
    lei: "Quando limita a participação de forma persistente, entra na lógica da LBI. Não há estatuto próprio famoso como o do TEA.",
    cuidado:
      "Não mandar parar. Não rir. Não expor. Reduzir plateia e vergonha já é tratamento ambiental.",
  },
  {
    id: "dah",
    nome: "Altas habilidades e dupla excepcionalidade",
    linha: "Pode haver potência alta e apoio alto no mesmo cérebro.",
    leituraErrada:
      "Se é inteligente, não sofre. Se sofre, não é inteligente. A escola e a família escolhem um dos dois e abandonam o outro.",
    oQueE:
      "Altas habilidades não cancelam TDAH, autismo ou dislexia. A dupla excepcionalidade é justamente esse cruzamento: desempenho desigual, tédio, hiperfoco e buraco em coisa básica.",
    lei: "A educação básica deve atender altas habilidades. Não é deficiência por si. Quando há outro diagnóstico com prejuízo, os direitos daquele diagnóstico continuam.",
    cuidado:
      "Não usar o talento como desculpa para negar apoio. Não usar o apoio como desculpa para negar desafio.",
  },
  {
    id: "dispraxia",
    nome: "Dispraxia",
    linha: "O plano motor não chega inteiro no músculo. A pessoa não é desleixada.",
    leituraErrada: "Sem jeito, preguiça para esportes, descuido espiritual com o corpo.",
    oQueE:
      "Dificuldade do planejamento do movimento. Escrever, amarrar, dirigir ou acompanhar coreografia custa mais. A cognição pode estar intacta.",
    lei: "Apoio escolar e, se houver limitação persistente com barreiras, avaliação pela LBI.",
    cuidado: "Tempo, alternativa ao manuscrito, nada de palco obrigatório para provar normalidade.",
  },
];
