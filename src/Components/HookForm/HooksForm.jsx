import useInputState from "../Hooks/UseInputState";


const HooksForm = () => {

    // custom hooks file from UseINputState
    // const [name, handleNameChange] = useInputState('Hasan')

    const emailState = useInputState('HasanEmail')



    const handleSubmit = e => {
        console.log('form data', emailState.value)
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="" /> */}
                <br />
                <input {...emailState} type="text" name="email" id="" />
                <br />
                <input type="phone" name="phone" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HooksForm;