import { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartContexts";
import "./Dogs.css"

const DogsCard = (props) => {
    const { id, name, breed, description, price, imageUrl } = props;
    const {addToCart,setTotal} = useContext(CartContext);
    const [isAdded,setAdded] = useState(false);
    const handlecick =()=> {
        setAdded(true);
        const newItems = {
            price: price,
            imageUrl: imageUrl,
            breed: breed,
        };
        addToCart((item) => [...item,newItems] );
        setTotal((total)=> (total += Number(price)));
    };
    return ( 
        <>
        <section className="dogs">
            <div className="dogs-info">
                <p> Tên: {name} </p>
                <p> Giống: {breed} </p>
            </div>
            <div className="dogs-img-container">
            <img className="dog-img" src={imageUrl} alt={`picture of: ${name}`  }/>
            </div>
            <div className="dogs-desc">  {description} </div>
            <div className="dogs-price"> {price} </div>
            {isAdded ? (
                 <button className="dogs-btn-disabled">Đã thêm</button>
            ) : (
                <button className="dogs-btn" onClick={handlecick}> Thêm vào giỏ hàng</button>
            )}
        </section>
        </>
     );
}
 
export default DogsCard
