import "../Styles/Store.css";

const Store = () => {
  return (
    <div className="main-store">
      <div className="store-gallery">
        <input placeholder="SEARCH..."></input>
      </div>

      <div className="sidebar">
        <h1>CART</h1>
        <p className="total">Total: $0</p>

        <div className="buttons">
          <button className="empty-cart">Empty Cart</button>
          <button className="check-out">Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default Store;
