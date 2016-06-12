import { Component } from 'react'
import 'whatwg-fetch'
import EmployeeList from '../components/employee_list'

// I'm using the container/presenter model here. I considered
// using redux to manage state, but considering this has such simple
// data needs, and since you've seen other things I've written
// using redux, I decided to just keep state in the container component;
// redux seemed like overkill.
export default class EmployeeListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      page: 1
    }
  }

  componentWillMount() {
    const { page } = this.state
    fetch(`/employees?page=${page}`)
      .then((response) => response.json())
      .then(({ employees }) => this.setState({ employees: employees }))
  }

  render() {
    const { employees } = this.state
    if (employees.length > 0) {
      return (
        <EmployeeList employees={ employees } />
      )
    }
    else {
      return (
        <div>Loading...</div>
      )
    }
  }
}
