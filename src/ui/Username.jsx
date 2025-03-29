import React from 'react';
import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((state) => state.user.username);
  if (!username) {
    return null;
  }

  return (
    <div className="font-semibold">
      <h2 className="text-[16px] sm:text-xl">{username}</h2>
    </div>
  );
}

export default Username;
