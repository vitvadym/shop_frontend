const formatCategoryTitle = (category: string) => {
  if (category === 'phones') {
    return `${`Mobile ${category}`}`;
  } else {
    return category.charAt(0).toUpperCase() + category.slice(1);
  }
};

export default formatCategoryTitle;
