
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length <=0) {
    return [];
  }
  
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i === 0 || i % 2 === 0) {
      matrix[i].sort((a,b) => a - b);
    } else {
      matrix[i].sort((a,b) => b - a);
    }
    res.push(matrix[i]);
  }

  res = res.join(',').split(',');
  for (let i =0; i < res.length; i++) {
    res[i] = +res[i];
  }
  return res;
};


