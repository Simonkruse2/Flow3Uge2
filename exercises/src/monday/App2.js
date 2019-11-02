import React from 'react';
import '../App.css';
import person, { males, females } from "./file2";

const { firstName, email } = person;

function App2() {
    return (
        <div className="App">
            <p>Firstname: {firstName}, Email: {email}</p>
        </div>
    );
}
console.log([...males, ...females])
console.log([...males, "Kurt", "Helle", ...females, "Tina"])
export default App2;