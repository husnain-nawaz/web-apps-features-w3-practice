import React, { StrictMode, useState, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { createPortal } from 'react-dom';

import './index.css'
// import App from './App.jsx'
import styled from 'styled-components';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import App from './localstorage-Table-app.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)





















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







// function Son(props){
//   return (
//     <div style={{background:'yellow'}}>
//       <h1>Son</h1>
//       <div>{props.children}</div>
//     </div>
//   )
// }
// function Daughter(props){
//   // const {brand,model} = props;
//   return(
//     <div style={{background:"green"}}>
//       <h1>Daughter</h1>
//       <div>{props.children}</div>
//     </div>
//   )
// }
// function Parent(){
//   return(
//     <div>
//       <h1>Parent ha ya</h1>
//       <Son>
//         <p>y ason ha parent ma</p>
//       </Son>
//       <Daughter>
//         <p>
//           ya  daughter ha parent ma
//         </p>
//       </Daughter>
//     </div>
//   )
// }
// createRoot(document.getElementById('root')).render(
//   <Parent />
// );




// function  Football(){
//     const shoot = ()=>{
//         alert("Great shoot");
//     }
//     return(
//         <button onClick={shoot}>Click it</button>
//     )
// }
// createRoot(document.getElementById('root')).render(
//   <Football />
// );



// function Football(){
//     const shoot = (a)=>{
//         alert(a)
//     }
//     return(
//         <button onClick={()=>shoot("Goal")}>Take a shoot</button>
//     )
// }
// createRoot(document.getElementById('root')).render(
//   <Football />
// );




// function Football(){
//     // a ma goal a rha ha or event ma b 
//     const shoot = (a,b)=>{ 
//         alert(b.type)
//         alert(a)
//     }
//     return(
//         <button onClick={(event)=>shoot("Goal",event)}>Take shot</button>
//     )
// }
// createRoot(document.getElementById('root')).render(
//   <Football />
// );



// function MissedGoal(){
//     return <h1>Missed</h1>
// }
// function MadeGoal(){
//     return <h1>Goal</h1>
// }
// function Goal(props){
//     const isGoal = props.isGoal;
//     if(isGoal){
//         return <MadeGoal />
//     }
//     return <MissedGoal />
// }
// createRoot(document.getElementById('root')).render(
//     <Goal isGoal={true} />
// )



// function Car(props){
//     return(
//         <>
//         {props.brand && <h1>value is: {props.brand}</h1> }
//         </>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <Car brand={"husnian"} />
// )

// // ternRY operator condition ? true : false;



// function MissedGoal(){
//     return <h1>Missed</h1>
// }
// function MadeGoal(){
//     return <h1>Made Goal</h1>
// }
// function Goal(props){
//     return(
//         <>
//             {props.isGoal ? <MadeGoal /> : <MissedGoal />}
//         </>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <Goal isGoal={false} />
// )



// function MyCars(){
//     const cars = ['Ford','BMW','Audi'];
//     return(
//         <>
//             <h1>My Cars:</h1>
//             <ul>
//                 {cars.map((a)=>
//                     <li>
//                         {a}
//                     </li>
//                 )}
//             </ul>
//         </>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <MyCars />
// )



// function MyCars(){
//     const cars = [
//         {id:101, brand: "Ford"},
//         {id:102, brand: "Toyota"},
//         {id:103, brand: "Audi"}
//     ];
//     return(
//         <>
//             <h1>My Cars</h1>
//             <ul>
//                 {cars.map((a)=>
//                     <li key={a.id}>
//                         {a.brand}
//                     </li>
//                 )}
//             </ul>
//         </>
//     )
// }
// createRoot(document.getElementById('root')).render(
//   <MyCars />
// );




// function MyCars(){
//     const cars = ['Ford','BMW','Audi'];
//     return(
//         <>
//             {cars.map((value,index)=>
//                 <li key={index}>
//                    {index} {value}
//                 </li>
//             )}
//         </>
//     )
// }
// createRoot(document.getElementById('root')).render(
//   <MyCars />
// );




// function Myform(){
//     return(
//         <form>
//             <label>
//                 My Name:
//                 <input type="text" className='border p-4 border-solid border-yellow-500' />
//             </label>
//         </form>
//     )
// }
// createRoot(document.getElementById('root')).render(
//   <Myform />
// );




// function MyForm(){
//     const [name, Setname] = useState("Husnain Chodhary");
//     function handleChange(e){
//         e.target.value;
//     }
//     return(
//         <form>
//             <label>
//                 Enter your Name:
//                 <input type="text" value={name} onChange={handleChange} />
//             </label>
//             <p>Current Value is: {name} </p>
//         </form>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <MyForm />
// )





// function MyForm(){
//     const [name, setname] = useState("")
//     function handlesubmit(){
//         alert(name)
//     }
//     function handleChange(e){
//         setname(e.target.value);
//     }
//     return(
//         <form onSubmit={handlesubmit}>
//             <label>
//                 Enter Your Name:
//                 <input className='border' type="text" value={name} onChange={handleChange} />
//             </label>
//             <input type="Submit" />
//         </form>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <MyForm />
// )



// function MyForm(){
//     const [name, setname] = useState("")
//     function handlesubmit(){
//         alert(name)
//     }
//     function handleChange(e){
//         setname(e.target.value);
//     }
//     return(
//         <form onSubmit={handlesubmit}>
//             <label>
//                 Enter Your Name:
//                 <textarea className='border' type="text" value={name} onChange={handleChange} />
//             </label>
//             <p>value: {name} </p>
//             <input type="Submit" />
//         </form>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <MyForm />
// )





// function MyForm(){
//     const [name, setname] = useState("Toyota")
//     function handlesubmit(){
//         alert(name)
//     }
//     const handleChange = (e)=>{
//         setname(e.target.value);
//     }
//     return(
//         <form onSubmit={handlesubmit}>
//             <label>
//                 Enter:
//                 <select value={name} onChange={handleChange}>
//                     <option value="Ford">ford</option>
//                     <option value="Toyota">toyota</option>
//                     <option value="nissaa">Nissan</option>
//                 </select>
//             </label>
//             <p>value: {name} </p>
//             <input type="Submit" />
//         </form>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <MyForm />
// )




// function MyForm(){
//     const [names, setname] = useState({
//         firstname : "John",
//         lastname : "ali"
//     })
//     function handlesubmit(){
//         alert(name)
//     }
//     const handleChange = (e)=>{
//         const name = e.target.name;
//         const value = e.target.value;
//         setname(a=>({...a,[name]: value}))
//     }
//     function handlesubmit(){
//         alert(names.firstname+" "+names.lastname)
//     }
//     return(
//         <form onSubmit={handlesubmit}>
//             <input className='border' type="text" name='firstname' value={names.firstname} onChange={handleChange} />     
//             <input className='border' type="text" name='lastname' value={names.lastname} onChange={handleChange} />     
//             <p>values: {names.firstname} {names.lastname} </p>
//             <input type="Submit" />
//         </form>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <MyForm />
// )



// function Myform(){
//     const [inputs, setInputs] = useState({
//         firstname: "Ch ",
//         tomato : true,
//         banana : false,
//         onion : false,
//     });
//     const handleChange = (e)=>{
//         const name = e.target.name;
//         const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
//         setInputs(a=>({...a, [name]: value}))
//     }
//     const handlesubmit = (e)=>{
//         let filling  = '';
//         if(inputs.tomato) filling += 'tomato';
//         if(inputs.onion){
//             if(inputs.tomato) filling += ' and ';
//             filling += 'onion';
//         }
//         if(inputs.banana){
//             if(inputs.tomato) filling += " , ";
//             if(inputs.onion) filling += " and ";
//             filling += 'Banana';
//         }
//         if(filling === "") filling = " No Filling";
//         alert(` ${inputs.firstname} wants burger with ${filling}  `)
//     }

//     return(
//         <form onSubmit={handlesubmit}>
//             <label>
//                 My Name is:
//                 <input className='border' type="text" name="firstname" value={inputs.firstname} onChange={handleChange} />
//             </label>
//             <br />
//             <label>Tomato:
//                 <input type="checkbox" name='tomato' checked={inputs.tomato} onChange={handleChange} />
//             </label>
//             <label>Onion
//                 <input type="checkbox" name='onion' checked={inputs.onion}  onChange={handleChange} />
//             </label>
//             <label>
//                 Banana 
//                 <input type="checkbox" name="banana" checked={inputs.banana} onChange={handleChange} />
//             </label>
//             <br />
//             <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition duration-200">Submit</button>
//         </form>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <Myform />
// )





// function A(){
//     return(
//         <button class="px-4 py-2 bg-indigo-600 text-white rounded-md 
//                hover:bg-indigo-700 
//                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
//                active:bg-indigo-800 
//                disabled:opacity-50 disabled:cursor-not-allowed transition">
//   Interactive Button
// </button>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <A />
// )




// function MyForm(){
//     const [selectedfruit, Setselectedfruit] = useState("");
//     const handleChange = (e)=>{
//         Setselectedfruit(e.target.value)
//     }
//     const handlesubmit = (e)=>{
//         alert(`Your Fruit is: ${selectedfruit} `)
//     }
//     return (
//         <form onSubmit={handlesubmit}>
//         <label>
//             <input type="radio" name='fruit' value='apple' checked={selectedfruit==='apple'} onChange={handleChange} />
//             Apple
//         </label>
//         <br />
//         <label>
//             <input type="radio" name='fruit' value='banana' checked={selectedfruit==='banana'} onChange={handleChange} />
//             Banana
//         </label>
//         <br />
//         <label>
//             <input type="radio" name="fruit" value='cherry' checked={selectedfruit==='cherry'} onChange={handleChange} />
//             Cherry
//         </label>
//         <br />
//         <button className='bg-blue-600 text-white px-4 py-2'>Submit</button>
//         </form>        
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <MyForm />
// )



// function Modal({isopen, onclose, children}){
//     if(!isopen) return null;
//     return createPortal(
//         <div className='fixed inset-0 bg-black/50 flex items-center justify-center'>
//             <p>{children}</p>
//             <br />
//             <button onClick={onclose} className='bg-blue-600 text-white px-4 py-2'>Close</button>
//         </div>,      
//         document.body
//     )
// }
// function MyAPP(){
//     const [isopen, setisopen] = useState(false);
//     return(
//         <div>
//             <button onClick={()=>setisopen(true)}>Open Modal</button>
//             <Modal isopen={isopen} onclose={()=> setisopen(false)}>
//                 <h2 className='bg-white p-5 rounded-lg'>MOdel content MOdel content MOdel content MOdel content</h2>
//             </Modal>
//         </div>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <MyAPP />
// )



// function PortalButton({clickkro, children}){
// return createPortal(
//     <button onClick={clickkro} className='fixed bottom-5 right-5 p-2.5 bg-blue-600 text-white'>{children}</button>,
//     document.body
// )}
// function MyAPP(){
//     const [count1, setcount1] = useState(0);
//     const [count2, setCount2] = useState(0);
//     return(
//     <div onClick={()=>{setcount1(c=>c+1)}}>
//         <h2>Div Clicked: {count1} </h2>
//         <h2>Button Clicked: {count2} </h2>
//         <PortalButton clickkro={()=>{setCount2(c=>c+1)}}>
//             Button
//         </PortalButton>
//     </div>    
// )}
// createRoot(document.getElementById('root')).render(
//     <MyAPP />
// )



// import MyFruits from './fruits.jsx';
// function App(){
//     return(
//         <div>
//             <Suspense fallback={<div>Loading....</div>}>
//                 <MyFruits />
//             </Suspense>
//         </div>
//     )
// }
// createRoot(document.getElementById('root')).render(
//   <App />
// );



// import MyCars from './Cars.jsx';
// function App(){
//     return(
//         <div>
//             <Suspense fallback={<div>Loading.....</div>}>
//                 <MyCars />
//             </Suspense>
//         </div>
//     )
// }
// createRoot(document.getElementById('root')).render(
//   <App />
// );





// import MyCars from './Cars.jsx'; // ya simple ha is ma lazy load nahi chalta
// const MyCars = lazy(()=> import('./Cars.jsx'))
// function App(){
//     return(
//         <div>
//             <Suspense fallback={<div>Loading.....</div>}>
//                 <MyCars />
//             </Suspense>
//         </div>
//     )
// }
// createRoot(document.getElementById('root')).render(
//   <App />
// );





// import Header from './header.jsx';
// import Sidebar from './sidebar.jsx';
// import Content from './content.jsx';
// //  ----------------Website--------------------
// const Header = lazy(()=> import('./header.jsx'))
// const Content = lazy(()=> import('./content.jsx'))
// const Sidebar = lazy(()=> import("./sidebar.jsx"))
// function APP(){
//     return (
//         <div>
//             <Suspense fallback={<div className='bg-amber-300'>Loading....</div>}>
//                 <Header />
//                 <div className='flex'>
//                     <Sidebar />
//                     <Content />
//                 </div>
//             </Suspense>
//         </div>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <APP />
// )


// // import './mystylesheet.css';
// import styles from './my-style.module.css'

// const Car = ()=>{
//     return <h1 className={styles.bigred}>Hello car</h1>
// }

// // const Header = ()=>{
// //     const mystyle = {
// //         color: "White",
// //         backgroundColor: "DodgerBlue",
// //         padding: "10px",
// //         fontFamily: "sans-Serif",
// //     }
// //     return (
// //         <>
// //             <h1 style={{color:"red"}}>Hello Husnain</h1>
// //             <p style={{backgroundColor:"yellow"}}>ADDed style</p>
// //             <h1 style={mystyle}>Hello Style</h1>
// //         </>
// //     )
// // }
// createRoot(document.getElementById('root')).render(
// //   <Header />
//     <Car />
// );




// import styles from './Button.module.css'
// function App(){
//     return(
//         <div>
//             <button className={`${styles.mybutton} ${styles.primary}`}>Primary</button>
//             <button className={`${styles.mybutton} ${styles.secondary}`}>SEcondary</button>
//             <button className={styles.mybutton}>Button</button>
//         </div>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <App />
// )




// import styles from './buttoncompose.module.css'
// function App(){
//     return(
//         <div>
//             <button className={styles.primary}>Primary</button>
//             <button className={styles.secondary}>SEcondary</button>
//         </div>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <App />
// )





// import styles from './globalheader.module.css'
// function App(){
//     return(
//         <div>
//             <h1 className='myheader'>header</h1>
//         </div>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <App />
// )




// import styles from "./mystyles.module.css"
// function App(){
//     return(
//         <div>
//             <h1 className='myheader'>My Header</h1>
//             <p className={styles.myparagraph}>My paragraph</p>
//         </div>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <App />
// )




// import { styled } from 'styled-components';
// const MyHeader = styled.h1`
//     padding: 10px 20px;
//     background-color: #007bff;
//     color: white;
// `;
// function App(){
//     return(
//         <>
//             <MyHeader>Welcome!</MyHeader>
//         </>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <App />
// )




// const Button = styled.button`
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   background-color: ${props => props.btntype === 'primary' ? '#007bff' : 'yellow'};
//   color: white;
//   cursor: pointer;
// `;
// function App(){
//     return(
//         <div>
//             <Button btntype='primary'>Primary Button</Button>
//             <br />
//             <Button>SEcondary Button</Button>
//         </div>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <App />
// )



// const Button = styled.button`
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   color: white;
//   cursor: pointer;
// `;
// const PrimaryButton = styled(Button)`
//     background-color: #007bff;
// `;
// const SuccessButton = styled(Button)`
//     background-color: #28a745;
// `;
// function App(){
//     return(
//         <div>
//             <PrimaryButton>Primary</PrimaryButton>
//             <SuccessButton>Success</SuccessButton>
//         </div>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <App />
// )




// import { createGlobalStyle } from 'styled-components';
// const GlobalStyle = createGlobalStyle`
//   h1 {
//     color: white;
//     background-color: purple;
//     font-family: Arial, sans-serif;
//   }

//   .myparagraph {
//     font-family: courier, monospace;
//     color: blue;
//   }
// `;
// function App() {
//   return (
//     <>
//       <GlobalStyle />
//       <h1>Welcome!</h1>
//       <p className="myparagraph">This paragraph is styled with global styles.</p>
//     </>
//   );
// }
// createRoot(document.getElementById('root')).render(
//   <App />
// );

                   



































