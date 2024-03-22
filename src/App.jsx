
import './App.css'
import ReusableForm from './Components/ReusableForm/ReusableForm'
// import HooksForm from './Components/HookForm/HooksForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StateFullForm from './Components/StateFullForm/StateFullForm'


function App() {

  const handleSignUpSubmit = data => {

    console.log('sing up data', data)
  }
  const handleUpdateProfile = data => {
    // e.preventDefault()
    console.log('updatte profile', data)
  }

  return (
    <>

      <h1>Vite + React</h1>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}

      {/* <HooksForm></HooksForm> */}

      <ReusableForm
        formTitle={'Sign Up'}
        handleSubmit={handleSignUpSubmit}>
        <div>
          <h3>Sign Up2</h3>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>

      <ReusableForm
        formTitle={'Profile Update'}
        submitBtnText='Update'
        handleSubmit={handleUpdateProfile}>

      </ReusableForm>

    </>
  )
}

export default App
