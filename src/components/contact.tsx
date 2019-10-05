import React from "react";

type Contact = { name: string, phoneNumber: number, eMailAddress: string, address: string }

const Contact: React.FC = () => {
    const contact: Contact = {
        name: 'Jan',
        phoneNumber: 123456789,
        eMailAddress: 'jan@gmail.com',
        address: "01-123 Janowic, ul.Janowa 5"
    };


    return (
        <div className="contact">
                <h1>Contact info</h1>
                <p>Imie: {contact.name} </p>
                <p>numer telefonu: {contact.phoneNumber} </p>
                <p>e-mail: {contact.eMailAddress} </p>
                <p>adres: {contact.address} </p>
        </div>

    );
};

export default Contact;
