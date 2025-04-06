// import Card from "../components/Card";
  

//  const numbers =[1, 2, 3, 4]



 const HomePage =() =>{

  return <div>
  
    <Box text='1'/>
    <Box text='1'/>
    <Box text='1'/>
    <Box text='1'/>
    <Box text='1'/>

    </div>
 }
 
  
  // return <div style={{display: "flex", fontSize: 100}}>
  //   {
  //   numbers.map((number) => <p>{number}</p>)
  //   }

 

 export default (HomePage);

 const Box = (props) => {
  console.log('props:', props);
  
  return <div style={{marginLeft: 30, marginTop: 30}}>{props.text}</div>
 }

//  const values = ['text', 'text2','text3']
 // values.map((value,index)=> {
    //   return <Box key ={index} text={value}/>
      
    // })
 //reusable

//  const seconds = 1220;
//  let minutes = Math.floor(seconds/60);
//  let remainingSeconds = seconds % 60;
  
//  console.log(`${minutes} min and ${remainingSeconds} seconds`);
 

// const numbers = [2,3,5,8,]

// let smallest = numbers.reduce((min, curr) => Math.min(min,curr) ) 

// console.log(smallest);

// let smallest = numbers[0];
// for(let i = 0; i < numbers.length; i++) {
//    if(numbers[i] < smallest){
//       smallest = numbers[i]
//    }
// }

