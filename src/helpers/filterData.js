const filterData = (data, category_id) => {
  return data.filter((el) => el.category_id == category_id);
};

export default filterData;
