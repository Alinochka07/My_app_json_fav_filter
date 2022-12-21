import React, { Component } from "react";
import {createRoot} from 'react-dom/client';
// import ReactDOM from 'react-dom';
import App from "./components/app";
import "bootstrap/dist/css/bootstrap.css"
import "./index.css";
// import "./index.module.scss";
// import style from "./index.module.css";



// // option 1 - жесткая привязка
// class SocialMedia extends Component {
//     constructor(props) {
//     super(props)

//     this.state = {
//         count: 1
//     }
//     this.Share = this.Share.bind(this); 
// }

// Share() {
//     this.setState(state => ({
//         count: ++state.count
//     }))
// }

//     render() {
//     const {link, text, social} = this.props;
//     const {count} = this.state;
//     return (
//         <p>
//             <button onClick={this.Share}>+1</button>
//             <a href={link}>{text}</a>
//             <span>{social}</span>
//             <span> - {count}</span>
//         </p>
//     )
// }

// }



// - - - - - - - - - - - - - - - - - //


// option 2
// class SocialMedia extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             count: 1
//         }

//         this.Share = () => {
            
//             this.setState(state => ({
//                 count: ++state.count
//             }))
//         }
//     }
//     render() {
//         const {link, text, social} = this.props;
//         const {count} = this.state;
//         return (
//             <p>
//                 <button onClick={this.Share}>+1</button>
//                 <a href={link}>{text}</a>
//                 <span>{social}</span>
//                 <span> - {count}</span>
//             </p>
//         )
//     }
// }



// - - - - - - - - - - - - - - - - - 

// option 3
// class SocialMedia extends Component {

//     state = {
//         count: 1
//     }

//     Share = () => {
        
//         this.setState(state => ({
//             count: ++state.count
//         }))
//     }

//     render() {
//         const {link, text, social} = this.props;
//         const {count} = this.state;
//         return (
//             <p>
//                 <button onClick={this.Share}>+1</button>
//                 <a href={link}>{text}</a>
//                 <span>{social}</span>
//                 <span> - {count}</span>
//             </p>
//         )
//     }
// }





// Stable for SocialMedia

// const All = () => {
//     return (
//         <div>
//             <SocialMedia link="https://github.com/Alinochka07/Frontend" text="Click me" social="Instagram"/>
//             <SocialMedia link="https://github.com/Alinochka07/Frontend" text="Click me" social="Facebook"/>
//             <SocialMedia link="https://github.com/Alinochka07/Frontend" text="Click me" social="Twitter"/>
//         </div>
//     )
// }




// Calling our function

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
        <App/>,
);




