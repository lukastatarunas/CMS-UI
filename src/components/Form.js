import React, { Component } from 'react'
import './Form.css'
import axios from 'axios'

class Form extends Component {

    constructor() {
        super()
        this.state = {
            username: ``,
            password: ``
        }
    }

    onNameChange = e => {
        this.setState({
          username: e.target.value
        })
    }
    
    onPasswordChange = e => {
        this.setState({
          password: e.target.value
        })
    }

    sendData = () => {
        axios.post(`http://localhost:5000/data`, {
            username: this.state.username,
            password: this.state.password
        })
    }

    render() {
        return (
            <form>
                <input onChange={this.onNameChange} placeholder="Username" />
                <input onChange={this.onPasswordChange} placeholder="Password" />
                <button onClick={this.sendData}>Send!</button>
            </form>
        )
    } 
}

export default Form