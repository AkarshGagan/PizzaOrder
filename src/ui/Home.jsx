import { useDispatch, useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';
import { updateName } from '../features/user/userSlice';

function Home() {
  const dispatch = useDispatch();

  function handleClearName() {
    dispatch(updateName(''));
  }
  const username = useSelector((state) => state.user.username);
  return (
    <div className="flex h-[100%] items-center justify-center">
      <div className="mb-10 mt-10 text-center">
        <h1 className="mb-8 text-center text-xl font-bold sm:text-3xl">
          The best pizza.
          <br />
          <span className="px-2 text-xl text-yellow-600 sm:text-3xl">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        <div className="text-center">
          {username === '' ? (
            <CreateUser />
          ) : (
            <div className="mx-10 flex-col">
              <div className="my-4">
                <Button to="/menu" type="primary">
                  Continue ordering, {username}
                </Button>
              </div>
              <Button type="primary" onClick={handleClearName}>
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
