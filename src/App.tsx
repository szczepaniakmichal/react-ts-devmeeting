import React from 'react';
import './App.css';

import Contact from './components/contact'

// type Contact = { name:string, phoneNumber: number, eMailAddress: number, address: string }

const App: React.FC = () => {
    return (
        <Contact/>
    );
};

export default App;
