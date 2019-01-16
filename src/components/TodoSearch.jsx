import React from 'react';
import createClass from 'create-react-class';

var TodoSearch = createClass({
    handleSearch: function(){
        var searchText = this.refs.searchText.value;
        var showCompleted = this.refs.showCompleted.checked;
        return this.props.onSearch(searchText,showCompleted);
    },
    render: function(){
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
});

export default TodoSearch;