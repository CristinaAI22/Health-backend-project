const getNonRecommendedCategories = (array) => {
  const uniqueCategories = [];
  array.forEach((p) => {
    if (!uniqueCategories.includes(p.categories)) {
      uniqueCategories.push(p.categories);
    }
  });
  return uniqueCategories;
};
module.exports = getNonRecommendedCategories;
