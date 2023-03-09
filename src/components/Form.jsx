import { useState } from 'react'

import Message from './Message'
import Card from './Card'

function Form() {

    const [message, setMessage ] = useState('')
    const [user, setUser ] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        const firstName = event.target[0].value
        const lastName = event.target[1].value
        const age = event.target[2].value

        const firstNameValidation = firstName.length < 3 || firstName[0] === ' '
        const lastNameValidation = lastName.length < 6

        if( firstNameValidation || lastNameValidation) {
            setMessage('Por favor chequea que la información sea correcta')
            setUser(null)
            return;
        }

        setMessage('')
        setUser({
            firstName,
            lastName,
            age
        })
    }


    return (
    <div>
      <div className="form-container">
        <h1>Register in our system</h1>
            <form onSubmit={handleSubmit}>
                    <label >First name:</label>
                    <input type="text" id="fname" name="fname" className="input-form"  title="Max 3 caracters" required />
                    <label >Last name:</label>
                    <input type="text" id="lname" name="lname" className="input-form"  title="6 caracters at least" required/>
                    <label >Age:</label>
                    <input type="number" id="lage" name="lage" className="input-form" title="Only numbers"  required/>
                <input type='submit' value="Send" className='submit-button'/>
            </form>
            <Message message={message} />
        </div>
        <Card user={user} />
    </div>
    );
  }
  
  export default Form;
  