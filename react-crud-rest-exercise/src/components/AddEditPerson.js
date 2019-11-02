import React, { useState } from "react";

export default function AddEditPerson(props) {
  const [person, setPerson] = useState({ ...props.newPerson });
  const emptyPerson = { id: "", age: "", name: "", email: "", gender: "" };

  /* Add the required changes to use Reacts "Controlled Component Pattern" 
     to handle inputs related to a person */
  const handleChange = (evt) => {
    const target = evt.target;
    const id = target.id;
    const value = target.value;
    person[id] = value;
    //setPerson({...person})
    setPerson({...person, [id]: value})
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.storeAddEditPerson(person);
    //window.alert(JSON.stringify(person));
  }
  const handleCancel = (evt) => {
    evt.preventDefault();
    setPerson(emptyPerson);
  }

  return (
    <div>
      <form className="form-horizontal">
        <div className="form-group">
          <label className="control-label col-sm-3">Id:</label>
          <div className="col-sm-9">
            <input className="form-control" readOnly id="id" value={person.id}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="name">
            Name:
          </label>
          <div className="col-sm-9">
            <input
              value={person.name}
              className="form-control"
              id="name"
              placeholder="Enter Name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="age">
            Age:
          </label>
          <div className="col-sm-9">
            <input
              value={person.age}
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter age"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="email">
            Email:
          </label>
          <div className="col-sm-9">
            <input
              value={person.email}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="pwd">
            Gender:
          </label>
          <div className="col-sm-9">
            <input
              value={person.gender}
              className="form-control"
              id="gender"
              placeholder="Enter Gender"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button onClick={handleSubmit} type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              onClick={handleCancel}
              style={{ marginLeft: 5 }}
              type="button"
              className="btn btn-dark"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
      <p>{JSON.stringify(person)}</p>
      <p>Please provide me with the ability to create new persons</p>
      <p>And update the backend when submitted</p>
    </div>
  );
}
