import React, { Component } from 'react';
import { Input, Select, Button, Row, Col, Divider, Tabs } from 'antd';
import DbView from './sourceViews/dbView';
import XmlView from './sourceViews/xmlView';
import 'antd/dist/antd.css';
const { Option } = Select
class CompareScreen extends Component {
    handleSaveAndOpenField = () => {
        this.props.handleSaveAndOpenField()
    }
    render() {
        return (
            <div className={"field"}>
                <Row className={"field"}><Col span={4}>Job name(s)</Col><Col span={8}></Col></Row>
                <Row><Col span={4}>Scenario Name</Col><Col span={8}></Col></Row>
                <Row><Col span={4}>Scenario Description</Col><Col span={8}></Col></Row>
                <Row>
                    <Col span={24}>
                    <Tabs defaultActiveKey="1" tabPosition={"left"} type="card">
                        <Tabs.TabPane tab="Source 1" key="1">
                            {this.props.source1 === "xml" ? <XmlView /> : null}
                            {this.props.source1 === "db" ? <DbView /> : null}
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Source 2" key="2">
                            {this.props.source2 === "xml" ? <XmlView /> : null}
                            {this.props.source2 === "db" ? <DbView /> : null}
                        </Tabs.TabPane>
                    </Tabs>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}><Button type="primary" onClick={this.handleSaveAndOpenField}><span style={{
                        wordWrap: "break-word"
                    }}>Save and Continue</span></Button></Col>
                    <Col span={8}><Button type="primary" >Save and Exit</Button></Col>
                    <Col span={8}><Button type="primary" >Cancel</Button></Col>
                </Row></div>
        );
    }
}

export default CompareScreen;