
module.exports = function towelSort (matrix) {
  let res = [];

  if (matrix) {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        res = res.concat(matrix[i]);
      } else {
        res = res.concat(matrix[i].reverse());
      }
    }
  } else {
      return res;
  }
  
  return res;
}
