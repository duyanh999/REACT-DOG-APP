import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContexts";
import "./Cart.css"
const Cart = () => {
  const {myCart,total,setTotal,addToCart} = useContext(CartContext);
  const handleCheckOut = () =>{
    setTotal (0);
    addToCart ([{}]);
  }
    return (
        <>
        <section className="cart-container">
          <div className="cart-header">Đơn Hàng</div>
          <div className="cart-items">
            {myCart.slice(1).map((item)=>{
              return(
                <div className="cart-item">
                  <img src={item.imageUrl} className='cart-item-img'></img>
                  {item.breed} : {item.price}$
                </div>
              )
            })}
            <div className="cart-total">Tổng Tiền: {total}$</div>
          </div>
          <button className="cart-checkout" onClick={handleCheckOut} > Thanh Toan </button>
        </section>
        </>
      );
}
 
export default Cart;
