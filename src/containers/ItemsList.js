import React, {Component} from 'react';
import Item from "../components/Item";
import {setCurrentItem, addItem, deleteItem, getCountOfComments} from '../actions/ItemActions'
import {deleteComments} from '../actions/CommentActions'
import { connect } from 'react-redux'

class ItemsList extends Component {
    state = {
        inputValue: ''
    }

    constructor () {
        super();
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleInput(value) {
        this.setState({inputValue: value.target.value})
    }

    handleAddItem() {
        this.props.addItem(this.state.inputValue)
        this.setState({inputValue: ''})

    }

    handleDeleteItem(id) {
        this.props.deleteItem(id);
        const {currentItem, setItem, items, deleteComments} = this.props;

        if(id === currentItem) {
            if(items.length === 1) {
                localStorage.clear();
                deleteComments();
                setItem('');
                return
            }
            const index = items[0].id === id ? 1 : 0
            setItem(items[index].id)

        }
    }

    render() {
        const {inputValue} = this.state;
        const {items, setItem, currentItem} = this.props;

        return (
            <div className='list'>
                <div className='title'>Items</div>
                <div className='add-item'>
                    <input value={inputValue} onChange={this.handleInput}/>
                    <button onClick={this.handleAddItem} className='btn-add'>Add new</button>
                </div>
                {items.map((item) => {
                    const countOfComments = getCountOfComments(item.id);
                    return <Item
                        key={item.id}
                        setCurrentItem={setItem}
                        countComments={countOfComments}
                        data={item}
                        deleteItem={this.handleDeleteItem}
                        isCurrent={item.id === currentItem} />
                })}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items.itemsList,
        comments: state.comments,
        currentItem: state.items.currentItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (id) => { dispatch(addItem(id)) },
        setItem: (id) => { dispatch(setCurrentItem(id)) },
        deleteItem: (id) => { dispatch(deleteItem(id)) },
        deleteComments: () => { dispatch(deleteComments()) },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsList)

