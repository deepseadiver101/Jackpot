import React, { Component } from 'react';
import { Input, Select, Button, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import CompareScreen from './compareScreen';
import CompareField from './compareField';
const { Option } = Select;

class CreateJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savedData: [],
            scenarioName: "",
            scenarioDescription: "",
            jobs: [],
            recipientMail: "",
            globalNetSubject: "",
            symphonyWebHookUrl: "",
            
        }
    }
   
    handleChange = e => {
        const key = e.target.name;
        this.setState({
            [key]: e.target.value
        })
    }
    handleJobList = (val) => {

        this.setState({ jobs: val })

    }
    onClose = (val) => {
        let obj = this.state.jobs;
        obj = obj.filter(job => job !== val)

        this.setState({ jobs: obj })
    }
    handleSave = () => {
        let obj = this.state;
        delete obj["savedData"];
        
        this.props.handleCreate(obj);
        let arr = [obj]

        this.setState({ savedData: arr, initial: false })
    }
    handleSaveAndContinue = () => {
        this.handleSave();
        this.props.handleCancel();
        this.props.openCompareScreen();

    }
    handleSaveAndExit = () => {
        this.handleSave();
        this.props.handleCancel();
    }
    handleCancel = () => {
        this.props.handleCancel();
    }
    render() {

        const options = []
        for (let i = 1; i < 10; i++) {
            options.push(<Option key={"job" + i}>{"job" + i}</Option>);
        }
        return (
            <div>
              
                    <React.Fragment>
                        <Row>
                            <Col span={8}>Name</Col><Col span={16}>
                                <Select
                                    
                                    style={{ width: 300 }}
                                    placeholder="Please select Job(s)"

                                    onChange={this.handleJobList}
                                >
                                    {options}
                                </Select></Col>
                        </Row>
                        <Row>
                            <Col span={8}>  Scenario Name</Col>

                            <Col>  <Input style={{
                                width: 300,
                            }} type="text" name="scenarioName" value={this.state.scenarioName} onChange={(e) => this.handleChange(e)} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={8}>  Scenario Description</Col>

                            <Col>  <Input style={{
                                width: 300,
                            }} type="text" name="scenarioDescription" value={this.state.scenarioDescription} onChange={(e) => this.handleChange(e)} />
                            </Col>
                        </Row><Row>
                            <Col span={8}>Recipient Mail</Col>

                            <Col>  <Input style={{
                                width: 300,
                            }} type="text" name="recipientMail" value={this.state.recipientMail} onChange={(e) => this.handleChange(e)} />
                            </Col>
                        </Row><Row>
                            <Col span={8}>GlobalNet Subject</Col>

                            <Col>  <Input style={{
                                width: 300,
                            }} type="text" name="scenarioName" value={this.state.globalNetSubject} onChange={(e) => this.handleChange(e)} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={8}>SymphonyWebHook Url</Col>
                            <Col span={16}>
                                <div style={{ marginBottom: 16, width: 300 }}>
                                    <Input addonBefore="http://" value={this.state.symphonyWebHookUrl} />
                                </div> </Col>
                        </Row>



                        <Row>
                            <Col span={8}><Button type="primary" onClick={this.handleSaveAndContinue}><span style={{
                                wordWrap: "break-word"
                            }}>Save and Continue</span></Button></Col>
                            <Col span={8}><Button type="primary" onClick={this.handleSaveAndExit}>Save and Exit</Button></Col>
                            <Col span={8}><Button type="primary" onClick={this.handleCancel}>Cancel</Button></Col>
                        </Row>
                    </React.Fragment>
                
               
            </div>
        );
    }
}

export default CreateJob;