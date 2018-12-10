
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
  for(let i = 0; i < productDiscussions.length; i++) {
    if (productDiscussions[i].body_id === responseComment.id){
      return ansArr.push(productDiscussions[i])
    }
  }
  return commentArr;
}

