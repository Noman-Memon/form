import React from 'react'

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    textArea: '',
  })

  console.log(formData.textArea)

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      }
    })
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName} //--by this- now state control this input field rahter input field control state
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea
        placeholder="Type here"
        onChange={handleChange}
        name="textArea"
        value={formData.textArea}
      />
    </form>
  )
}
