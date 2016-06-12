// Phoenix' dependencies
import '../css/app.scss'
import React from 'react'
import { render } from 'react-dom'

import EmployeeList from './components/employee_list'

window.React = React

const Root = (props) => {
    return (
      // I generally like to keep the root component completely
      // generic and unaware of any implementation details
      // apart from the actual app entry point. Often I'll
      // also generically name that entry point as App, but in this
      // case, since this is a very small app doing just one thing, I'm
      // not too worried about that, so I'm going straight to EmployeeList.
      <EmployeeList />
    )
}

render(<Root />, document.getElementById('root'))
