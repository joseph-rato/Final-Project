import React from 'react';
import SearchResultsContainer from './search_results_container'

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            queryString: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.changedInput = false; 
        this.handleSubmit = this.handleSubmit.bind(this)
        let debouncy;
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state !== prevState && this.state !== '') {
            let autoSearching = {query_string: this.state.queryString}
            const sendQuery = (data) => this.props.submitQuery(data);
            
            clearTimeout(this.debouncy)
            this.debouncy = setTimeout( function() {
                
                sendQuery(autoSearching)
            }, 250)
        }
    }

    debouncedSubmit(){

    }


    handleSubmit(event){
        event.preventDefault();
        if (this.state.queryString !== '' && this.changedInput === false){
            let searching = {query_string: this.state.queryString}
            return this.props.submitQuery(searching);
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
                <form className={this.props.modalOpen ? 'search-bar-modal' : 'search-bar'} onSubmit={this.handleSubmit}>
                    <input
                    className={this.props.modalOpen ? 'search-input-modal' : 'search-input'}
                    placeholder="Discover your next favorite thing..."
                    value={this.state.queryString}
                    onChange={this.handleInput('queryString')}
                    onKeyPress={this.checkSubmit}
                    ></input>
                </form>
                {this.showResults()}
            </div>
        )
    }
}

export default SearchBar;