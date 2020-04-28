import React, { Component } from 'react';
import { Input, Select, Button, Row, Col } from 'antd';

const { Option } = Select
class DbView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <Row><Col span={24} style={{ textAlign: "center", fontSize: "x-large" }}>DB</Col></Row>
                <Row>
                    <Col span={8}>dbURI</Col>
                    <Col span={8}>
                        <Select
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Select URI"
                            optionFilterProp="children"

                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </Col>

                </Row>
                <Row>
                    <Col span={8}>DB Type</Col><Col span={8}>
                        <Select
                            showSearch
                            style={{ width: 300 }}
                            placeholder="Select URI"
                            optionFilterProp="children"

                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </Col>
                </Row>

                <Row>
                    <Col span={8}> Table Name</Col>

                    <Col span={8}>  <Input style={{
                        width: 300,
                    }} type="text" name="scenarioName" onChange={(e) => this.handleChange(e)} />
                    </Col>

                </Row>
                <Row>
                    <Col span={8}> QuerySql</Col>

                    <Col span={8}>  <Input.TextArea rows={4} style={{
                        width: 300,
                    }} type="text" name="scenarioDescription" onChange={(e) => this.handleChange(e)} />
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>Query Token</Col>

                    <Col span={8}>  <Input style={{
                        width: 300,
                    }} type="text" name="recipientMail" onChange={(e) => this.handleChange(e)} />
                    </Col>

                </Row>

                <Row>
                    <Col span={8}>Replacement value</Col>

                    <Col span={8}>  <Input style={{
                        width: 300,
                    }} type="text" name="recipientMail" onChange={(e) => this.handleChange(e)} />
                    </Col>

                </Row>
                <Row>
                    <Col span={8}>Query Token</Col>

                    <Col span={8}>  <Input style={{
                        width: 300,
                    }} type="text" name="recipientMail" onChange={(e) => this.handleChange(e)} />
                    </Col>

                </Row>

                <Row>
                    <Col span={8}>Replacement value</Col>

                    <Col span={8}>  <Input style={{
                        width: 300,
                    }} type="text" name="recipientMail" onChange={(e) => this.handleChange(e)} />
                    </Col>

                </Row>
                <Row>
                    <Col span={8}>Columns to be summed</Col>

                    <Col span={8}>  <Input style={{
                        width: 300,
                    }} type="text" name="recipientMail" onChange={(e) => this.handleChange(e)} />
                    </Col>

                </Row>
            </div>
        );
    }
}

export default DbView;