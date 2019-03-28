# README

## Description
This app allows to post products read reviews and create users. It's meant to share cool new products you've found and then watch them escape from obscurity.

## Live site
[Product-esc](http://product-esc.herokuapp.com)

## Technologies Used
This app was built on a rails framework for the backend, with a postgresql as the database and React/Redux framework for the frontend. The outside technology used was AWS active storage for storage of images.

## Key Features
* User Authentication
  * Signup for an account
  * Log in/Log out
  * Change profile picture
* Products
  * Add products
  * View Index of all products 
* ProductDiscussion
  * Respond to products, reviews, or comments
  * Delete comments
  * Edit comments
* Reviews
  * Leave a Review
  * Delete your Reviews
  * Edit your Reviews
* Tags 
  * Search by tags 
  * Assign products tags
* Search
  * Search a User, Product or Tag

## Code
Two features I'm very proud of are implementing a debouncer for reducing amounts of searches and having a search result page that allows for searching with a url and getting a normal response.

The componentDidUpdate method here is for a debouncer. The debouncer prevents my function from repeatedly sending database requests whenever a new query is typed in. 
- Instead we put a .25 second timer to see if a new letter is typed. Everytime a new letter is typed the current State will not equel prevState. 
- As a result we clear our last time out and replace it with another .25 second timer. 
- By the time the user finishes typing then they will finally make a request to our database on the backend for the relevent information.

Gif example: 
  <img src="app/assets/images/searchDebouncer.gif" />

Inside frontend/component/nav_search/search.jsx
```JavaScript
  
  componentDidUpdate(prevProps, prevState) {
        if(this.state !== prevState) {
            let autoSearching = {query_string: this.state.queryString}
            const sendQuery = (data) => this.props.submitQuery(data);
            
            clearTimeout(this.debouncy)
            this.debouncy = setTimeout( function() {
                
                sendQuery(autoSearching)
            }, 250)
        }
    }

```
To allow for a my results page to properly load after either typing a URL in or clicking another tag, I was required to write functions for componentDidMount and componentWillUpdate. The componentDidMount checks if the react page will be loading a tag related search result or a product related search result. Then it checks if the Redux store already has information on potential products if it doesn't then it will send a server request for that data.

The componentWillUpdate allows for users to click on a different tag or search for a different key word and still get new results.

Inside frontend/component/search_index/index_results.jsx
```JavaScript
  componentDidMount(){
    let that = this
    // this.checkProductsPresent()
    if (isEmpty(this.props.products) && (!!this.props.tag)){
      return this.props.fetchProducts().then( allProds =>{
        return that.props.fetchSearchResults({tags: that.props.tag}).then( tagAlots =>{
          let podArr = Object.keys(tagAlots.tags)
          let productsArr = Object.values(allProds.products.products)
          that.setState({prodList: podArr, allProds: productsArr})
        })
      })
    } else if (isEmpty(this.props.products) && (!!this.props.productIds)) {
      let newQuery = this.props.history.location.search.slice(1)
      return this.props.fetchSearchResults({query_string: newQuery}).then( (queryResults) =>{
        return this.props.fetchProducts().then( (allProds) =>{
          this.setState({prodList: that.props.productIds})
        })
      })
    } else {
      if (!!this.props.tag){
          return this.props.fetchSearchResults({tags: this.props.tag}).then( data => {
            let podArr = Object.keys(data.tags)
            that.setState({prodList: podArr})
          });
      } else {
        let someQuery = this.props.history.location.search.slice(1)
        return this.props.fetchSearchResults({query_string: someQuery}).then( (queryResults) =>{
          // let productionArr = Object.keys(queryResults.products)
          return this.setState({prodList: that.props.productIds})
        })
      }
    }
  }

  componentWillUpdate(nextProps) {
    // need another update for different searches being submitted
    let that = this
    let newURL = nextProps.match.params
    if (nextProps.match.params.tagType !== this.props.match.params.tagType){
      
      this.props.fetchSearchResults({tags: nextProps.match.params.tagType}).then( tagResults =>{
        let podArr = Object.keys(tagResults.tags)
        return this.setState({prodList: podArr})
      })
    } else if (nextProps.location.search.slice(1) !== this.props.location.search.slice(1)){
      let newQuery = nextProps.location.search.slice(1)
      this.props.fetchSearchResults({query_string: newQuery}).then( (searchResults) =>{

        
        return this.setState({prodList: that.props.productIds})
      })
    }

  }alState = merge({}, finalState, {[userArr[i].id]: userArr[i]});
  }
```
### Future Changes
Future directions for this project:
* Likes, and Collections
