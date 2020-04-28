import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
// import TimePicker from 'react-time-picker'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {
                userName: "",
                password: ""
            }
        }
    }
    handleChange = (event) => {
        let tempUser = this.state.userDetails;
        tempUser[event.target.name] = event.target.value;
        this.setState({
            userDetails: tempUser
        })
    }
    handlerLogin = () => {


        let isValid = true;
        if (isValid) {
            this.props.history.push("/mainmenu")
        }
        else {
            this.setState({
                userDetails: {
                    userName: "",
                    password: ""
                }
            })
            this.props.history.push("/")
        }
    }

  
    render() {
       
        return (<div >


            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h1 style={{ float: "none", margin: 0 }}>Welcome To Jackpot</h1></div >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Form>
                {/* <TimePicker /> */}
               
                <label>
                    Enter Your Login Id <Input type="text" name="userName" value={this.state.userDetails["userName"]} onChange={(e) => this.handleChange(e)} />
                </label>
                <label>
                    Enter your password <Input type="password" name="password" value={this.state.userDetails["password"]} onChange={(e) => this.handleChange(e)} />
                </label>
                <br />
                <Button type="primary" onClick={this.handlerLogin}>Edit</Button>
            </Form></div>
        </div >

        );
    }
}

export default LoginPage;