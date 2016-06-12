import { Component } from 'react'
import data from '../mock_data'
import Employee from './employee'

// I actually haven't used a lot of functional components in my code,
// at this point (mostly because of habit), but I really like the concept.
const EmployeeList = (props) => {
    const { results: employees } = data
    return (
      <div className="employees">
        { employees.map(person =>
          // What I really want to use here is the object destructuring
          // that I think is part of ES7, so I could pass
          // <Employee person={ ...person } key={ person.id.value } />
          // but I haven't, mostly b/c I wasn't aware of it when I put together
          // this boilerplate. Plus my current linting setup will get upset,
          // and I don't really want to spend time yak shaving right now.
          // I'll do that after I'm done with this test. :)
          <Employee person={ person } key={ person.id.value } />
        )}
      </div>
    )
}

export default EmployeeList
