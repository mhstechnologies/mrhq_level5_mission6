import "./OrderHistoryHero.css";

function OrderHistoryHero() {
  return (
  <>
    <img className="orderhistoryhero_image" src="./mandog.png" alt="order_history_image" />
    <div className="orderhistoryhero_container">
      <p className="orderhistoryhero_title">Your Order History</p>
      <hr className="orderhistoryhero_line" />
      <div className="orderhistoryhero_orders">
        <div className="orderhistoryhero_ordersname">
          <p className="orderhistoryhero_column">Item Name</p>
          <p className="orderhistoryhero_row">Royal Canin Veterinary <br/>Diet Urinary Dog Food</p>
          <p className="orderhistoryhero_row">Yours Drolly Shear <br/>Magic Puppy Slicker</p>
        </div>
        <div className="orderhistoryhero_ordersname">
          <p className="orderhistoryhero_column"></p>
          <img className="orderhistoryhero_imageitem" src="./royalcanindogfood.png" alt="item_1" />
          <img className="orderhistoryhero_imageitem" src="./yoursdogfood.png" alt="item_2" />
        </div>
        <div className="orderhistoryhero_ordersname">
          <p className="orderhistoryhero_column">Purchased</p>
          <p className="orderhistoryhero_rowadj">Instore</p>
          <p className="orderhistoryhero_rowadj">Instore</p>
        </div>
        <div className="orderhistoryhero_ordersname">
          <p className="orderhistoryhero_column">Date</p>
          <p className="orderhistoryhero_rowadj">21/05/2022</p>
          <p className="orderhistoryhero_rowadj">01/08/2021</p>
        </div>
        <div className="orderhistoryhero_ordersname">
          <p className="orderhistoryhero_column">Price</p>
          <p className="orderhistoryhero_rowadj">$34.95</p>
          <p className="orderhistoryhero_rowadj">$17.95</p>
        </div>
        <div className="orderhistoryhero_ordersname">
          <p className="orderhistoryhero_column">Reorder</p>
          <p className="orderhistoryhero_outofstock">Out Of Stock</p>
          <p className="orderhistoryhero_rowadj">In Stock</p>
        </div>
        <div className="orderhistoryhero_ordersname">
          <p className="orderhistoryhero_column"></p>
          <button className="orderhistoryhero_notifyme">Notify Me</button>
          <button className="orderhistoryhero_addtocart">Add to Cart</button>
        </div>
      </div>
      <p className="orderhistoryhero_title">Your Dog may also like</p>
      <hr className="orderhistoryhero_line" />
      <div className="orderhistoryhero_likelyhooditems">
        <div className="orderhistoryhero_productscontainer">
          <img className="orderhistoryhero_likelyhoodimages" src="./urinarycare.png" alt="product_1" />
          <button className="orderhistoryhero_addtocart">Add to Cart</button>
        </div>
        <div className="orderhistoryhero_productscontainer">
          <img className="orderhistoryhero_likelyhoodimages" src="./hillsdiet.png" alt="product_2" />
          <button className="orderhistoryhero_addtocart">Add to Cart</button>
        </div>
        <div className="orderhistoryhero_productscontainer">
          <img className="orderhistoryhero_likelyhoodimages" src="./urinarycare.png" alt="product_3" />
          <button className="orderhistoryhero_addtocart">Add to Cart</button>
        </div>
      </div>
    </div>
  </>
  );
};

export default OrderHistoryHero;