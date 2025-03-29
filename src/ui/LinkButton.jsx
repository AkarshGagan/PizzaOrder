import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = 'text-sm text-blue-500  hover:text-blue-900';
  console.log(to);
  if (to === '-1') {
    console.log(to === -1);
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  } else {
    return (
      <div>
        <Link to={to} className={className}>
          {children}
        </Link>
      </div>
    );
  }
}

export default LinkButton;
