const Button = (props) => {
  return (
    <div>
      <button
        style={{
          justifyItems: "center",
          backgroundColor: props.Backgroundcolor,
          color: props.color,
          //   width: "364px",
          width: props.width,
          height: "48px",
          borderRadius: "4px",
          border: "none",
          marginLeft: props.marginLeft,
        }}
      >
        {props.text}
      </button>
    </div>
  );
};

//

export default Button;
