import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) {
      return;
    }
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <div className="">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search your order here"
          className="w-[100%] rounded-xl border-2 bg-slate-200 px-2 py-2 text-xs outline-yellow-600 ring-offset-4 transition-all duration-300 sm:w-[100%] sm:text-[16px]"
        />
      </form>
    </div>
  );
}

export default SearchOrder;
