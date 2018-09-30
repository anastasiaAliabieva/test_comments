const initialState = JSON.parse(localStorage.getItem('comments')) || []

const comments = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    item_id: action.item_id,
                    id: action.id,
                }
            ]
        default:
            return state
    }
}

export default comments