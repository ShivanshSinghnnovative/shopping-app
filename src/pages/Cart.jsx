import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CardItem"
const Cart = () => {
   const { cart } = useSelector((state) => state);
   console.log(cart);
   const [totalAmount, setTotalAmount] = useState(0);

   useEffect( () => {
      setTotalAmount(cart.reduce( (acc, curr) => acc+curr.price,0))
   },[cart])
    return (
       <div>
         {
            cart.length>0 ?
            (
               <div className="flex mx-auto mt-10 text-left "> 
                <div className="w-2/5 m-auto ">
                {
                  cart.map((item,index) =>{
                     return <CartItem key={ item.id } item={item} itemIndex={index}/>
                  } )
                }
                </div>

                <div className="w-2/5">
                 <div className="text-green-600 font-bold uppercase text-[14px]">Your Cart</div>
                 <div className="text-green-600 font-bold uppercase text-[23px]">Summary</div>
                 <p>
                  <span> Total Items: {cart.length}</span>
                 </p>
                <div>
                  <div>Total Amount : <span className="font-extrabold mt-3"> ${totalAmount}</span> </div>
                  <button className="text-white font-bold uppercase text-[14px] bg-green-600 w-3/5 p-2 mt-5">
                     CheckOut Now
                  </button>
                </div>
                </div>
               </div>
            ) :
            ( <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-gray-700 font-bold text-[20px] mb-4"> Cart is Empty </h1>
                <Link to={"/"}>
                  <button className="text-white font-bold uppercase text-[14px] bg-green-600 p-2">
                     Shop Now 
                  </button>
                </Link>
               </div>
            )
         }
       </div>
    );
  }
  
  export default Cart;
  