import React, { Component } from "react";


export default class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }

        this.onSearchPost = this.onSearchPost.bind(this);
    }

    onSearchPost(event) {
        const value = event.target.value;

        this.setState({
            text: value 
        });

        this.props.onUpdateSearchPanel(value);
    } 

    render() {
        return (
            <div className="search-panel">
                <input 
                    type="text" 
                    className="form-control search-input"
                    placeholder="Search notes"
                    onChange={this.onSearchPost}
                    >
                </input>
            </div>
        )
    }
    
}