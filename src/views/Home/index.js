import React, { Component } from 'react'
// import classNames from 'classnames/bind'
// import Button from 'antd/es/button'
// import styles from './style.module.styl'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        {/* <Button type="primary">Button</Button> */}
        <header className="App-header">
          <img
            src="https://img.kaikeba.com/logo-new@2x.png"
            className="App-logo"
            alt="logo"
          />
          ✌️activity page 🏆
        </header>
      </div>
    )
  }
}
