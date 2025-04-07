// import Card, { MyDiv } from "../components/Card";

import Input from "@/components/Input";
import Button from "@/components/Button";

// import { getDisplayName } from "next/dist/shared/lib/utils";

// // const cards = [1,2,3]
// // return <div>{cards}</div>

// const values = [1, "text", 3, 4];

// const HomePage = () => {
//   return (
//     <div>
//       <Card />
//       <Box text="baabar" />
//       <Box text="2" />
//       <Box text="3" />
//       <Box text="4" />

//       {values.map((value, index) => {
//         return <Box key={index} text={value} />;
//       })}
//     </div>
//   );
// };

// export default HomePage;

// const Box = (props) => {
//   return <div>{props.text}</div>;
// };

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          alignContent: "center",
          width: "586px",
          height: "496px",
        }}
      >
        <h1 style={{ color: "#1877f2" }}>facebook</h1>
        <h2>
          Connect with friends and the
          <br /> world around you on Facebook
        </h2>
      </div>
      <div
        style={{
          height: 396,
          width: 396,
          border: "0.5px solid grey",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <Input border="0.5px solid grey" placeholder="Email or phone number" />
        <Input border="0.5px solid grey" placeholder="Password " />

        <Button
          text="Log In"
          Backgroundcolor="#1877f2"
          color="white"
          width="364px"
        />
        <Button
          text="Forget password"
          backgroundColor="white"
          color="#1877f2"
          width="364px"
        />
        <div style={{ borderTop: "0.5px solid grey", width: 364 }}></div>
        <Button
          text="Create new account"
          Backgroundcolor="#42b72a"
          color="white"
          width="194px"
          // marginLeft="20px"
        />
      </div>
    </div>
  );
}
