import { FcDeleteDatabase } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { remove } from '../redux/slices/CartSlice';

const CardItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Remove SuessFully")
  }
  return (
    <div>
      <div className='flex w-5/5 gap-20'>
        <div className="h-[200px] w-2/5 ">
          <img src={item.image} className="h-full w-full " />
        </div>
        <div className='w-3/5 mt-2'>
          <h1 className=' font-bold w-full mt-2 text-[19px]'>{item.title}</h1>
          <p className="text-gray-500 mt-3 font-normal text-[12px] text-left ">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</p>
          <div className='flex justify-between mt-6'>
            <p className="text-green-600 font-semibold ">${item.price}</p>
            <div className='bg-red-300 w-8 h-8 mr-10 rounded-full' onClick={removeFromCart}>
              <div className='flex m-auto mt-2 justify-center items-center cursor-pointer'><FcDeleteDatabase /></div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-100px mt-10 mb-10 border-2 border-blue-900 w-full'></div>
    </div>
  );
}

export default CardItem;
