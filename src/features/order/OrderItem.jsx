import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  console.log(ingredients, 'ing');
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic">
        {isLoadingIngredients
          ? 'loading'
          : ingredients?.ingredients?.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
