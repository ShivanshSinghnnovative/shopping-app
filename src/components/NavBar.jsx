import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
   const { cart } = useSelector((state) => state)
   return (
      <div >
         <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
            <div className='flex'>
               <NavLink to="/">
                 
                  <img className='w-13 h-10 -mt-3' src='./pngegg.png'></img>
                
               </NavLink>
               <p className='text-white text-xl font-bold ml-3 uppercase'>Shopping app</p>
            </div>
            <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6 '>
               <NavLink to="/">
                  Home
               </NavLink>
               <NavLink to="/cart">
                  <div className='relative hover:text-gray-300'>
                     <FaShoppingCart className='text-2xl'/>
                     {
                        cart.length>0 &&
                     <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
                     }
                  </div>
               </NavLink>
            </div>
         </nav>
      </div>
   );
}

export default NavBar;
