import React, { Component } from "react";
import { Button } from "reactstrap";


export default class PostStatusFilter extends Component  {
    constructor(props) {
        super(props)
        this.Button = [
            {name: "all",
            label: "All notes"},
            {name: "like",
            label: "Liked notes"}
        ]
    }

    render() {
        const buttons = this.Button.map(({name, label}) => {
            const {filter, onUpdateFilter} = this.props;
            // const active = this.props.filter === name;
            // const activeColor = active ? "warning" : "red";
            return (
                <Button key={name} color="warning" outline onClick={() => onUpdateFilter(name)}>{label}</Button>
            )
        })
        return (
            <div className="button-group">
                {buttons}
                {/* <Button color="warning">Liked notes</Button>{' '} */}
            </div>
        )
    }
    
}
