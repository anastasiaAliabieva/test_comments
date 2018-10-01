import React, {Component} from 'react';

class Item extends Component {
    constructor() {
        super();
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(e) {
        const {data, deleteItem} = this.props;
        e.stopPropagation();
        deleteItem(data.id)
    }

    render() {
        const {data, isCurrent, countComments, setCurrentItem} = this.props;
        return (
            <div onClick={() => setCurrentItem(data.id)}  className={isCurrent ? 'current' : ''}>
                <div className='one-item'>
                    <div className='item-info'>
                        <div className='item-name'>{data.name}</div>
                        <div className='item-count'> {countComments} </div>
                    </div>
                    <button onClick={this.deleteItem} className='btn-delete'>Delete</button>
                </div>
            </div>
        );
    }
}

export default Item;
