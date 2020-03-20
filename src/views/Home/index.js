import React, { Component } from 'react';
import Button from 'antd/es/button';
// import classNames from 'classnames/bind'
// import styles from './style.module.styl'

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Button type="primary">Button</Button>
        <header className="App-header">reactjs 脚手架 2.0： 化繁为简！</header>
      </div>
    );
  }
}
