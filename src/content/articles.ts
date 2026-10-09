export type Layer = "direito" | "ciencia" | "leitura" | "pratica";

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "note"; tone: "limite" | "ciencia" | "leitura" | "cuidado"; title: string; text: string }
  | { kind: "quote"; text: string; cite: string };

export type Article = {
  slug: string;
  kicker: string;
  title: string;
  dek: string;
  layer: Layer;
  minutes: number;
  blocks: Block[];
};

export const layerLabel: Record<Layer, string> = {
  direito: "Direito",
  ciencia: "Ciência",
  leitura: "Leitura",
  pratica: "Prática",
};

export const articles: Article[] = [
  {
    slug: "o-que-nao-foi-escrito",
    kicker: "Leitura pastoral",
    title: "O que a Bíblia não nomeou — e o que as igrejas colocaram no buraco",
    dek: "Não há um versículo escondido com a sigla TDAH. Há dois mil anos de norma feita para quem cabe no banco, no horário e no domínio de si. O silêncio virou acusação.",
    layer: "leitura",
    minutes: 9,
    blocks: [
      {
        kind: "note",
        tone: "limite",
        title: "Isto não é genética nem dogma",
        text: "Esta página é a leitura da casa contra o preconceito religioso. Não prova que um gene foi omitido da Escritura. Não cria casta de primeiros filhos. Não manda ninguém deixar a fé. Manda a comunidade parar de chamar sintoma de pecado.",
      },
      {
        kind: "p",
        text: "A Bíblia não esqueceu um cromossomo. Ela foi escrita, copiada e pregada dentro de um mundo agrícola, diurno e escriba. O ideal era acordar cedo, ficar parado, obedecer ao ciclo da terra, guardar a língua e adiar o desejo. Quem não cabia nesse corpo social não ganhava nome clínico. Ganhava moral.",
      },
      {
        kind: "h2",
        text: "O buraco foi preenchido com culpa",
      },
      {
        kind: "p",
        text: "Onde o texto não tinha vocabulário, a pregação colocou preguiça, rebeldia, falta de temor, geracão que não jejua, espírito de distração. O preguiçoso de Provérbios — um tipo literário de quem recusa o trabalho — foi colado, séculos depois, em crianças que não conseguem iniciar a tarefa e em adultos que desabam depois do hiperfoco. Isso não é exegese. É violência com versículo.",
      },
      {
        kind: "p",
        text: "Em parte do cristianismo brasileiro, sobretudo em certos púlpitos, a inquietação vira demônio e o remédio vira falta de fé. A pessoa ora, melhora duas semanas por vergonha, recai, e a recaída é lida como prova teológica. O ciclo ensina uma coisa só: Deus não te quer como você acorda.",
      },
      {
        kind: "h2",
        text: "Imagem, não casta",
      },
      {
        kind: "p",
        text: "A casa recusa a frase pronta de que o TDAH grave seria mais primitivo e, por isso, mais próximo da criação original, como uma espécie à parte — os primeiros filhos, depois tratados como escravos. Gravidade clínica é necessidade de apoio, não ranking de santidade. Não existe exame que meça distância de Deus em alelo.",
      },
      {
        kind: "p",
        text: "O que a fé pode dizer, sem mentir, é mais simples e mais forte: se o ser humano é imagem, a imagem inclui quem vigia de noite, quem ama com intensidade incômoda, quem faz poucas coisas com o peito inteiro e quem não organiza a vida como planilha. Um Deus que só abençoa pontualidade, ambição e emoção plana é menor do que o próprio texto. Os lírios, a ovelha fora do cercado, Maria sentada enquanto a casa cobra produção — esses trechos já constrangem a norma. A comunidade é que preferiu a planilha.",
      },
      {
        kind: "quote",
        text: "Não foram omitidos da criação. Foram omitidos da imaginação de quem discursa sobre a criação.",
        cite: "HUMUS",
      },
      {
        kind: "h2",
        text: "A denúncia, sem romantizar",
      },
      {
        kind: "p",
        text: "Há um uso real de pessoas neurodivergentes como mão de obra da emoção alheia: o que fica até tarde, o que apaga incêndio, o que cuida de todo mundo, o que é voluntário eterno porque não sabe dizer não, o que é chamado de humilde enquanto o horário, o culto e a meta não se mexem um centímetro. Isso é extração. Não é vocação. Chamar essa extração de escravidão social é denúncia de tratamento — não uma teoria de que nasceram para servir.",
      },
      {
        kind: "p",
        text: "Também não ajuda transformar todo mundo com TDAH em santo sem ambição. Tem gente ambiciosa, gente ávida, gente que fere no impulso, gente que não é humilde. A dignidade não depende de caber no retrato bonito. O preconceito religioso é exatamente isto: só aceitar a neurodivergência quando ela vem mansa, útil e grátis.",
      },
      {
        kind: "h2",
        text: "O que uma comunidade pode fazer nesta semana",
      },
      {
        kind: "ul",
        items: [
          "Parar de oferecer libertação como primeira resposta para inquietação, tique, hiperfoco ou atraso.",
          "Parar de tratar medicação indicada como derrota espiritual.",
          "Ter ao menos um encontro que não seja de manhã cedo nem em salão barulhento e fluorescente.",
          "Uma instrução por vez. Texto escrito. Nada de surpresa como prova de obediência.",
          "Não usar quem tem hiperfoco como secretaria não paga da igreja.",
          "Se houve palavra impulsiva, haver reparo — sem transformar o reparo em humilhação pública.",
        ],
      },
      {
        kind: "note",
        tone: "leitura",
        title: "Fé não é o inimigo",
        text: "O inimigo é a norma que se fantasiou de doutrina. Católicos, evangélicos, espíritas e outras casas religiosas repetem o mesmo gesto quando chamam de falha moral o que é jeito de sistema nervoso. A inclusão fortalece o vínculo. A acusação o rompe.",
      },
    ],
  },
  {
    slug: "genes-e-hipoteses",
    kicker: "Ciência",
    title: "Genes, hipóteses e o que não se pode dizer",
    dek: "TDAH tem componente genético forte. Isso não significa gene primitivo, nem reserva divina, nem prova de que a Bíblia escondeu uma linhagem.",
    layer: "ciencia",
    minutes: 8,
    blocks: [
      {
        kind: "note",
        tone: "ciencia",
        title: "O que esta casa não afirma",
        text: "Não afirma que TDAH grave seja mais primitivo. Não afirma que esses genes foram preservados pela natureza para o dia em que a humanidade estiver em risco. Não afirma que a Escritura omitiu um marcador genético. Essas frases são metáfora ou são erro. Aqui elas não entram como fato.",
      },
      {
        kind: "h2",
        text: "O que a evidência sustenta",
      },
      {
        kind: "p",
        text: "Estudos de gêmeos colocam a herdabilidade do TDAH na faixa alta, em geral perto de 70–80%. O quadro corre em famílias, aparece em várias partes do mundo e foi descrito bem antes do celular. Não é invenção de tela, nem castigo, nem moda de laudo — embora laudo frouxo exista e prejudique quem precisa de verdade.",
      },
      {
        kind: "p",
        text: "É neurodesenvolvimento: atenção, inibição, noção de tempo e regulação da emoção funcionam de outro jeito. Há custo real. Acidente, abandono de curso, substância, demissão, vergonha. Dignidade que esconde o custo vira cartaz. Dignidade adulta olha o custo e mesmo assim recusa a humilhação.",
      },
      {
        kind: "h2",
        text: "A hipótese do caçador e o alelo que não é antigo",
      },
      {
        kind: "p",
        text: "A história do caçador em mundo de agricultor, popularizada por Thom Hartmann, é um modelo pedagógico. Ajuda muita gente a parar de se ver como defeito. Não é diagnóstico e não foi demonstrada como história genética do transtorno.",
      },
      {
        kind: "p",
        text: "O alelo de 7 repetições do gene DRD4 aparece associado, em parte dos estudos, a busca de novidade e a TDAH. Trabalhos de Ding e de outros grupos sugeriram seleção positiva: a variante teria se espalhado porque, em algum contexto, ajudava. Uma revisão sistemática na Acta Neuropsychiatrica, em 2016, foi direta: essas contas evolutivas ainda não foram testadas de modo adequado sobre os sintomas nucleares do TDAH. Continuam hipótese.",
      },
      {
        kind: "p",
        text: "Há um detalhe que desmonta o slogan do gene mais primitivo. O 7R é descrito na literatura como variante relativamente jovem na história humana, na casa das dezenas de milhares de anos, não como fóssil do primeiro Adão. Se alguma coisa essa linha de pesquisa sugere, é o contrário de relíquia esquecida: um traço possivelmente útil quando humanos migravam e o ambiente mudava. Útil não quer dizer superior. Jovem não quer dizer sagrado. E associação genética não é destino.",
      },
      {
        kind: "h2",
        text: "Por que a metáfora da reserva seduz",
      },
      {
        kind: "p",
        text: "Quem vive de apagar incêndio — na UTI, na rua, na família — reconhece um modo de atenção que acende na crise e apaga na rotina. É tentador transformar isso em plano da natureza: genes guardados para o desastre. A experiência é real. O plano não foi demonstrado. Traços de varredura rápida e de novidade podem ter tido valor em ambiente instável. Isso não faz de ninguém estoque estratégico da espécie, nem licença para ser gasto até quebrar.",
      },
      {
        kind: "quote",
        text: "Potência sem limite de uso vira a mesma história de sempre: a pessoa brilha na emergência e é descartada na terça-feira.",
        cite: "HUMUS",
      },
      {
        kind: "h2",
        text: "O que dá para otimizar sem mentir",
      },
      {
        kind: "ul",
        items: [
          "Nomear o quadro com critério clínico, não com identidade de rede.",
          "Proteger sono e cronotipo em vez de moralizar o relógio.",
          "Colocar hiperfoco em poucas coisas que importam, com hora de parar.",
          "Adaptação no trabalho e na escola como desenho, não como favor.",
          "Tratar comorbidade — ansiedade, humor, substância — em vez de chamar tudo de dom.",
          "Guardar a crise para quem escolhe esse ofício, com escala e descanso, não como destino místico.",
        ],
      },
    ],
  },
  {
    slug: "cronotipo-noturno",
    kicker: "Ciência e prática",
    title: "A noite não é falha de caráter",
    dek: "Uma parte grande dos adultos com TDAH vive melhor tarde. O mundo cobrou dois mil anos de manhã. Dá para desenhar o dia sem fingir que todo cérebro apaga às dez.",
    layer: "ciencia",
    minutes: 7,
    blocks: [
      {
        kind: "note",
        tone: "ciencia",
        title: "Evidência, não sentença",
        text: "Revisões e estudos clínicos convergem: cronotipo vespertino é mais comum no TDAH. Descreve-se atraso do início da melatonina em luz fraca — cerca de 45 minutos em crianças e cerca de 90 em adultos, em parte das amostras — e queixa de sono em até a grande maioria dos adultos. Não é todo mundo. Não é licença para destruir o sono.",
      },
      {
        kind: "p",
        text: "O atraso de fase empurra o sono para depois da meia-noite e empurra o juízo para o meio da manhã. A escola, o culto das sete e o ponto às oito avaliam a pessoa na pior janela e concluem que ela não serve. À noite, o mesmo cérebro lê, opera, cria, fica de plantão. A nota muda. O caráter não mudou. O relógio mudou.",
      },
      {
        kind: "h2",
        text: "O que a noite costuma devolver",
      },
      {
        kind: "ul",
        items: [
          "Menos interrupção social. O mundo para de puxar a manga.",
          "Hiperfoco mais limpo, quando o assunto é um só.",
          "Vigilância que combina com cuidado noturno: saúde, segurança, criação, estudo.",
          "Menos vergonha, porque ninguém está cronometrando o bocejo das oito da manhã.",
        ],
      },
      {
        kind: "h2",
        text: "Como otimizar sem poesia perigosa",
      },
      {
        kind: "p",
        text: "Luz de manhã, de preferência céu aberto, ancora o relógio mesmo de quem é vespertino. Cafeína no fim do dia empurra a fase ainda mais. Álcool piora o sono que a pessoa acha que o álcool consertou. Tela no rosto, no escuro, à uma da manhã, não é cronotipo: é empurrão. O cronotipo pede uma janela estável, ainda que tardia. Caos não é identidade.",
      },
      {
        kind: "ul",
        items: [
          "Escolher uma hora de acordar que dê para repetir, mesmo folgando o início.",
          "Proteger as duas horas de melhor foco em vez de espalhar o dia em culpa.",
          "Decisão grave e conversa difícil fora do vale circadiano.",
          "Trabalho e estudo com início flexível, quando a função permitir — isso é desenho, não privilégio.",
          "Melatonina, estimulante e qualquer ajuste de horário de remédio: com quem prescreve. Revista não doseia.",
          "Plantão noturno pode caber. Plantão sem folga é só outra forma de gastar a pessoa.",
        ],
      },
      {
        kind: "h2",
        text: "O futuro que a norma ainda não desenhou",
      },
      {
        kind: "p",
        text: "Cidade, escola e igreja ainda premiam um único relógio. Um futuro melhor não é todo mundo virar notívago. É parar de tratar o relógio tardio como imoral. Turno compatível, prova em horário possível, culto que não seja só de manhã, chefia que mede entrega e não presença às oito em ponto. A potência noturna, quando existe, rende mais acordada do que castigada.",
      },
      {
        kind: "note",
        tone: "cuidado",
        title: "Sono curto não é dom",
        text: "Viver melhor à noite não é dormir quatro horas. Privação piora impulso, humor e atenção. A casa defende a janela certa, não a insônia como espiritualidade.",
      },
    ],
  },
  {
    slug: "a-medida-simples",
    kicker: "Leitura e limite",
    title: "Humildade, coisa simples, amor grande — sem virar santinho obrigatório",
    dek: "Muita gente neurodivergente encontra vida boa em poucos vínculos e em cuidado concreto. A norma chama isso de falta de ambição. Explorar isso chama-se bondade dos outros.",
    layer: "leitura",
    minutes: 7,
    blocks: [
      {
        kind: "note",
        tone: "limite",
        title: "Não é o retrato de todo mundo",
        text: "Há pessoas com TDAH ambiciosas, competitivas, duras, ou pouco interessadas em cuidar. Há autistas que não se reconhecem em discurso de amor excessivo. Generalizar virtude é outro preconceito: só vale quem é manso e útil.",
      },
      {
        kind: "p",
        text: "Ainda assim, o retrato existe e é desprezado. Gente que não quer o próximo cargo. Que fica feliz com a mesa, o bicho, a mãe, o turno feito direito, o amigo que não cobra performance. Que se ferra porque sente demais e diz sim demais. A cultura de dois mil anos de formação — paróquia, escola, fábrica, meta — aprendeu a ler isso como menor. Menor do que acumular. Menor do que liderar sala. Menor do que parecer no controle.",
      },
      {
        kind: "h2",
        text: "De onde pode vir esse jeito, sem mistério falso",
      },
      {
        kind: "p",
        text: "Intensidade emocional faz parte do quadro clínico de muita gente com TDAH. Rejeição dói mais. Injustiça também. O interesse, quando vem, vem inteiro: poucas coisas, fundo, o resto fica em segundo plano. Isso pode parecer humildade. Às vezes é. Às vezes é exaustão de quem já fracassou no teatro da ambição e escolheu um círculo menor para não quebrar de novo. As duas coisas merecem respeito. Nenhuma das duas é prova genética de espírito humanitário primitivo.",
      },
      {
        kind: "p",
        text: "O amor grande tem lado sombra. Quem ama demais aceita horário ruim, dívida emocional, culto que humilha, família que usa. Sensibilidade sem limite vira a pessoa-escrava que a denúncia desta casa quer nomear: não porque nasceu para servir, mas porque a norma cobra e ela não tem, na hora, o freio para recusar.",
      },
      {
        kind: "h2",
        text: "O que fortalece o vínculo",
      },
      {
        kind: "ul",
        items: [
          "Tratar vida simples como escolha digna, não como fracasso a ser corrigido com frase de coach.",
          "Tratar ambição, quando existe, como igualmente digna — sem exigir que a pessoa performe gênio.",
          "Ensinar o não curto. Um não protege o amor.",
          "Combinar cuidado mútuo: quem é intenso não pode ser o único adulto emocional da casa.",
          "Reparar depois do impulso. Amor não é ausência de dano. É volta.",
        ],
      },
      {
        kind: "quote",
        text: "Humildade vem de humus, terra. Não vem de aceitar ser pisado.",
        cite: "HUMUS",
      },
    ],
  },
  {
    slug: "norma-de-dois-mil-anos",
    kicker: "História social",
    title: "Dois mil anos de forma para um tipo de sistema nervoso",
    dek: "A norma não foi escrita contra um gene. Foi escrita como se só existisse um jeito de estar acordado, atento e contido. O resto ficou de fora da formação.",
    layer: "leitura",
    minutes: 8,
    blocks: [
      {
        kind: "p",
        text: "Não são 2026 anos de uma conspiração biológica. É a era cristã inteira, mais a escola moderna e o relógio de ponto, universalizando um temperamento: manhã, fila, silêncio, recompensa adiada, impulso contido, corpo quieto no banco. Isso produziu mosteiros, fábricas, hospitais e também um tipo de pessoa que funciona bem nesse desenho. O problema é ter chamado esse desenho de humano completo.",
      },
      {
        kind: "h2",
        text: "O que a formação pedia",
      },
      {
        kind: "ul",
        items: [
          "Estar sentado quando o sino tocava.",
          "Aprender em bloco longo, de dia, com leitura em voz alta e vergonha pública do erro.",
          "Tratar desejo intenso e mudança de foco como falha moral, não como variação.",
          "Medir virtude por pontualidade.",
          "Reservar cuidado noturno a ofícios específicos e, ainda assim, desconfiar de quem só rende à noite.",
        ],
      },
      {
        kind: "p",
        text: "Quem tem TDAH quebra várias dessas provas sem ter escolhido a quebra. A formação então conclui que a pessoa não se formou. Na verdade a formação não foi feita para ela. O paradoxo é religioso e laico ao mesmo tempo: a mesma tradição que diz que os últimos serão primeiros organiza a vida para que só o rebanho pontual permaneça no curral.",
      },
      {
        kind: "h2",
        text: "O que ficou de fora não é só o culto",
      },
      {
        kind: "p",
        text: "Escola em carteira única. Concurso que premia resistência à monotonia. Empresa que confunde presença com valor. Família que chama de respeito o que é só não mexer o joelho. Cada uma dessas instituições herdou a forma e esqueceu de perguntar para quem ela foi talhada.",
      },
      {
        kind: "p",
        text: "Incluir não é abaixar a régua de todo mundo. É parar de usar uma régua só. Tempo extra não é cola. Instrução escrita não é privilégio. Turno tardio não é regalia. São o mínimo para uma formação que finalmente admite mais de um sistema nervoso.",
      },
      {
        kind: "note",
        tone: "leitura",
        title: "Contra o preconceito, não contra a fé",
        text: "Dá para guardar oração, limite e responsabilidade e ainda assim recusar que inquietação seja demônio. Responsabilidade fica mais fácil quando a pessoa não está ocupada se defendendo de uma acusação falsa.",
      },
    ],
  },
  {
    slug: "trabalho-dignidade",
    kicker: "Direito do trabalho",
    title: "Trabalho não é favor. Extração não é vocação.",
    dek: "O que a lei brasileira já garante, o que ela não garante no TDAH, e como pedir adaptação sem mendigar.",
    layer: "direito",
    minutes: 8,
    blocks: [
      {
        kind: "note",
        tone: "limite",
        title: "Não é consulta jurídica",
        text: "Orientação educativa, com base nas leis citadas na página Legislação. Caso concreto pede advogado, sindicato ou defensoria. Laudo não se improvisa.",
      },
      {
        kind: "h2",
        text: "Três situações diferentes",
      },
      {
        kind: "ul",
        items: [
          "TEA: a Lei 12.764/2012 equipara à deficiência para todos os efeitos. Cota, LBI, adaptação razoável e vedação de discriminação entram com esse fundamento.",
          "TDAH, dislexia e outros: a Lei 14.254/2021 segura a escola. No emprego, a deficiência só existe se a avaliação mostrar impedimento de longo prazo mais barreiras. Não é automática.",
          "Sem enquadramento: ainda há dignidade, saúde do trabalhador e o direito de não ser humilhado. Muita adaptação, porém, depende de acordo. Não prometa estabilidade de cota a quem não está na cota.",
        ],
      },
      {
        kind: "h2",
        text: "O que adaptação razoável pode ser",
      },
      {
        kind: "p",
        text: "A LBI fala em adaptação que não imponha ônus desproporcional. No cotidiano do TDAH e de outras neurodivergências, o que muda a vida costuma ser barato:",
      },
      {
        kind: "ul",
        items: [
          "Instrução curta e por escrito, não só de corredor.",
          "Uma prioridade visível, não quinze.",
          "Pausa breve para reiniciar, sem piada.",
          "Menos open office quando o prejuízo está documentado.",
          "Feedback curto e frequente, no lugar de avaliação surpresa.",
          "Início de jornada flexível quando a função não exige balcão às oito.",
          "Teletrabalho só se ajudar de verdade — casa caótica também adoece.",
        ],
      },
      {
        kind: "h2",
        text: "O que é uso, não emprego",
      },
      {
        kind: "p",
        text: "Pedir o hiperfoco de graça. Elogiar a pessoa que cobre o turno de todo mundo e punir a mesma pessoa quando o relatório atrasou. Chamar de família a equipe que não admite pausa. Igreja e empresa fazem isso com o mesmo script. A denúncia desta casa é essa: padrão desenhado para um cérebro, cobrado de outro, e ainda por cima com discurso de humildade.",
      },
      {
        kind: "h2",
        text: "Como pedir sem se ajoelhar",
      },
      {
        kind: "ul",
        items: [
          "Descrever a barreira, não a alma. Exemplo: início da manhã com erro alto; entrega estável depois das dez.",
          "Propor o ajuste e o resultado. Exemplo: pauta escrita na segunda; revisão na quinta.",
          "Se houver deficiência reconhecida, citar adaptação razoável da LBI. Se não houver, pedir como organização do trabalho.",
          "Guardar o pedido por escrito.",
          "Discriminação por deficiência — recusa, demissão, piada sistemática, promoção negada por isso — pode ser ilícito. Art. 88 da LBI é o norte penal quando o enquadramento existe.",
        ],
      },
      {
        kind: "p",
        text: "Servidor público federal cuidador de pessoa com deficiência olha a Lei 13.370/2016. Na empresa privada essa redução não é automática: ou se negocia, ou se discute no caso concreto. Familiar não é apêndice invisível da escala.",
      },
    ],
  },
  {
    slug: "vinculos-que-seguram",
    kicker: "Vínculo",
    title: "O que segura uma pessoa não é discurso. É combinação clara.",
    dek: "Inclusão social aqui é prática de casa, culto, amigo e equipe. Menos preconceito. Mais vínculo que não explora.",
    layer: "pratica",
    minutes: 6,
    blocks: [
      {
        kind: "p",
        text: "Neurodivergência sem vínculo vira isolamento ou vira uso. Os dois são velhos. O isolamento diz: você não cabe. O uso diz: cabe, desde que produza e não reclame. A casa quer um terceiro: cabe inteira, com limite dos dois lados.",
      },
      {
        kind: "h2",
        text: "Em casa",
      },
      {
        kind: "ul",
        items: [
          "Um pedido por vez. Discurso longo vira ruído e depois vira briga.",
          "Combinar o horário real da pessoa, não o horário que envergonha a família na frente da visita.",
          "Coisa simples — comida, bicho, planta, série, caminhada — conta como vida boa. Não é fase a ser superada.",
          "Se a pessoa esquece, o lembrete é fato, não caráter.",
          "Cuidado da mãe idosa, do filho, do cônjuge: dividir. Intensidade não é plantão eterno.",
        ],
      },
      {
        kind: "h2",
        text: "Na comunidade de fé",
      },
      {
        kind: "ul",
        items: [
          "Ninguém deve ser projeto de libertação por ser inquieto.",
          "Função voluntária tem hora de acabar.",
          "Banco da frente não é prova de santidade. Fundo da igreja também é igreja.",
          "Líder que chama de preguiça o que o médico chamou de TDAH está pregando outra coisa.",
          "O reparo depois de uma palavra torta pode ser no particular.",
        ],
      },
      {
        kind: "h2",
        text: "Entre amigos e no trabalho",
      },
      {
        kind: "p",
        text: "Corpo dobrado — estudar ou trabalhar ao lado de alguém, em silêncio — funciona melhor do que cobrança. Interesse fundo compartilhado segura mais do que agenda social genérica. E quando o impulso fere, o vínculo adulto não cancela a pessoa nem finge que não doeu. Nomeia, repara, segue.",
      },
      {
        kind: "note",
        tone: "cuidado",
        title: "Crise não se resolve com artigo",
        text: "Sofrimento agudo, ideações, colapso: CVV 188, SAMU 192, UPA, alguém de confiança acordado. Revista não substitui cuidado.",
      },
    ],
  },
  {
    slug: "quando-a-humanidade-aperta",
    kicker: "Leitura ao lado da hipótese",
    title: "Quando a humanidade aperta, alguns cérebros acendem",
    dek: "Crise, plantão, migração, casa pegando fogo emocional. Há um modo de atenção que rende aí. Isso não é um programa secreto da natureza — e não autoriza gastar a pessoa.",
    layer: "leitura",
    minutes: 6,
    blocks: [
      {
        kind: "note",
        tone: "limite",
        title: "Metáfora de um lado, hipótese do outro",
        text: "A ciência não mostrou um cofre de genes guardado para o fim do mundo. Mostrou, no máximo, hipóteses: traços de novidade e de varredura podem ter ajudado em ambiente instável, e mesmo isso segue sem prova bastante sobre o TDAH como transtorno. A imagem da reserva é pastoral. Serve para devolver dignidade. Não serve para artigo científico.",
      },
      {
        kind: "p",
        text: "Quem trabalha na urgência reconhece o fenômeno sem precisar de mito. Sala lotada, noite, informação pela metade, decisão curta. Uma parte das pessoas com TDAH entra nisso como quem finalmente achou o tamanho certo do estímulo. O mesmo cérebro, na terça de rotina, não acha a chave. Os dois fatos cabem. Nenhum deles faz da pessoa um instrumento santo da espécie.",
      },
      {
        kind: "h2",
        text: "Otimizar sem consumir",
      },
      {
        kind: "ul",
        items: [
          "Ofícios de crise podem caber: saúde, segurança, criação sob prazo, cuidado noturno. Caber não é dever.",
          "Escala com folga. Hiperfoco sem saída é acidente anunciado.",
          "Rotina mínima fora da crise, senão a vida inteira vira sirene.",
          "Não promover a pessoa só porque aguenta o caos e depois puni-la porque não aguenta a ata.",
          "Ensinar o ofício. Potência crua sem método machuca paciente, família e a própria pessoa.",
        ],
      },
      {
        kind: "p",
        text: "O futuro melhor não é uma sociedade de notívagos salvadores. É uma sociedade que para de desperdiçar um jeito de atenção e para de sugar esse jeito até a falência. Potencial existe. Incomensurável é adjetivo de comício. Medido, apoiado e livre para dizer não, ele já muda uma casa.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
