import React, {Component} from 'react';
import Item from "../components/Item";
import {setCurrentItem, addItem, deleteItem} from '../actions/ItemActions'
import { connect } from 'react-redux'

class ItemsList extends Component {
    state = {
        inputValue: ''
    }

    constructor () {
        super();
        this.handleAddInput = this.handleAddInput.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDeleteInput = this.handleDeleteInput.bind(this);
    }

    handleInput(value) {
        this.setState({inputValue: value.target.value})
    }

    handleAddInput(name) {
        this.props.addItem(this.state.inputValue)
        this.setState({inputValue: ''})

    }

    handleDeleteInput(id) {
        this.props.deleteItem(id)
    }

    render() {
        const {inputValue} = this.state;
        const {items, setItem, currentItem} = this.props;
        return (
            <div className='list'>
                <div className='title'>Items</div>
                <div className='add-item'>
                    <input value={inputValue} onInput={this.handleInput}/>
                    <button onClick={this.handleAddInput} className='btn-add'>Add new</button>
                </div>
                {items.map((item) => {
                    return <Item
                        setCurrentItem={setItem}
                        data={item}
                        deleteItem={this.handleDeleteInput}
                        isCurrent={item.id === currentItem} />
                })}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items.itemsList,
        currentItem: state.items.currentItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (id) => { dispatch(addItem(id)) },
        setItem: (id) => { dispatch(setCurrentItem(id)) },
        deleteItem: (id) => { dispatch(deleteItem(id)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsList)

