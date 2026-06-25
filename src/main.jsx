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



// class Header extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   render(){
//     return (
//       <h1>My favourite Color is: {this.state.favoritecolor} </h1>
//     )
//   }
// }
// createRoot(document.getElementById('root')).render(
//   <Header />
// )




// class Header extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {favoritecolor: "red"}
//   }
//   static getDerivedStateFromProps(props, state){
//     return {favoritecolor: props.chnagecolor}
//   }
//   render(){
//     return (
//       <h1>My Favourite COLOR: {this.state.favoritecolor} </h1>
//     )
//   }
// }
// createRoot(document.getElementById('root')).render(
//   <Header chnagecolor = "Purple" />
// )



// class Header extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {favouriteColor : "BLUE"}
//   }
//   componentDidMount(){
//     setTimeout(()=>{
//       this.setState({favouriteColor: "Yellowish"})
//     },1000)
//   }

//   render(){
//     return(
//       <h1>MY Favourite Color is - {this.state.favouriteColor} </h1>
//     )
//   }
// }
// createRoot(document.getElementById('root')).render(
//   <Header />
// )




// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favoritecolor : "red",
//       userchnaged : false,
//     };
//   }
//   static getDerivedStateFromProps(props, state) {
//     if(state.userchnaged){
//       return null;
//     }
//     return {favoritecolor: props.favcol };
//   }
//   changeColor = () => {
//     this.setState({
//       favoritecolor: "blue",
//       userchnaged : true,
//     });
//   }
//   render() {
//     return (
//       <div>
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }
// createRoot(document.getElementById('root')).render(
//   <Header favcol="yellow" />
// );




// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//     shouldComponentUpdate(){ // ya automatic ture hota ha agr na b likahin ya part ha react ka or likh kr is ma fallse kiya to jo b ham changes krna chah rhy han ab nahi hon gy is ma
//       return false;
//     }
//   changeColor = (()=>{
//     this.setState({favoritecolor: "Blue"});
//   })

//   render() {
//     return (
//       <div>
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }
// createRoot(document.getElementById('root')).render(
//   <Header />
// );




// class Header extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {favoritecolor: "red"}
//   }
//   componentDidMount(){
//     setTimeout(()=>{
//       this.setState({favoritecolor: "Yellow"})
//     },1000)
//   }
//   getSnapshotBeforeUpdate(prevprops, PrevState){
//     document.getElementById("div1").innerHTML = "Before update was :" + PrevState.favoritecolor;
//   }
//   componentDidUpdate(){
//     document.getElementById("div2").innerHTML = "Updated is " + this.state.favoritecolor;
//   }
//   render(){
//     return(
//       <div>
//         <h1>M favourit ecolor is {this.state.favoritecolor} </h1>
//         <div id='div1'></div>
//         <div id='div2'></div>
//       </div>
//     )
//   }
// }
// createRoot(document.getElementById('root')).render(
//   <Header />
// );


// function Car(myobj){ // ya jo myobj ha ya brand ha jo sab sy nich ha or us ki value ha FORD
//   return(
//     <h2>I am a {myobj.brand} </h2>
//   )
// }



// function Car(myobj){ // passing more than one props in here
//   return(
//     <h2>I am a {myobj.brand} {myobj.color} {myobj.model} </h2>
//   )
// }
// createRoot(document.getElementById('root')).render(
//   <Car brand="Ford" model="Mustang" color="Red" />
// )


// function Car(props){
//   return(
//     <h2>I am a {props.brand} {props.color} {props.model} </h2>
//   )
// }
// let x = "Ford";
// createRoot(document.getElementById('root')).render(
//   <Car brand="Ford" model={x} color={1996} />
// )



// function Car(props){
//   return(
//     <>
//       <h2>My car is {props.carinfo.name} {props.carinfo.model}  </h2>
//       <h2>My car is {props.years[0]} {props.years[2]}  </h2>
//     </>
//  )
// }
// let x = [1964, 1965, 1966];
// let y = {name: "Ford", model: "Mustang"};
// createRoot(document.getElementById('root')).render(
//   <Car years={x} carinfo={y} />
// );



// function Car(props){
//   return (
//     <>
//     <h2>My {props.carInfo.name}{props.carInfo.model}{props.carInfo.color}{props.carInfo.year} </h2>
//     </>
//   )
// }
// const carInformation = {
//   name: "Ford",
//   model: "Mushtang",
//   color : "red",
//   year: 1988,
// }
// createRoot(document.getElementById('root')).render(
//   <Car carInfo={carInformation} />
// )




// function Car(props){
//   return(
//     <h2>My car is {props.carinfo[0]} {props.carinfo[1]} </h2>
//   )
// }
// const carinformation = ["Ford","Toyota","camery"]
// createRoot(document.getElementById('root')).render(
//   <Car carinfo = {carinformation} />
// )



// function Car(props){
//   return (
//     <h2>I am a {props.brand} </h2>
//   )
// }
// function Garage(){
//   return (
//     //  only read han in ko chnag enahi kr askaty in ki valies ko 
//     <>
//       <h1>Garage second</h1>
//       <Car brand="Ford" /> 
//     </>
//   )
// }
// createRoot(document.getElementById('root')).render(
//   <Garage />
// )



// function Car(props){
//   const {brand,model} = props;
//   return(
//     <h2>I love my {brand} {model} </h2>
//   )
// }
// createRoot(document.getElementById('root')).render(
//   <Car brand="Ford" model="camrey" />
// )



// function Car({color, brand, ...rest}){
//   return(
//     <h2>My {brand} {rest.year} {rest.model} is {color} </h2>
//   )
// }
// createRoot(document.getElementById('root')).render(
//   <Car brand="Ford" model="camrey" color="blue" year={1988} />
// )



// function Car({color = "yellow", brand}){
//   return(
//     <h2>My {color} {brand} </h2>
//   )
// }
// createRoot(document.getElementById('root')).render(
//   <Car brand="Ford" model="camrey" color="blue" year={1988} />
// )
















