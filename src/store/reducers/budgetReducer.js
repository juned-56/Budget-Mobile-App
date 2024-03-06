// budgetReducer.js\
import {ADD_BUDGET_ENTRY} from '../actions/budgetActions';
 const initialState = {
  name: 'budget',
    budgetEntries: [],
  };
  
  const budgetReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_BUDGET_ENTRY:
        return {
          ...state,
          budgetEntries: [...state.budgetEntries, action.payload],
        };
      default:
        return state;
    }
  };
export const items =(state) => state.budget.budgetEntries;    //budgetReducer.budgetEntries;
export default budgetReducer;