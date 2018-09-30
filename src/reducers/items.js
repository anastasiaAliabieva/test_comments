let initialState = {
       itemsList: JSON.parse(localStorage.getItem('items')) || [],
       currentItem: localStorage.getItem('currentItemId')
}

const items = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return Object.assign({}, state,
                {itemsList: [
                    ...state.itemsList,  {
                        id: action.id,
                        name: action.name,
                    }
                ]})
        case 'DELETE_ITEM':
            return  Object.assign({}, state,
                {itemsList: state.itemsList.filter(item => item.id !== action.id )})
        case 'SET_CURRENT_ITEM':
            return Object.assign({}, state, {
                currentItem: action.id
            })
        default:
            return state
    }
}

export default items