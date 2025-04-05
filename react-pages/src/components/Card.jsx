
import style from "../styles/Home.module.css";
 
const Card = () => {
  return (
    <div
      style={{
        padding: 40,
        width: "fit-content",
      }}
    >
      <img
        src="https://flowbite.com/docs/images/products/apple-watch.png"
        width={300}
      />
      <h2 style={{ width: 300 }}>
        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
      </h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ marginBottom: 20, marginTop: 20 }}>$599</p>
 
        <button className={style.button}>Add to card</button>
      </div>
    </div>
  );
};
 
export default Card;
 
// const MyDiv = () => {
//   return <div>My Div</div>;
// };
 