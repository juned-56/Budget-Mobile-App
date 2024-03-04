// budgetReducer.js
 const initialState = {
    budgetEntries: [],
  };
  
  const budgetReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BUDGET_ENTRY':
        return {
          ...state,
          budgetEntries: [...state.budgetEntries, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default budgetReducer;


// import AsyncStorage from '@react-native-async-storage/async-storage';

// const initialState = {
//   budgetEntries: [],
// };

// const budgetReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_BUDGET_ENTRY':
//       return {
//         ...state,
//         budgetEntries: [...state.budgetEntries, action.payload],
//       };
//     case 'LOAD_BUDGET_ENTRIES':
//       return {
//         ...state,
//         budgetEntries: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default budgetReducer;  