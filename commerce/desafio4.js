db.produtos.updateOne({
  nome: "Big Mac",
}, {
  $currentDate: {
    ultimaModificacao: true,
  },
});

db.produtos.findOne({
  ultimaModificacao: {
    $exists: true,
  },
}, {
  nome: true,
  _id: false,
});
