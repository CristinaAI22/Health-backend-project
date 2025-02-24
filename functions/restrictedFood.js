const products = require("../assets/db.json");

const restrictedFood = (bloodType) => {
  const numberBloodType = Number(bloodType);
  const foodCategorie = [];
  products.forEach((p) => {
    const { categories, groupBloodNotAllowed } = p;
    if (
      !categories.includes("drinnks") &&
      groupBloodNotAllowed[numberBloodType] === true
    ) {
      foodCategorie.push(p);
    }
  });
  return foodCategorie;
};
module.exports = restrictedFood;
