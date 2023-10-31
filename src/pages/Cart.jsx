import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="flex flex-col justify-between items-center w-full max-w-full h-[100vh] mt-4 py-2">
  {
    cart.length > 0  ? 
    (<div className="flex gap-x-[200px]">


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div>

        <div className="flex flex-col items-start h-[70vh]">
          <div className="text-green-600 uppercase font-bold text-xl ">Your Cart</div>
          <div className="text-green-600 uppercase font-bold text-4xl">Summary</div>
          <p>
            <span className="font-bold">Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p>Total Amount: ${totalAmount}</p>
          <div className="flex justify-center w-[300px] font-bold items-center leading-3 text-white bg-green-700 rounded-md w-[150px]  h-[40px] hover:bg-white hover:text-black border border-black">
          <button  >
            CheckOut Now
          </button>
          </div>
         
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col items-center justify-center gap-y-2 h-[80vh]">
      <h1>Cart Empty</h1>
      <Link to={"/"}>
      <div className="flex font-bold w-[250px] justify-center items-center text-white  bg-green-700 rounded-md w-[150px]  h-[40px] hover:bg-white hover:text-black border border-black">

        <button >
          Shop Now
        </button>
      </div>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
