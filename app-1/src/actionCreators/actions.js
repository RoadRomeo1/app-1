import * as actions from '../actionType/actionTypes';


export const Add_Bug = description => ({
        type: actions.ADD_BUG,
        payload: {
        description
        }  
      });


export const Delete_Bug = id => ({
     type: actions.DELETE_BUG,
     payload: {
         id
        }
      });

export const Resolve_Bug = id => ({
    type: actions.RESOLVE_BUG,
    payload: {
        id
    }
});
