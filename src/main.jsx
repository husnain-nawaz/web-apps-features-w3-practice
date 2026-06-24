import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createPortal } from 'react-dom';

import './index.css'
import _App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <_App />
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












