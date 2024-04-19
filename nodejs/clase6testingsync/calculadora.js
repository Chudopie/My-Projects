const calculadora = {
  add(a = 0, b = 0, c = 0, d = 0, e = 0, f = 0) {
    if (tyepof(a) == String) {
      return "no valida";
    } else {
    }
    let list = [a, b, c, d, e, f];
    let res = 0;

    for (let i = 0; i < list.length; i++) {
      res += list[i];
    }
    console.log(res);
    return res;
  },
};
module.exports = calculadora;
