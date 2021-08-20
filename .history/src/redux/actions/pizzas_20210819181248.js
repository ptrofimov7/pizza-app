import axios from 'axios';
export const fetchPizzas = () => {
  onst dispatch = useDispatch();
  axios.get('http://localhost:3001/pizzas').then(({ data }) => {
    // console.log('БЫЛ ВЫЗОВ ПОЛУЧЕНИЯ ПИЦЦ');
    setPizzas(data);
  });
};
export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
