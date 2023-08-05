import * as actions from "../actionType/actionTypes";
let counter = 0;


export default function reducer(state =[], aciton){

    switch (aciton.type) {
        case actions.ADD_BUG:
            return [
                ...state,
                {
                    id: ++counter,
                    description: aciton.payload.description,
                    isResolved: false
                }
            ]
        case actions.DELETE_BUG:
            return state.filter(bug => bug.id !== aciton.payload.id);             
    
        case actions.RESOLVE_BUG:
            return state.map(bug => bug.id === aciton.payload.id ? {
                ...bug,
                isResolved : true
            } : bug);
            
        default:
            return state;
    }
}