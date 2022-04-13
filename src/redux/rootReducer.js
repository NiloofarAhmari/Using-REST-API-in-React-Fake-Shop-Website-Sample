import * as actionTypes from './action-types'

const initState = {
  reduxTest: 'Redux Test',
  message: 'Hello React Redux',
  products: [],
  number: [1]
};

export const rootReducer = (state = initState, action) => {
  // console.log('IN Reducer State = ', state);
  // console.log('IN Reducer Action = ', action);

  switch (action.type) {
    case actionTypes.CHANGE_TEST:
      return {
        ...state,
        reduxTest: 'Redux Test Changed'
      }
    case actionTypes.CHANGE_MESSAGE:
      return {
        ...state,
        message: action.payload
      }
    case actionTypes.USER_ADD_TO_LIST:
      const newProducts = [...state.products]
      // const existProduct = newProducts.find(action.payload ==action.payload);
      // console.log(existProduct);
      // if (!existProduct) 
      newProducts.push(action.payload)

      return {
        ...state,
        products: newProducts
      }
    case actionTypes.NUMBER_PRODUCT:



      return {
        ...state,
        number:action.payload
      }
    default:
      return state;
  }
};
