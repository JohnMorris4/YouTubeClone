import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD5Ptkf_J7mZBiBAGt0lN1q-vWDUbgJtmI';

//Crete a new compenent
//some HTML
const App = ()=> {
    return (
        <div>
        <SearchBar /> 
        </div>
    );
}


// take this component and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));