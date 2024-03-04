const ArrowButton = ({ direction, onClick }) => (
  <button className={`arrow-button ${direction}`} onClick={onClick}>
    {direction === "left" ? "<" : ">"}
  </button>
);
export default ArrowButton;