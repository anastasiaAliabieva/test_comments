import React, { Component } from 'react';

class Comment extends Component {
  render() {
      const {data} = this.props;
    return (
      <div className='comment'>
          <div className='color-block color-block-default'/>
          <div>{data.text} </div>
      </div>
    );
  }
}

export default Comment;
