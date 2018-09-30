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
        const {data, isCurrent, setCurrentItem} = this.props;
        const classes = 'one-item ' + (isCurrent && 'current');
        return (
            <div onClick={() => setCurrentItem(data.id)} key={data.id} className={classes}>
                <div className='item-info'>
                    <div className='item-name'>{data.name}</div>
                    <div className='item-count'>123</div>
                </div>
                <button onClick={this.deleteItem} className='btn-delete'>Delete</button>
            </div>
        );
    }
}

export default Item;
