import React, {Component} from "react";
import Loader from "../loader";


export default class ModalWindow extends Component {

    render() {
        const {modalVisible, onCloseWindow, modalContent, modalContent: {first_name, last_name, email, avatar, info}} = this.props;
        let content, body;
        
        if(modalContent.length !== 0) {
            body = <Content first_name={first_name} last_name={last_name} email={email} avatar={avatar} onCloseWindow={onCloseWindow} info={info}></Content>
        } else {
            body = <Loader/>
        }

        if(modalVisible) {
            content =   <>
                            <div className="modal" aria-hidden="true">
                            
                                <div className="modal-dialog">
                                <span className="modal-close right" onClick={onCloseWindow}>x</span>
                                    {body}
                                </div>
                            </div>
                            
                        </>
        } else {
            content = null
        }
        return (content);
    }

    
}
const Content = ({first_name, last_name, email, avatar, onCloseWindow, info}) => {
    return (<>
                <div className="modal-header">
                    <h3 className="modal-title">{first_name} {last_name}</h3>
                </div>
                <div className="modal-body">
                    <div className="modal-content">
                        <img src={avatar} alt={first_name} width="180px" height="180px"></img>
                        <span>{first_name} {last_name}</span>
                        <span><a href={"mailto:" + email}>{email}</a></span>
                        <p>{info}</p>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-success" onClick={onCloseWindow}>Close</button>
                </div>
            </>
    )
}
