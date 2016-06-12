import { Component } from 'react'

const fullName = (name) => `${name.first} ${name.last}`

const Employee = (props) => {
  // Had I used the object destructuring I mentioned in employee_list.js,
  // here I could destructure slightly more elegantly without reaching into
  // props.person, instead just doing
  // const { cell, email, name, picture: { thumbnail } } = props.person
  // Also, I'm conflicted about destructuring into an object beyond the first
  // level (like I've done below). A lot of times, for readability, I'll do:
  // const { cell, email, name, picture } = props.person
  // const { thumbnail } = picture
  const { cell, email, name, picture: { medium } } = props.person
  return (
    <div className="employee">
      <div className="avatar">
        <img src={ medium } />
      </div>
      <div className="info">
        <div className="name">{ fullName(name) }</div>
        <div className="email">
          <a href={`mailto:${email}`} target="_blank">{ email }</a>
        </div>
        <div className="cell">
          { cell }
        </div>
      </div>
    </div>
  )
}

export default Employee
