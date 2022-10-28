import './App.css';
import Card from './pages/cards';
import React from 'react';

function App() {
    return (
        <div className="App">
            <div className='input_form'>
                <input type="text" />
            </div>
            <div className="Card">
                <Card />
            </div>
        </div>
    );
}

export default App;
