import DogsCard from "./DogsCard";
import "./Dogs.css";
import { Link } from "react-router-dom";
const DogsPage = (props) => {
    const {allDogs} = props;
    return ( 
        <>
        <section className="dogs-container">
            {allDogs.map((dog) => {
                return(
                       <div key={dog.id}>
                          <DogsCard 
                          id={dog.id} 
                          name={dog.name} 
                          breed={dog.breed} 
                          description={dog.description} 
                          price={dog.price}
                          imageUrl={dog.imageUrl}  
                          />
                         </div>
                );
            })}
            <div className="botton-cart">
                <button className="dogs-btn-disabled"><Link to ="/cart"> Giỏ hàng </Link></button>
            </div>
        </section>
        </>
     );
};
 
export default DogsPage;