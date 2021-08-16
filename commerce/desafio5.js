use("commerce");
db.produtos.updateMany({
  nome: {
    $ne: "McChicken",
  },
}, {
  $addToSet: {
    ingredientes: "ketchup",
  },
});

use("commerce");
db.produtos.find({}, {
  nome: true,
  _id: false,
  ingredientes: true,
});
