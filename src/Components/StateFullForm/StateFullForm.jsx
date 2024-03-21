import { useState } from "react";


const StateFullForm = () => {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('')


    const handleSubmitState = e => {
        e.preventDefault()

        if (password.length < 6) {
            setError('Password must be 6 character or longer')
        }
        else {
            setError('')
        }
        console.log(name, email, password)
    }

    const handleName = e => {
        setName(e.target.value)
    }

    const handleEmail = e => {
        // console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        // e.preventDefault()
        // console.log(e.target.value)
        setPassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmitState}>


                <input

                    onChange={handleName}

                    type="text" name="name" id="" />
                <br />
                <input

                    onChange={handleEmail}

                    type="email" name="email" id="" />
                <br />
                <input

                    onChange={handlePassword}

                    type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />

                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;