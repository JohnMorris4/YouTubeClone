import React from 'react';
import ReactDOM from 'react-dom';

//Crete a new compenent
//some HTML
const App = ()=> {
    return <div>Hi!!!</div>;
}

// take this component and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));