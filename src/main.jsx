import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createPortal } from 'react-dom';

import './index.css'
import _App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <_App />
//   </StrictMode>,
// )





// function Model({isopen,onclose,children}){
//     if(!isopen){
//         return null;
//     }
//     else{
//     return(
//         <div>
//             {children}
//             <button onClick={onclose}>close</button>
//         </div>
//     )}
// }
// function MyApp(){
//     const [isopen, setisopen] = useState(false);
//     return(
//         <div>
//             <button onClick={()=>setisopen(true)}>OPEN</button>
//             <Model isopen={isopen} onclose={()=>setisopen(false)}>
//                 <p>model content</p>
//             </Model>
//         </div>
//     )
// }

// createRoot(document.getElementById('root')).render(
//   <MyApp />
// )





// function PortalButton({ onClick, children }) {
//   return createPortal(
//     <button onClick={onClick}>
//       {children}
//     </button>,
//     document.body
//   );
// }
// function App() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   return (
//     <div onClick={() => {
//         setCount1(c => c + 1);
//       }}>
//       <h2>Div Clicked: {count1}</h2>
//       <h2>Button Clicked: {count2}</h2>      
//       <PortalButton
//         onClick={(e) => {
//           setCount2(c => c + 1);
//         }}>
//         Floating Button
//       </PortalButton>
//     </div>
//   );
// }
// createRoot(document.getElementById('root')).render(
//   <App />
// );

// function PortalButton({onClick,children}){
//   return createPortal(
//     <button onClick={onClick}>
//       {children}
//     </button>,
//     document.body
//   )
// }
// function App(){
//   const [count1, setcount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   return(
//     <div onClick={()=>{
//       setcount1(c=> c+1);
//     }}>
//       <h2>Div clicked: {count1}</h2>
//       <h2>Button clicked: {count2}</h2>
//     <PortalButton onClick={(e)=>{
//       setCount2(c=>c+1)
//     }}>
//       Floating button
//     </PortalButton>
//     </div>
//   )
// }
// createRoot(document.getElementById("root")).render(
//   <App />
// )



// class Car extends React.Component {
//   render(){
//     return <h2>Hi, iam a car</h2>
//   }
// }




// class Car extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       color: "red",
//     }
//   }
//   render(){
//     return <h2>I am car {this.state.color}</h2>
//   }
// }
// createRoot(document.getElementById("root")).render(
//   <Car />
// )



// class Car extends React.Component{
// // construtor to ham ny khud bnaya tha state ma lakin props ma bna sakty han aisa nahi ky nahi bna sakty but props ko render ma use kiy aha props ky data ko chnag nahi kr sakty jaisy blue ha to red nahi kr sakty - isi tarha ham props ma constructor nahi bnaya or values ko ly lia 
//   //  props ma data parent daita ha - or state ma component daita ha 
// render(){
//     return <h2>I am car {this.props.color}</h2>
//   }
// }
// createRoot(document.getElementById("root")).render(
//   <Car color="blue" />
// )


// agr construtor ma bnaa aha props to aisy ho ga
// class Car extends React.Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return <h2>I am car {this.props.color}</h2>
//   }
// }
// createRoot(document.getElementById("root")).render(
//   <Car color="yellow" />
// )




// import Car from "./Vehicle.jsx"
// createRoot(document.getElementById("root")).render(
//   // <Car color="yellow" />
//   // <Garage color = "Green" />
//   < Car />
// )




// class Car extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       brand : "Ford",
//       model : "Mushtang",
//       color : " Red",
//       year : 1964
//     }
//   }
//   render(){
//     return(
//       <p>It is a {this.state.color} {this.state.brand} {this.state.year} </p>
//   )}
// }
// createRoot(document.getElementById("root")).render(
//   <Car />
// )



// class Car extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       brand : "Ford",
//       model : "Mustang",
//       color : "Red",
//       year : 1964,
//     }
//   }
//   changeColor = () =>{
//     this.setState ({color : "Blue"})
//   }
//   render(){
//     return (
//       <>
//       <h1>My {this.state.brand} </h1>
//       <p>
//         It is a {this.state.color} {this.state.model} {this.state.year}
//       </p>
//       <button type='button' onClick={this.changeColor}> Chnage Color </button>
//       </>
//     )
//   }
// }
// createRoot(document.getElementById("root")).render(
//   <Car />
// )

































