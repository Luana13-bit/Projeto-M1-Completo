//Campanha contra o desperdício de alimentos 
const dicas = [
  "Aproveite cascas, talos e sementes nas receitas.",
  "Organize os alimentos por data de validade.",
  "Planeje o cardápio da semana antes de ir às compras.",
  "Congele porções extras para consumir depois."
];

const receitas = [
  { id: 1, nome: "Bolinho de arroz", ingredientes: ["arroz", "ovo", "farinha", "temperos"] },
  { id: 2, nome: "Sopa de legumes", ingredientes: ["legumes variados", "sal", "água"] },
  { id: 3, nome: "Pão velho na frigideira", ingredientes: ["pão amanhecido", "ovo", "queijo"] }
];

const estatisticas = {
  brasil: "27 milhões de toneladas de comida são desperdiçadas por ano no Brasil.",
  global: "1/3 de toda a comida produzida no mundo é desperdiçada.",
  impacto: "Desperdício causa prejuízo ambiental, econômico e social."
};

module.exports = { dicas, receitas, estatisticas };
