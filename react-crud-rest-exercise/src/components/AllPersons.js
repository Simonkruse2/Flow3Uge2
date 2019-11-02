import React from "react"
import PropTypes from 'prop-types';

export default function AllPersons(props) {
  const { persons,editPerson,deletePerson} = props;
  
  return (
    <div>
      <table className="table">
        <thead>
          <tr><th>Age</th><th>Name</th><th>Gender</th><th>Email</th></tr>
        </thead>
        <tbody>
          {persons.map((pers) => (

            <tr key={pers.id}>
              <td>{pers.age}</td>
              <td>{pers.name}</td>
              <td>{pers.gender}</td>
              <td>{pers.email}</td>
              <td>
              (<a href="xx" onClick={(e)=>{e.preventDefault();editPerson(pers)}}>edit</a>, 
              <a href="xx" onClick={(e)=>{e.preventDefault();deletePerson(pers.id)}}>delete)</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

AllPersons.propTypes = {
  persons : PropTypes.array.isRequired,
  editPerson: PropTypes.func.isRequired,
  deletePerson: PropTypes.func.isRequired
}
