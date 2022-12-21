import React, {Component} from "react";


export default class PostListItem extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         important: false,
    //         like: false
    //     }

    //     this.addImportant = this.addImportant.bind(this)
    //     this.addLike = this.addLike.bind(this)
    // }

    // addImportant() {
    //     this.setState(({important}) => ({
    //         important: !important
    //     }))
    // }

    // addLike() {
    //     this.setState(({like}) => ({
    //         like: !like
    //     }))
    // }

    render() {

        const {avatar, first_name, last_name, email, onOpenWindow, onOpenFullWindow, onDelete, onToggleImportant, onToggleLike, important, like} = this.props;
        // const {important, like} = this.state;

        let classNames = "list-group-item d-flex justify-content-between";

        if (important) {
            classNames += " important";
        }
        if (like) {
            classNames += " like";
        }
        

        return (
            <div className={classNames}>
                <img src={avatar} alt="img" width="50px" height="50px"></img>
                <span className="app-list-item-label" onClick={onToggleLike}>
                    {first_name} {last_name}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-sm"><i className="bi bi-star-fill" onClick={onToggleImportant}></i></button>
                    <button className="btn-sm"><i className="bi bi-heart-fill" onClick={onToggleLike}></i></button>
                    <button className="btn-sm"><i className="bi bi-zoom-in" onClick={onOpenWindow} data-toggle="modal"></i></button>
                    <button className="btn-sm"><i className="bi bi-info-circle" onClick={onOpenFullWindow} data-toggle="modal"></i></button>
                    <button className="btn-sm"><i className="bi bi-trash" onClick={onDelete}></i></button>
                </div>
            </div>
        )
    }
}



