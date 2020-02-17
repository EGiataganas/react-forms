import React, {Component} from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ?
      this.setState(prevState => {
        return {
          dietaryRestrictions:{
            ...prevState.dietaryRestrictions,
            [name]: checked
          }
      }

      }) :
      this.setState({[name]: value})
  }

  render(){
    return(
      <main>
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />

          <input
            type="text"
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            Male
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            Female
          </label>
          <br />

          <select value={this.state.destination} name="destination" onChange={this.handleChange}>
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
              checked={this.state.dietaryRestrictions.isVegan}
              onChange={this.handleChange}
            />
            Vegan?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isKosher"
              checked={this.state.dietaryRestrictions.isKosher}
              onChange={this.handleChange}
            />
            Kosher?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              checked={this.state.dietaryRestrictions.isLactoseFree}
              onChange={this.handleChange}
            />
            Lactose Free?
          </label>
          <br />

          <button>Submit</button>
        </form>
        <hr/>

        <h1>Entered information:</h1>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>Your dietary restrictions:</p>
        <p>Vegan: {this.state.dietaryRestrictions.isVegan ? "Yes" : "No"}</p>
        <p>Kosher: {this.state.dietaryRestrictions.isKosher ? "Yes" : "No"}</p>
        <p>Lactose Free: {this.state.dietaryRestrictions.isLactoseFree ? "Yes" : "No"}</p>
      </main>
    )
  }
}

export default Form;
