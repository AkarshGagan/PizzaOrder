import { Link, useNavigate } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from './Username';
import { GiFullPizza } from 'react-icons/gi';
import { useSelector } from 'react-redux';

function Headers() {
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();
  return (
    <div className="flex items-center border-b-2 border-stone-400 bg-yellow-500 p-4 text-xl font-semibold uppercase sm:py-6">
      <div className="flex-1 flex-row">
        <div className="flex items-center">
          <Link
            to="/"
            className="hidden pr-1 font-pizza tracking-normal sm:tracking-[5px] lg:block"
          >
            PizzaMart
          </Link>
          <span>
            <Link to="/">
              <GiFullPizza size={35} />
            </Link>
          </span>
        </div>
      </div>
      <div className="hidden flex-1 px-2 sm:px-0 md:block">
        <SearchOrder />
      </div>

      {username.length > 0 && (
        <button
          className="m-2 rounded-xl border-2 p-2 font-pizza text-sm"
          onClick={() => navigate('/order/allOrders')}
        >
          Order History
        </button>
      )}
      <div className="flex-1 text-end">
        <Username />
      </div>
    </div>
  );
}

export default Headers;
