const allProducts = require("../assets/db.json");

const getProducts = (req, res) => {
  const { query } = req.query;

  const products = allProducts.filter((p) => {
    const { title } = p;
    if (title.toLowerCase().includes(query.toLowerCase())) {
      return p;
    }
  });
  res.status(200).json({ products });
};
module.exports = getProducts;
