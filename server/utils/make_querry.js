export const makeQueryCondition = (condition) => {
  const values = [];
  const queryCondition = Object.keys(condition)
    .map((key) => {
      values.push(condition[key]);
      return `${key} = ?`;
    })
    .join(' AND ');
  return { queryCondition, values };
};
