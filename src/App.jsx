import React, { useState } from 'react';

function App() {

  const [contact, setContact] = useState({
    fName: '',
    lName: '',
    email: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevContact => {
      return {
        ...prevContact,
        [name]: value
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Submitted: ${contact.fName} ${contact.lName}, Email: ${contact.email}`);
    setContact({
      fName: '',
      lName: '',
      email: ''
    });
  }

  return (

    <div className="container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h1>Hello {contact.fName} {contact.lName}</h1>
        <p>{contact.email}</p>

        <input name="fName" onChange={handleChange} value={contact.fName} placeholder='First Name' />
        <input name="lName" onChange={handleChange} value={contact.lName} placeholder='Last Name' />
        <input name="email" onChange={handleChange} value={contact.email} placeholder='Email' />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default App;