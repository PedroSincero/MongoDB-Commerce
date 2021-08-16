db.produtos.find({
  $expr: {
    nome: {
      $gt: ["$curtidas", "$vendidos"],
    },
  },
});