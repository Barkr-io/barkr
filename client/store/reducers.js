export const formInputChange = (state = '', action) => {
    switch(action.type){
        case 'ON_CHANGE':
            return action.value
        case 'ON_CLICK':
            return action.value
        case 'ON_CLEAR':
            return ''
        default:
            return state
    }
}

export const listActions = (state= [], action)=>{
    switch(action.type){
        case 'ADD_TO_LIST':
            return [...state, action.item]
        default:
            return state
    }
}