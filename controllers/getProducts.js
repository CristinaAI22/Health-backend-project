const allProducts = require("../assets/db.json");

const getProducts = (req, res) => {
  const query = req.query.query || "";

  if (typeof query !== "string") {
    return res.status(400).json({ error: "Must enter string" });
  }

  const products = allProducts.filter((p) =>
    p.title.toLowerCase().includes(query.toLocaleLowerCase())
  );
  res.status(200).json({ products });
};
module.exports = getProducts;
