import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="pb-5 text-xs text-gray-500 sm:text-xl">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-4 px-3 py-1 text-[16px] outline-none sm:px-4 sm:py-2"
      />

      <div
        className={`${username ? 'visible opacity-100' : 'invisible opacity-0'} transition-all duration-200`}
      >
        <Button type="primary">Start ordering</Button>
      </div>
    </form>
  );
}

export default CreateUser;
