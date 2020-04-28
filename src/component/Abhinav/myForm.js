import React, { Component } from 'react';
import {Form,Input,Button} from 'antd';


class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: props.current.object,
            key: props.current.key
        }
    }
    handleClick = () => {
        this.props.handleSubmission(this.state.current, this.state.key);
        this.props.handleCancel();
    }
    handleChange = (event) => {
        let obj = this.state.current

        obj[event.target.name] = event.target.value
        this.setState({
            current: obj
        })
    }
    render() {
        const current = this.state.current;
        return (

            <Form>
                <label>
                Scenario Name <Input type="text" name="scenarioName" value={current.scenarioName} onChange={(e) => this.handleChange(e)} />
                </label>
                <label>
                Scenario Description <Input type="text" name="scenarioDescription" value={current.scenarioDescription} onChange={(e) => this.handleChange(e)} />
                </label> <label>
                scenario Version <Input type="text" name="scenarioVersion" value={current.scenarioVersion} onChange={(e) => this.handleChange(e)} />
                </label>
            
                <br/>
                <Button type="primary"onClick={this.handleClick}>Edit</Button>
            </Form>

        );
    }
}

export default MyForm;