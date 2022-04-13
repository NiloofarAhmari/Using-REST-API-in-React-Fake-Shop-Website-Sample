import * as actionTypes from './action-types';

export const userAddToListAction = (product)=>{
  return {type: actionTypes.USER_ADD_TO_LIST, payload: product}
}
