import React, { Component } from 'react';

class TodoSearch extends Component {

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(){
        var searchText = this.refs.searchText.value;
        var showCompleted = this.refs.showCompleted.checked;
        return this.props.onSearch(searchText,showCompleted);
    }
    render(){
        return(
            <div className="container_header">
                <div className="search">
                    <input type="search" ref='searchText' placeholder='Search todo' onChange={this.handleSearch}/>
                </div>
                <div className="show">
                    <input type='checkbox' ref='showCompleted' onChange={this.handleSearch}/> Show completed todo
                </div>
            </div>
        );
    }
}

export default TodoSearch;