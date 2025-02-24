const getNonRecommendedCategories = (array) => {
  const uniqueCategories = [];
  uniqueCategories.forEach((p) => {
    if (!uniqueCategories.includes(p.categories)) {
      uniqueCategories.push(p.categories);
    }
  });
  return uniqueCategories;
};
module.exports = uniqueCategories;
