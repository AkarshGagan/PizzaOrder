import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { totalCartPrice, totalQuantity } from './cartsSlice';

function CartOverview() {
  const totalQuant = useSelector(totalQuantity);
  console.log(totalQuant);
  const totalCartAmount = useSelector(totalCartPrice);

  if (!totalQuant) {
    return null;
  }

  return (
    <div className="flex justify-between bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-5 sm:py-5 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>{totalQuant} pizzas</span>
        <span>${totalCartAmount}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
