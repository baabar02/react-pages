// import Card, { MyDiv } from "../components/Card";

// const cards = [1,2,3]
// return <div>{cards}</div>

const values = [1, "text", 3, 4];

const HomePage = () => {
  return (
    <div>
      {/* <Card /> */}
      <Box text="baabar" />
      <Box text="2" />
      <Box text="3" />

      <Box text="4" />
      {/* {values.map((value, index) => {
        return <Box key={index} text={value} />;
      })} */}

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
