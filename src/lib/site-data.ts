export const INSTAGRAM_HANDLE = "@gl.equipe";
export const INSTAGRAM_URL = "https://www.instagram.com/gl.equipe";

export const NAV_LINKS = [
  { href: "inicio", label: "Início" },
  { href: "jogos", label: "Jogos" },
  { href: "vantagens", label: "Vantagens" },
  { href: "como-funciona", label: "Como Funciona" },
  { href: "faq", label: "FAQ" },
] as const;

export const MICRO_BENEFITS = [
  { icon: "trending-up", label: "Ganhe com seu conteúdo" },
  { icon: "headphones", label: "Suporte especializado" },
  { icon: "rocket", label: "Novos lançamentos todos os meses" },
] as const;

export const GAMES = [
  {
    id: "candwin",
    name: "CANDWIN",
    category: "Jogo de Corrida",
    desc: "Corridas rápidas e coloridas, fáceis de aprender e viciantes de jogar.",
    icon: "flag",
    variant: "candwin",
  },
  {
    id: "blockwin",
    name: "BLOCKWIN",
    category: "Quebra-Cabeça",
    desc: "Encaixe, planeje e faça pontos em desafios que prendem o público.",
    icon: "puzzle",
    variant: "blockwin",
  },
  {
    id: "bubbleswin",
    name: "BUBBLESWIN",
    category: "Atire e Estoure",
    desc: "Mira precisa e combos de bolhas num clássico que todo mundo curte.",
    icon: "target",
    variant: "bubbleswin",
  },
  {
    id: "ballonswin",
    name: "BALLONSWIN",
    category: "Estoure os Balões",
    desc: "Estoure os balões certos e multiplique seus ganhos num jogo cheio de tensão.",
    icon: "circle",
    variant: "ballonswin",
  },
] as const;

export const STATS = [
  { icon: "users", value: "+7 DÍGITOS", label: "movimentados com jogos de habilidade" },
  { icon: "gamepad", value: "4 JOGOS", label: "ativos na plataforma" },
  { icon: "rocket", value: "NOVOS JOGOS", label: "todos os meses" },
  { icon: "shield", value: "PARCERIA DE CONFIANÇA", label: "com suporte total" },
] as const;

export const VANTAGENS = [
  {
    icon: "percent",
    title: "Cooperação por porcentagem",
    desc: "Ganhe de acordo com o seu desempenho.",
  },
  {
    icon: "users",
    title: "10% por indicação",
    desc: "Receba um adicional de 10% de todos os depósitos dos parceiros que você indicar.",
  },
  {
    icon: "gift",
    title: "Bonificações e premiações",
    desc: "Realizamos campanhas e premiações constantemente para nossos parceiros.",
  },
  {
    icon: "calendar",
    title: "Novos lançamentos",
    desc: "Jogos inéditos todos os meses para você divulgar.",
  },
  {
    icon: "megaphone",
    title: "Materiais prontos",
    desc: "Artes, vídeos e conteúdos para facilitar suas postagens.",
  },
  {
    icon: "headphones",
    title: "Suporte dedicado",
    desc: "Equipe pronta para te ajudar sempre que precisar.",
  },
] as const;

export const STEPS = [
  { number: "01", title: "Chame a gente no Instagram", desc: "Siga o perfil e envie uma mensagem para a nossa equipe." },
  { number: "02", title: "Receba seu link e materiais", desc: "Artes, vídeos e link exclusivo de divulgação." },
  { number: "03", title: "Divulgue seu conteúdo", desc: "Compartilhe com seu público do seu jeito." },
  { number: "04", title: "Receba sua porcentagem", desc: "Ganhos conforme o seu desempenho." },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Preciso pagar algo para ser parceiro?",
    answer:
      "Não. A parceria com a Equipe GL é 100% gratuita. Você só precisa entrar em contato pelo Instagram e começar a divulgar.",
  },
  {
    question: "Como recebo meus ganhos?",
    answer:
      "Seus ganhos são calculados de acordo com o seu desempenho e repassados periodicamente pela nossa equipe, com total transparência.",
  },
  {
    question: "Preciso ter muitos seguidores?",
    answer:
      "Não. Recebemos criadores de todos os tamanhos, de quem está começando a quem já tem uma audiência consolidada.",
  },
  {
    question: "Quantos jogos posso divulgar?",
    answer:
      "Você pode divulgar todos os jogos ativos da plataforma — atualmente CandWin, BlockWin e BubblesWin — além dos novos lançamentos mensais.",
  },
  {
    question: "Como funciona o bônus de indicação?",
    answer:
      "A cada novo parceiro que você indicar, você recebe um adicional de 10% sobre todos os depósitos feitos por essa pessoa.",
  },
] as const;

export const PHONE_CHECKLIST = [
  "Novos jogos todo mês",
  "Parceria por porcentagem",
  "10% por indicação",
  "Bonificações e premiações",
  "Suporte especializado",
  "Crescimento junto com a equipe",
] as const;

export const MARQUEE_ITEMS = [
  "COOPERAÇÃO POR PORCENTAGEM",
  "10% POR INDICAÇÃO",
  "BONIFICAÇÕES E PREMIAÇÕES",
  "MATERIAIS PRONTOS",
  "SUPORTE DEDICADO",
  "NOVOS LANÇAMENTOS TODO MÊS",
] as const;
