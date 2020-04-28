import React, { Component } from 'react';
import { Row, Col, Select, AutoComplete, Button } from 'antd';
const { Option } = Select
class CompareField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: [1]
        }
    }

    render() {
        const options = [
            {
                value: 'FinanceField',
            },
            {
                value: 'Sales Field',
            },
            {
                value: 'Some Field',
            },
        ];
        return (
            <>
                <div className={'field'}>
                    <Row ><Col span={4}>Job name(s)</Col><Col span={8}></Col></Row>
                    <Row><Col span={4}>Scenario Name</Col><Col span={8}></Col></Row>
                    <Row><Col span={4}>Scenario Description</Col><Col span={8}></Col></Row>
                    <Row>
                        <Col span={6}>Source 1</Col>
                        <Col span={6}>Source 2</Col>
                    </Row>
                    <Row>
                        <Col span={3}>FieldName</Col>
                        <Col span={3}>DataType</Col>
                        <Col span={3}>FieldName</Col>
                        <Col span={3}>DataType</Col>
                        <Col span={4}>Validation Message</Col>
                        <Col span={2}>Tolerance Type</Col>
                        <Col span={2}>Tolerance Value</Col>
                        <Col span={2}>Tolerance Range</Col>
                        <Col span={2}>Translation Needed</Col>
                    </Row>
                    {this.state.rows.map(row => <Row id={row}>
                        <Col span={3} ><AutoComplete
                            style={{
                                width: "100%",
                            }}
                            options={options}

                            filterOption={(inputValue, option) =>
                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                        /></Col>
                        <Col span={3}><Select
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Select DataType"
                            optionFilterProp="children"

                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="Numeric">Numeric</Option>
                            <Option value="String">String</Option>
                            <Option value="DateTime">DateTime</Option>
                        </Select></Col>
                        <Col span={3}><AutoComplete
                            style={{
                                width: "100%",
                            }}
                            options={options}

                            filterOption={(inputValue, option) =>
                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                        /></Col>
                        <Col span={3}><Select
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Select DataType"
                            optionFilterProp="children"

                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="Numeric">Numeric</Option>
                            <Option value="String">String</Option>
                            <Option value="DateTime">DateTime</Option>
                        </Select></Col>
                        <Col span={4}><input style={{ width: "100%" }} type='text' /></Col>
                        <Col span={2}><Select
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Select Tolerance Type"
                            optionFilterProp="children"

                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="percentage">Percentage</Option>
                            <Option value="fraction">Fraction</Option>

                        </Select></Col>
                        <Col span={2}><input style={{ width: "100%" }} type='text' /></Col>
                        <Col span={2}><Select
                            showSearch
                            style={{ width: "100%" }}
                            placeholder="Select Tolerance Type"
                            optionFilterProp="children"

                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="+">+</Option>
                            <Option value="-">-</Option>
                            <Option value="+/-">+/-</Option>
                        </Select></Col>
                        <Col span={2}><input style={{ width: "100%" }} type='radio' /></Col>
                    </Row>)}

                </div>
                <Button type="primary" style={{ display: 'block', margin: 'auto' }} onClick={() => {
                    let rows = this.state.rows
                    rows.push(rows.length + 1)
                    this.setState({ rows: rows })
                }}>+ Add Row</Button>
            </>
        );
    }
}

export default CompareField;