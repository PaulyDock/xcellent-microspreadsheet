const specialProduct = function(variedInputs) {
  let sum = 0;
  for (let i = 0; i < variedInputs.length; i++) {
    if (!isNaN(variedInputs[i])) {
      sum += variedInputs[i];
    }
  }
}

module.exports = specialProduct;