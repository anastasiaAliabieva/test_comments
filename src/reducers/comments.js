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
                }
            ]
        case 'CLEAR_COMMENTS':
            return []
        default:
            return state
    }
}

export default comments