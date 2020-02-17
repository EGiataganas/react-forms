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
            value={props.firstName}
            onChange={props.handleChange}
          />
          <br />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={props.lastName}
            onChange={props.handleChange}
          />
          <br />

          <input
            type="text"
            name="age"
            placeholder="Age"
            value={props.age}
            onChange={props.handleChange}
          />
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={props.gender === "male"}
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
              checked={props.gender === "female"}
              onChange={props.handleChange}
            />
            Female
          </label>
          <br />

          <select value={props.destination} name="destination" onChange={props.handleChange}>
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
              checked={props.dietaryRestrictions.isVegan}
              onChange={props.handleChange}
            />
            Vegan?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isKosher"
              checked={props.dietaryRestrictions.isKosher}
              onChange={props.handleChange}
            />
            Kosher?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              checked={props.dietaryRestrictions.isLactoseFree}
              onChange={props.handleChange}
            />
            Lactose Free?
          </label>
          <br />

          <button>Submit</button>
        </form>
        <hr/>

        <h1>Entered information:</h1>
        <p>Your name: {props.firstName} {props.lastName}</p>
        <p>Your age: {props.age}</p>
        <p>Your gender: {props.gender}</p>
        <p>Your destination: {props.destination}</p>
        <p>Your dietary restrictions:</p>
        <p>Vegan: {props.dietaryRestrictions.isVegan ? "Yes" : "No"}</p>
        <p>Kosher: {props.dietaryRestrictions.isKosher ? "Yes" : "No"}</p>
        <p>Lactose Free: {props.dietaryRestrictions.isLactoseFree ? "Yes" : "No"}</p>
      </main>
    </div>
  )
}

export default FormComponent
