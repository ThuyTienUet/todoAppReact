import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class TodoSearch extends Component {

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(){
        var searchText = this.input.value;
        var showCompleted = this.refs.showCompleted.checked;
        return this.props.onSearch(searchText,showCompleted);
    }
    render(){
        return(
            <div className="container_header">
                <div className="search">
                    <FormControl type="search" inputRef={(ref) => {this.input = ref}} placeholder='Search todo' onChange={this.handleSearch}/>
                </div>
                <div className="show">
                    <input type='checkbox' ref='showCompleted' onChange={this.handleSearch}/> Show completed todo
                </div>
            </div>
        );
    }
}

export default TodoSearch;