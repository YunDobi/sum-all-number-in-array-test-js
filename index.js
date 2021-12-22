const sumItems = function(array) {
  let result = 0;
  for (let i of array) {
    console.log(i)
    if (Array.isArray(i)) {
      result += sumItems(i);
    } else {
      result += i;
      console.log("resuljt",result)
    }
  }
  return result;
};
console.log(sumItems([[1, 2, [[3], 4]], 5, []])); //15

module.exports = sumItems;

