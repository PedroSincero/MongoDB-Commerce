db.produtos.updateMany({}, {
  $addToSet: {
    valorUnitario2: NumberDecimal("0.00"),
  },
});

db.produtos.find({}, {
  nome: true,
  valorUnitario: true,
  _id: false,
});