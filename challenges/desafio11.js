db.produtos.updateMany({}, {
  $push: {
    tags: {
      $each: ["combo", "tasty"],
      $sort: 1,
    },
  },
});

db.produtos.find({}, {
  nome: true,
  _id: false,
  tags: true,
});