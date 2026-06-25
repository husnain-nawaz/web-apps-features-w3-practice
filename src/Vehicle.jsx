import React from "react";

class Car extends React.Component{
//   constructor(props){
//     super(props)
//   }
  render(){
    return <h2> I am Car {this.props.color} </h2>
  }
}
// class Garage extends React.Component{
//   render(){
//     return (
//       <div>
//         <Car />
//         <h2>I am truck {this.props.color}</h2>
//       </div>
//     )
//   }
// }
export default Car;
