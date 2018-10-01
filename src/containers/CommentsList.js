import React, {Component} from 'react';
import Comment from "../components/Comment";
import {addComment, getComments} from '../actions/CommentActions'
import { connect } from 'react-redux'

class CommentsList extends Component {

    state = {
        textareaValue: ''
    }

    constructor() {
        super();
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleAddComment = this.handleAddComment.bind(this);
        this.keydownHandler = this.keydownHandler.bind(this);
        document.addEventListener('keydown', this.keydownHandler);
    }


    componentWillUnmount(){
        document.removeEventListener('keydown', this.keydownHandler);
    }

    keydownHandler(e){
        if(e.keyCode===13 && e.ctrlKey) { this.handleAddComment(); }
    }

    handleTextArea(data) {
        this.setState({textareaValue: data.target.value})
    }

    handleAddComment() {
        const {textareaValue} = this.state;
        const {currentItem} = this.props;
        this.props.addComment(textareaValue, currentItem);
        this.setState({textareaValue: ''})
    }

    render() {
        const {textareaValue} = this.state;
        const {comments, currentItem} = this.props;
        return (
            <div className='list'>
                <div className='title'>Comments #{currentItem}</div>
                {comments.map((comment) => {
                    return <Comment key={comment.id} data={comment} />
                })}

                <form className='add-comment'>
                    <div className='color-block color-block-default'/>
                    <textarea value={textareaValue} onChange={this.handleTextArea}/>
                </form>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        comments: getComments(state.comments, state.items.currentItem),
        currentItem: state.items.currentItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (text, item_id) => { dispatch(addComment(text, item_id)) },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsList);