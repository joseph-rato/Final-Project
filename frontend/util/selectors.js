
export const reviewSelector = (reviews, product) => {

  let ansArr = [];
  for (var i = 0; i < reviews.length; i++) {
    if (reviews[i].product_id === product.id){
      return ansArr.push(reviews[i])
    }
  }
  return ansArr;
}
export const commentSelector = (productDiscussions, responseCommentId) => {

  let commentArr = []
  let arrProdDiscus = Object.values(productDiscussions)
  for(let i = 0; i < arrProdDiscus.length; i++) {
    if (arrProdDiscus[i].body_id === responseCommentId){
      commentArr.push(arrProdDiscus[i])
    }
  }
  return commentArr;
}

