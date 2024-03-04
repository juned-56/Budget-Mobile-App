// store.js
import { createStore, combineReducers } from 'redux';
import budgetReducer from './reducers/budgetReducer';

const rootReducer = combineReducers({
  budgetReducer,
});

const store = createStore(rootReducer);

export default store;


// import { createStore, combineReducers } from 'redux';
// import budgetReducer from './reducers/budgetReducer';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const rootReducer = combineReducers({
//   budget: budgetReducer,
// });

// // Load data from AsyncStorage on app start
// const loadPersistedData = async () => {
//   try {
//     const data = await AsyncStorage.getItem('budgetEntries');
//     return data ? JSON.parse(data) : [];
//   } catch (error) {
//     console.log('Error loading persisted data:', error);
//     return [];
//   }
// };

// // // Initialize store with persisted data
// const store = createStore(rootReducer);
// loadPersistedData().then((data) => {
//   store.dispatch({ type: 'LOAD_BUDGET_ENTRIES', payload: data });
// });

// export default store;



// src/store/store.js
// import { combineReducers, applyMiddleware } from 'redux';
// import { legacy_createStore as createStore} from 'redux'
// import thunk from 'redux-thunk'; // Import redux-thunk
// import budgetReducer from './reducers/budgetReducer';

// // Combine reducers
// const rootReducer = combineReducers({
//   budget: budgetReducer,
// });

// // Create the Redux store with middleware
// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;
