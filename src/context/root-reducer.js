import * as actionTypes from './action-types'

export const rootReducer = (state, action) => {
  console.log(action)
  console.log(state);
  switch (action.type) {
  

    case actionTypes.USER_ADD_TO_LIST:
      const newProducts = [...state.products]
      newProducts.push(action.payload)
      return {
        ...state,
        products: newProducts,
      }
    default:
      return state
  }
}