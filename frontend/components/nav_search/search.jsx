import React from 'react';
import SearchResultsContainer from './search_results_container'
import {isEmpty} from '../../util/random_util_functions'
import {withRouter} from 'react-router-dom'

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            queryString: ''
        }
        this.checkSubmit = this.checkSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.changedInput = false; 
        this.handleSubmit = this.handleSubmit.bind(this)
        this.debouncy;
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state !== prevState && this.state !== '') {
            let autoSearching = {query_string: this.state.queryString}
            const sendQuery = (data) => this.props.submitQuery(data);
            
            clearTimeout(this.debouncy)
            this.debouncy = setTimeout( function() {
                
                sendQuery(autoSearching)
                // might not need this if we take out merge in state and replace with Object.assign
                // .then( data => {
                //     if (isEmpty(data)) {
                //         return null
                //     }
                // })
            }, 250)
        }
    }

    debouncedSubmit(){

    }
    // history.push({
    //     pathname: '/dresses',
    //     search: '?color=blue'
    //   })

    handleSubmit(){
        if (this.state.queryString !== '' && this.changedInput === false){
            // let searching = {query_string: this.state.queryString}
            clearTimeout(this.debouncy)
            let urlQueryString = '/search/' + `${this.state.queryString}`
            this.props.history.push(urlQueryString);
            
            debugger
            return this.props.closeOutModal()
       // this.props.closeOutModal();;
        }
    }

    handleInput(pos){
        return (event) => {
            event.preventDefault();
            this.changedInput = true 
            return this.setState({[pos]: event.currentTarget.value})
        }
    }

    checkSubmit(event){
        if (event.which === 13 && this.state.queryString !== '') {
            this.changedInput = false
            return this.handleSubmit();
        }
    }
    showResults(){
        if (this.state.queryString !== "" && this.props.modalOpen === true){
            return (
            <div>
                    <SearchResultsContainer />
            </div>
            )
        } else {
            return null 
        }
    }

    render(){
        return(
            <div className={this.props.modalOpen ? 'search-container-modal' : 'search-container'}>
                <div className="search-bar-symb-input">
                    <i className="fas fa-search"></i>
                    <form className={this.props.modalOpen ? 'search-bar-modal' : 'search-bar'} onSubmit={this.checkSubmit}>
                        <input
                        autoFocus
                        className={this.props.modalOpen ? 'search-input-modal' : 'search-input'}
                        placeholder="Discover your next favorite thing..."
                        value={this.state.queryString}
                        onChange={this.handleInput('queryString')}
                        onKeyPress={this.checkSubmit}
                        ></input>
                    </form>
                </div>
                {this.showResults()}
            </div>
        )
    }
}

export default withRouter(SearchBar);