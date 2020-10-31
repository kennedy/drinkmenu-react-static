import React, { Component } from 'react'
import {createGlobalStyle, css} from 'styled-components'
import logo from './images/logo.svg'
import bar from './images/bar.svg'

const mainCss = css`
  ${import('./css/app.css')}
`;

const GlobalStyle = createGlobalStyle`
  ${mainCss}
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <h1><img class="logo" src={logo} alt='LBar'/></h1>
        <img class="bar" src={bar} />
      </div>
    )
  }
}

export default App
