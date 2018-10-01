export const addItem = (name) => {
    const id = '_' + Math.random().toString(36).substr(2, 9);
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.push({name, id});
    localStorage.setItem('items', JSON.stringify(items));
    return {
        type: 'ADD_ITEM',
        name,
        id
    }
};

export const deleteItem = (id) => {
    let items = JSON.parse(localStorage.getItem('items'));
    items = items.filter(item => item.id !== id )
    localStorage.setItem('items', JSON.stringify(items));
    deleteOldComments(id);

    return {
        type: 'DELETE_ITEM',
        id
    }
};

export const setCurrentItem = (id) => {
    localStorage.setItem('currentItemId', id)
    return {
        type: 'SET_CURRENT_ITEM',
        id
    }
};

function deleteOldComments(id) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments = comments.filter((comment) => comment.item_id !== id);
    localStorage.setItem('comments', JSON.stringify(comments));

}

export const getCountOfComments = (id) => {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments = comments.filter((comment) => comment.item_id === id);
    return comments.length;
}