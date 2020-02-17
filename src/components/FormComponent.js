import React from "react"

function FormComponent(props) {
  return(
    <div>
      <main>
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={props.data.firstName}
            onChange={props.handleChange}
          />
          <br />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={props.data.lastName}
            onChange={props.handleChange}
          />
          <br />

          <input
            type="text"
            name="age"
            placeholder="Age"
            value={props.data.age}
            onChange={props.handleChange}
          />
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={props.data.gender === "male"}
              onChange={props.handleChange}
            />
            Male
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={props.data.gender === "female"}
              onChange={props.handleChange}
            />
            Female
          </label>
          <br />

          <select value={props.data.destination} name="destination" onChange={props.handleChange}>
            <option value="">-- Please choose a destination --</option>
            <option value="germany">Germany</option>
            <option value="norway">Norway</option>
            <option value="north pole">North Pole</option>
            <option value="south pole">South Pole</option>
          </select>
          <br />

          <label>
            <input
              type="checkbox"
              name="isVegan"
              checked={props.data.dietaryRestrictions.isVegan}
              onChange={props.handleChange}
            />
            Vegan?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isKosher"
              checked={props.data.dietaryRestrictions.isKosher}
              onChange={props.handleChange}
            />
            Kosher?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              checked={props.data.dietaryRestrictions.isLactoseFree}
              onChange={props.handleChange}
            />
            Lactose Free?
          </label>
          <br />

          <button>Submit</button>
        </form>
        <hr/>

        <h1>Entered information:</h1>
        <p>Your name: {props.data.firstName} {props.data.lastName}</p>
        <p>Your age: {props.data.age}</p>
        <p>Your gender: {props.data.gender}</p>
        <p>Your destination: {props.data.destination}</p>
        <p>Your dietary restrictions:</p>
        <p>Vegan: {props.data.dietaryRestrictions.isVegan ? "Yes" : "No"}</p>
        <p>Kosher: {props.data.dietaryRestrictions.isKosher ? "Yes" : "No"}</p>
        <p>Lactose Free: {props.data.dietaryRestrictions.isLactoseFree ? "Yes" : "No"}</p>
      </main>
    </div>
  )
}

export default FormComponent
