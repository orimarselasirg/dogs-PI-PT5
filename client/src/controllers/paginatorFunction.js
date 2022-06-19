//funcion para siguiente pagina
// sum y sum2 son estados locales de redux
export function next(sum2, sum, setSum, setSum2, page, array) {
    if (sum2 >= array.length) {
    } else {
      setSum(sum + page);
      setSum2(sum2 + page);
    }
  }
  //funcion para anterior pagina
  // sum y sum2 son estados locales de redux
  export function prev(sum2, sum, setSum, setSum2, page, array) {
    if (sum === array.length) {
    } else {
      setSum(sum - page);
      setSum2(sum2 - page);
    }
  }