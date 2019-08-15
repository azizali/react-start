import { combineReducers } from 'redux';
import { reducer as user } from '../Home';
import { reducer as products } from '../Products';

export default combineReducers({
  user,
  products,
});


// {
//   user: {
//     UserLoggedIn: true,
//     name: 'Starbuck
//   }
// }
