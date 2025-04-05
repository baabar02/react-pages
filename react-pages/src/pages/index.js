import Card from "../components/Card";
 
// const cards = [1,2,3]
// // return <div>{cards}</div>
 
const values = [1, "text", 3, 4, 5, 5];
 
const HomePage = () => {
  return (
    <div>
    <Box text="baabar" />
     <Box text="2" />
     <Box text="3" />
     <Box text="4" />
     <Box text="4" />
     <Box text="4" />
      <Card/>
      <Card/>

   
 
     
 
     
      {values.map((value, index) => {
        return <Box key={index} text={value} />;
      })}
 
 
    </div>
  );
};
 
export default HomePage;
 
const Box = (props) => {
  return <div>{props.text}</div>;
};
 
//-----------------
 
 
