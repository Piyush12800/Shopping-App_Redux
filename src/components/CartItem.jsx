
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="flex justfy-center items-center gap-6 py-4 border-b  border-gray-500 w-full">

        <div >
          <img src={item.image} className="h-[180px]"/>
        </div>
        <div className="flex flex-col w-80">
          <h1 className="font-bold ">{item.title}</h1>
          <h1>{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          <div className="flex justify-between gap-12 items-center w-full mt-5">
          <div>
          <p className="text-green-600 font-semibold">${item.price}</p>
        </div>
            <div className="cursor-pointer bg-red-400 rounded-xl w-9 h-9 flex justify-center items-center"
            onClick={removeFromCart}>
              <FcDeleteDatabase className="w-5 text-3xl"/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
