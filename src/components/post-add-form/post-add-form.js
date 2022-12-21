import React, { Component } from "react";


export default class PostAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }

        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeValue(event) {
        this.setState({
            text: event.target.value 
        })
    } 

    onSubmit(event) {
        event.preventDefault();
        this.props.addItem(this.state.text)
        this.setState({
            text: "" 
        })
    }

    render() {
        return (
            <form className="bottom-panel d-flex"
                onSubmit={this.onSubmit}
                >
                <input type="text" placeholder="What are you thinking about?" className="form-control new-post-label"
                onChange={this.onChangeValue}
                value={this.state.text}
                ></input>
                <button type="submit" className="btn btn-outline-success"
                // onClick={() => addItem("Text")}
                >Add</button>
            </form>
        )
    }
    
}
