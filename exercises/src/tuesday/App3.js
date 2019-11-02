import React, { useState, useEffect } from 'react';
import '../App.css';

function App3() {

    var oldNumber = localStorage.getItem("count");
    console.log("oldNumber", oldNumber)
    if (oldNumber === undefined) { oldNumber = 0 }
    return (
        <Help number={oldNumber} inc={5} />
    )
}

function Help(props) {
    useEffect(() => {
        console.log("saving old number in session")
        localStorage.setItem("count", count)
    });

    const inc = props.inc;
    const [count, setCount] = useState(props.number);
    return (
        <div className="App3">
            <h4>1a.</h4>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + inc)}>
                1a. Increase
      </button>
            {/* 1b. */}
            <button onClick={() => setCount(count - inc)}>
                1b. Decrease
      </button>
        </div>
    );
}

export default App3;