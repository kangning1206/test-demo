/*
 * @Author: kangning1206
 * @Date:   2018-11-26 12:49:20
 * @Last Modified by:   kangning1206
 * @Last Modified time: 2018-11-26 19:43:26
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HelloWord extends Component {
  render() {
    const { text } = this.props;
    return (
      <div>{text}</div>
    );
  }

  say(){
    alert(1);
  }


}


HelloWord.defaultProps = {
  text: '哈喽'
}

HelloWord.propTypes = {
  text: PropTypes.string
}

export default HelloWord;
