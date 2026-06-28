// function fetchFruitdata(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(['Apple', 'Banana', 'Cherry'])
//         },2000)
//     })
// }
// let fruistResource = {
//     data : null,
//     read(){
//         if(this.data !== null) return this.data;
//         throw fetchFruitdata().then(result=>this.data = result)
//     }
// }
// function MyFruits(){
//     const fruits = fruistResource.read();
//     return(
//         <>
//             {fruits.map((fruit,index)=>(
//                 <li key={index}>{fruit}</li>
//             ))}
//         </>
//     )

// }
// export default MyFruits;

















