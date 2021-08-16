db.produtos.find({
  nome: /Mc/i,
}, {
  nome: true,
  _id: false,
  tags: true,
}).count();