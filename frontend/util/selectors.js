
const reviewSelector = (reviews, product) => {

  let ansArr = [];
  for (var i = 0; i < reviews.length; i++) {
    if (reviews[i].product_id === product.id){
      return ansArr.push(reviews[i])
    }
  }
  return ansArr;
}

export default reviewSelector;
