// budgetActions.js
export const addBudgetEntry = (entry) => ({
    type: 'ADD_BUDGET_ENTRY',
    payload: entry,
  });
  
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const addBudgetEntry = (entry) => {
//   return async (dispatch) => {
//     // Save entry to AsyncStorage
//     try {
//       const existingEntries = await AsyncStorage.getItem('budgetEntries');
//       let entries = existingEntries ? JSON.parse(existingEntries) : [];
//       entries.push(entry);
//       await AsyncStorage.setItem('budgetEntries', JSON.stringify(entries));
//     } catch (error) {
//       console.log('Error saving entry:', error);
//     }

//     // Dispatch action to update Redux store
//     dispatch({
//       type: 'ADD_BUDGET_ENTRY',
//       payload: entry,
//     });
//   };
// };
  