import React from "react";

type ContactList = { name: string, phoneNumber: number, eMailAddress: string, address: string }

const ContactList: React.FC = () => {
    const listContact: ContactList[] = [
        {
            name: 'Jan',
            phoneNumber: 123456789,
            eMailAddress: 'jan@gmail.com',
            address: "01-123 Janowic, ul.Janowa 5"
        },
        {
            name: 'Kazimierz',
            phoneNumber: 987654321,
            eMailAddress: 'karzimierz@gmail.com',
            address: "98-765 Kazimierz, ul.Kazimierzowa 5"
        }
    ];
    
    return (
        <div className="borderBottom">
            <h1>Lista kontaktów</h1>
            {listContact.map(contact => (
                <div key={contact.name}>
                    <p>imie: {contact.name}</p>
                    <p>numer telefonu: {contact.phoneNumber}</p>
                    <p>e-mail: {contact.eMailAddress} </p>
                    <p>adres: {contact.address} </p>
                </div>
            ))}
        </div>
    )
    
};

export default ContactList;
