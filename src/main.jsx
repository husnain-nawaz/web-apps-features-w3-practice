import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )





function Model({isopen,onclose,children}){
    if(!isopen){
        return null;
    }
    else{
    return(
        <div>
            {children}
            <button onClick={onclose}>close</button>
        </div>
    )}
}
function MyApp(){
    const [isopen, setisopen] = useState(false);
    return(
        <div>
            <button onClick={()=>setisopen(true)}>OPEN</button>
            <Model isopen={isopen} onclose={()=>setisopen(false)}>
                <p>model content</p>
            </Model>
        </div>
    )
}

createRoot(document.getElementById('root')).render(
  <MyApp />
)














