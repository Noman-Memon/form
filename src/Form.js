import React from 'react'

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    textArea: '',
    checkBox: false,
    employment: '',
    favColor: '',
  })

  console.log(formData.checkBox)
  console.log(formData)

  // 1 method without distructuring
  //   function handleChange(event) {
  //     setFormData((prevFormData) => {
  //       return {
  //         ...prevFormData,
  //         [event.target.name]:
  //           event.target.name === 'checkBox'
  //             ? event.target.checked
  //             : event.target.value,
  //       }
  //     })
  //   }
  // 2nd method with distructuring
  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
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
      <input
        type="checkbox"
        id="isFriendly"
        onChange={handleChange}
        name="checkBox"
        checked={formData.checkBox}
      />
      <label htmlFor="isFriendly">Are You Friendly</label>
      <fieldset>
        <legend>Current Employment Status</legend>
        <input
          type="radio"
          id="unemployed"
          onChange={handleChange}
          name="employment"
          value="unemployed"
          checked={formData.employment === 'unemployed'}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <input
          type="radio"
          id="part-time"
          onChange={handleChange}
          name="employment"
          value="part-time"
          checked={formData.employment === 'part-time'}
        />
        <label htmlFor="part-time">part-time</label>
        <br />
        <input
          type="radio"
          id="full-time"
          onChange={handleChange}
          name="employment"
          value="full-time"
          checked={formData.employment === 'full-time'}
        />
        <label htmlFor="full-time">full-time</label>
      </fieldset>
      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
    </form>
  )
}
