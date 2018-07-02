// import React from 'react';
// import Hand from './Hand/Hand';
// import Board from './Board';
// import {Component} from "react/lib/ReactBaseClasses";
//
//
// class GinRummyBoard extends Component {
//     constructor(props) {
//         super(props);
//         this.styles = {
//             twoHand: function () {
//                 return {
//                     handS: {bottom: '0', 'right': '50%', 'position': 'absolute'},
//                     board: {'left': "25%", 'top': '35%', 'position': 'absolute', 'width': '75%'}
//                 }
//             }
//         };
//         this.state = props.state;
//         this.cardSize = props.cardSize
//     }
//
//
//
//     onClick(key) {
//         console.log(key);
//         if (key.hand === 'handS') {
//             console.log(this.state.handS);
//             let index = this.state.handS.indexOf(key.card);
//             this.setState({
//                 handS: this.state.handS.splice(index, 1)
//             })
//         }
//     };
//
//     render() {
//         console.log("state ginRummyboard: ", this.state)
//
//
//         )
//     }
// }
//
// export default GinRummyBoard