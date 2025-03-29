import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block rounded-full bg-yellow-400  text-xs font-bold uppercase tracking-wide text-stone-600 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ';

  const styles = {
    primary: base + ' px-3 py-3 md:px-4 md:py-3',
    small: base + ' py-2 md:px-5 md:py-2.5 px-4',
    round: base + ' py-2 mx-1 px-3',
    secondary:
      'inline-block rounded-full border-2 border-stone-600 hover:bg-stone-200  px-2 py-2 md:px-4 md:py-[10px] md:py-3 text-xs font-bold uppercase tracking-wide text-stone-600 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-stone-300 active:bg-stone-800 active:text-stone-100 focus:ring-offset-2 disabled:cursor-not-allowed ',
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
