
const reviewSelector = (reviews, product) => {
  // debugger
  debugger
  let ansArr = [];
  for (var i = 0; i < reviews.length; i++) {
    if (reviews[i].product_id === product.id){
      return ansArr.push(reviews[i])
    }
  }
  debugger;
  return ansArr;
}

export default reviewSelector;
