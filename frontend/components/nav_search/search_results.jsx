import React from 'react';
import SearchProductListItem from './search_product_list_item'
import {Link} from 'react-router-dom'
import { closeModal } from '../../actions/modal_actions';

const tagDescriptionsArr = [
    ['Tech', 'Something to make us futuristic'],
    ['Education', 'Something to keep us smart'],
    ['Music', 'Something pleasent to listen to'],
    ["Productivity", 'Things that can keep us on topic'],
    ['AI', 'Something smarter then us']
]

class SearchResults extends React.Component{
    
    // these are the products that will appear or not
    productResults(){
        const allProds = this.props.allProducts
        return(
        (this.props.searchedProductResults.length === 0) ? 
        <div className="no-response-result-response">
            <div className="search-results-label">Tags</div>
            <ul className="product-search-results">
                {
                    tagDescriptionsArr.map( (tags, idx) =>{
                        return(
                            <Link className="tag-search-result-link" to={`/search/tags/${tags[0]}`}>{tags[0]}</Link>
                        )
                    })
                }
            </ul>
        </div>
        : <div>
            <div className="search-results-label">PRODUCTS</div>
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
              <div className="profile-letter-self-made">{this.props.allUsers[searchId].username.slice(0, 1)}</div>
            </div>
            </div>)
        : (<img className="search-result-user-avatar" src={this.props.allUsers[searchId].avatarPic}></img>)
        )}


    // these are the users that will appear or not
    userResults(){
        const profilePic = (searchId) => this.profilePic(searchId)
        const allUsers = this.props.allUsers
         return(
          (this.props.searchedUsersResults.length === 0) ? 
            null
        :<div>
            <div className="search-results-label">USERS</div>
            <ul className="user-search-results">
                {
                    this.props.searchedUsersResults.map( (searchId, idx) => {
                        return( 
                            <Link onClick={() => this.props.closeModal()} className="search-result-user-listitems"key={idx} to={`/user/${allUsers[searchId].id}`}>
                                <div className="search-picture">{profilePic(searchId)}</div>
                                <div className="search-user-results-name">{allUsers[searchId].username}</div>
                                <div className="search-user-results-headline">{allUsers[searchId].headline}</div>
                            </Link>
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
                {this.productResults()}
                {this.userResults()}
            </div>
        )
    }
}

export default SearchResults;