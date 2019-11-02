import React, { useState, useEffect } from "react";
import AddEditPerson from "./AddEditPerson";
import AllPersons from "./AllPersons";

function App({ apiFacade }) {
  const emptyPerson = { id: "", age: "", name: "", email: "", gender: "" };
  const [personToAddEdit, setPersonToAddEdit] = useState(emptyPerson);
  const [persons, setPersons] = useState([]);
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await apiFacade.getPersonsV2();
        console.log("--> ", data);
        setPersons(data);
      } catch (e) {
        window.alert("Error");
        console.log("Error");
      }
    };
    getData();
  }, [fetchData]);

  /* useEffect(() => {
    //This would be a great place to fetch data (all persons) from the backend
    apiFacade.getPersons()
    .then(data=>{
      console.log("her er data -> ", data);
      setPersons(data);
    }).catch(e=>{alert("Upsedasse")})
  },[10000]); */

  const storeAddEditPerson = person => {
    const postData = async () => {
      try {
        apiFacade.addEditPerson(person).then(d => setFetchData(!fetchData));
      } catch (e) {
        window.alert("Error " + e);
      }
    };
    postData();
    //Call this from the AddEditPerson control with the person to Add or Edit and Add/Edit via the apiFacade
  };

  const deletePerson = id => {
    const deleteData = async () => {
      try {
        console.log("deletePerson func");
        apiFacade.deletePerson(id).then(d => setFetchData(!fetchData));
      } catch (e) {
        window.alert("Error " + e);
      }
    };
    deleteData();
    //Call this from the AllPerson control with the id for the person to delete
  };

  const editPerson = person => {
    const editData = async () => {
      try {
        apiFacade.addEditPerson(person).then(d => setFetchData(!fetchData));
        setPersonToAddEdit(person);
      } catch (e) {
        window.alert("Error " + e);
      }
    };
    editData();
    //Call thisfrom the AllPerson control with the  person to edit
    //Set the state variable personToAddEdit with this person (a clone) to make the new value flow down via props
  };

  return (
    <div className="container">
      <div className="row">
        <h3>CRUD Demo </h3>
        <div className="col-md-7">
          <h3>All Persons</h3>
          <AllPersons
            persons={persons}
            editPerson={editPerson}
            deletePerson={deletePerson}
          />
        </div>
        <div className="col-md-5">
          <h3 style={{ textAlign: "center" }}>Add Persons</h3>
          <AddEditPerson
            newPerson={personToAddEdit}
            //  Next two lines, are if you decide to use the pattern introduced in the day-2 exercises
            storeAddEditPerson={storeAddEditPerson}
            key={personToAddEdit.id}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
