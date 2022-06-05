import * as React from 'react'
import * as ReactDOM from 'react-dom'

import 'antd/dist/antd.css'
import App from './App'
import './styles.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../style/flexboxgrid.min.css'
import '../style/index.css'

const mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)
