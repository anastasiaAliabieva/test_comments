export const addComment = (text, item_id) => {
    const id = '_' + Math.random().toString(36).substr(2, 9);
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push({text, id, item_id});
    localStorage.setItem('comments', JSON.stringify(comments));
    return {
        type: 'ADD_COMMENT',
        text,
        item_id,
        id
    }
};
export const deleteComments = () => {
    return {
        type: 'CLEAR_COMMENTS'
    }
};

export const getComments = (commentsArray, id) => {
    return commentsArray.filter((comment) => comment.item_id === id)
}
