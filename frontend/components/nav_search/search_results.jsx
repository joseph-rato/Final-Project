import React from 'react';
import SearchProductListItem from './search_product_list_item'

class SearchResults extends React.Component{
    
    // these are the products that will appear or not
    productResults(){
        const allProds = this.props.allProducts
        return(
        (this.props.searchedProductResults.length === 0) ? 
        <div className="search-results-negative">
            <div>PRODUCTS</div>
            <span>No matches</span>
        </div>
        : <div>
            <div>PRODUCTS</div>
            <ul className="product-search-results">
                {
                    this.props.searchedProductResults.map( (searchId, idx) =>{
                        return(
                            <SearchProductListItem key={idx} openModal={this.props.openModal} product={allProds[searchId]} />
                        );
                    })
                }
            </ul>
        </div>
        ) 
    }

    profilePic(searchId) {
        return(
          (this.props.allUsers[searchId].avatarPic === undefined)
        ? (<div className="profile-avatar-button">
            <div className="profie-avatar-self-made">
              <svg className="avatar-background" height="47" width="47">
                <circle cx="23" cy="23" r="23" stroke="lightgrey" strokeWidth="3" fill="red" />
              </svg>
              <div className="profile-letter-self-made">{this.props.currentUser.username.slice(0, 1)}</div>
            </div>
            </div>)
        : (<div>{this.props.allUsers[searchId].avatarPic}</div>)
        )}


    // these are the users that will appear or not
    userResults(){
        const profilePic = (searchId) => this.profilePic(searchId)
        const allUsers = this.props.allUsers
        debugger
         return(
          (this.props.searchedUsersResults.length === 0) ? 
        <div className="search-results-negative">
            <div>USERS</div>
            <span>No matches</span>
        </div>
        :<div>
            <div>USERS</div>
            <ul className="product-search-results">
                {
                    this.props.searchedUsersResults.map( (searchId, idx) => {
                        return( 
                            <li key={idx}>
                                <div>help</div>
                                <div>{profilePic(searchId)}</div>
                                <div>{allUsers[searchId].username}</div>
                                <div>{allUsers[searchId].headline}</div>
                            </li>
                        )
                    })
                }
            </ul>
        </div> 
         )
    }

    render(){
        return(
            <div className="search-results">
                <label>Search Results</label>
                {this.productResults()}
                {this.userResults()}
            </div>
        )
    }
}

export default SearchResults;