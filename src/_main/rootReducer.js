import { combineReducers } from 'redux';
import { reducer as user } from '../Home';
import { reducer as products } from '../Products';
import { reducer as coins } from '../CyptoPrice';

export default combineReducers({
  user,
  products,
  coins,
});


// {
//   user: {
//     UserLoggedIn: true,
//     name: 'Starbuck
//   }
// }
