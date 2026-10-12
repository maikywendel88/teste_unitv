export const CHECKOUT = {
  conta: "https://recargaflash.pro/cliente",
  mensal: "https://recargaflash.pro/checkout/plano-mensal",
  trimestral: "https://recargaflash.pro/checkout/plano-trimestral",
  anual: "https://recargaflash.pro/checkout/plano-anual",
} as const;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Vantagens", href: "#vantagens" },
  { label: "Planos", href: "#planos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#faq" },
];

export type Plan = {
  id: string;
  name: string;
  price: string;
  period: string;
  summary: string;
  items: string[];
  href: string;
  badge?: string;
  notice?: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    id: "mensal",
    name: "Mensal",
    price: "R$ 24,99",
    period: "por mês",
    summary: "Para começar sem compromisso e renovar só quando quiser.",
    items: [
      "Acesso completo ao catálogo",
      "Um código de 30 dias",
      "Assista na TV, no celular ou no computador",
      "Suporte todos os dias da semana",
    ],
    href: CHECKOUT.mensal,
    notice: "Sem renovação automática: você decide quando recarregar.",
  },
  {
    id: "trimestral",
    name: "Trimestral",
    price: "R$ 69,99",
    period: "a cada 3 meses",
    summary: "O plano preferido de quem quer economizar sem perder qualidade.",
    items: [
      "Tudo do plano Mensal",
      "Três códigos mensais de 30 dias",
      "Ativação acompanhada pelo suporte",
      "Prioridade no atendimento",
    ],
    href: CHECKOUT.trimestral,
    badge: "MAIS VENDIDO",
    notice: "Aviso: você recebe três códigos mensais — um para cada mês do trimestre.",
    featured: true,
  },
  {
    id: "anual",
    name: "Anual",
    price: "R$ 169,99",
    period: "por ano",
    summary: "O melhor preço por mês para quem já sabe que vai ficar.",
    items: [
      "Tudo do plano Trimestral",
      "Doze códigos mensais de 30 dias",
      "Economia de mais de 40% no ano",
      "Suporte prioritário o ano inteiro",
    ],
    href: CHECKOUT.anual,
    notice: "Pagamento único, com os códigos liberados mês a mês.",
  },
];

export const features = [
  {
    icon: "⚡",
    title: "Ativação em minutos",
    description:
      "Você recebe o código logo depois do pagamento e assiste no mesmo dia, sem espera e sem instalação complicada.",
  },
  {
    icon: "🎬",
    title: "Catálogo completo",
    description:
      "Filmes, séries, desenhos, canais ao vivo e esportes em um só lugar, com novidades todos os dias.",
  },
  {
    icon: "📺",
    title: "Assista onde quiser",
    description:
      "Compatível com Smart TV, TV Box, celular, tablet e computador — sem antena e sem cabo.",
  },
  {
    icon: "🔄",
    title: "Sem fidelidade",
    description:
      "Nada de contrato amarrado ou multa de cancelamento. Você renova quando fizer sentido para você.",
  },
  {
    icon: "🛡️",
    title: "Pagamento seguro",
    description:
      "Checkout com Pix ou cartão em ambiente protegido, com confirmação do pedido por e-mail.",
  },
  {
    icon: "💬",
    title: "Suporte humano",
    description:
      "Gente de verdade para ajudar na ativação e responder dúvidas antes e depois da compra.",
  },
];

export const devices = [
  "Smart TV Samsung, LG, TCL e Philips",
  "TV Box, Fire TV Stick e Chromecast",
  "Celular e tablet Android ou iPhone",
  "Computador e notebook",
  "Conexão de internet a partir de 10 Mbps",
];

export const steps = [
  {
    title: "Escolha seu plano",
    description: "Mensal, trimestral ou anual — todos com acesso completo ao catálogo.",
  },
  {
    title: "Faça o pagamento",
    description: "Pix ou cartão em ambiente seguro, com confirmação automática.",
  },
  {
    title: "Receba seu código",
    description: "O código de ativação chega no seu e-mail em poucos minutos.",
  },
  {
    title: "Ligue a TV e assista",
    description: "Ative o código no aparelho e comece a assistir na hora.",
  },
];

export const faq = [
  {
    question: "Como recebo meu código depois da compra?",
    answer:
      "Assim que o pagamento é confirmado, o código de ativação é enviado para o e-mail informado no checkout — normalmente em poucos minutos. Se não encontrar, confira a caixa de spam ou fale com o suporte.",
  },
  {
    question: "Em quantos aparelhos posso usar?",
    answer:
      "Você pode instalar nos aparelhos que quiser, mas cada código permite uma reprodução por vez. Para assistir em dois aparelhos ao mesmo tempo, basta adquirir um código adicional.",
  },
  {
    question: "Qual a diferença entre os planos?",
    answer:
      "O acesso ao catálogo é o mesmo. O Mensal tem um código de 30 dias; o Trimestral tem três códigos mensais com preço menor por mês; o Anual tem doze códigos e o melhor preço proporcional.",
  },
  {
    question: "Preciso de internet rápida?",
    answer:
      "Uma conexão estável de 10 Mbps já é suficiente para assistir com boa qualidade. Para imagens em 4K, recomendamos 25 Mbps ou mais.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim. Não existe fidelidade e não há renovação automática: os códigos são pré-pagos e, quando o período termina, você escolhe se quer continuar.",
  },
  {
    question: "E se eu tiver dificuldade para ativar?",
    answer:
      "Nosso suporte acompanha a ativação passo a passo, todos os dias da semana, inclusive nos fins de semana.",
  },
  {
    question: "O código serve para qualquer aparelho?",
    answer:
      "Os códigos funcionam nos aparelhos compatíveis listados nesta página e são ativados em poucos passos, sem precisar de técnico.",
  },
];
