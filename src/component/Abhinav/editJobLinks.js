import React, { Component } from 'react';
import { PageHeader, Transfer, Button } from 'antd'


class EditJobLinks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: props.current.object,
            key: props.current.key,
            completeData: [{ key: "job1" },
            { key: "job2" },
            { key: "job3" }],
            targetKeys: props.current.object["jobs"],
            selectedKeys: [],
            disabled: false,
        }
    }
    handleChange = (nextTargetKeys, direction, moveKeys) => {
        this.setState({ targetKeys: nextTargetKeys });

    };

    handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

    };

    handleScroll = (direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    };
    handleClick = () => {
        let jobs = this.state.targetKeys
        let obj = this.state.current
        jobs.sort()
        obj["jobs"] = jobs
        this.props.handleSubmission(obj, this.state.key);
    }


    render() {
        const scenario=this.state.current
        const { targetKeys, selectedKeys } = this.state;
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    
                    title={scenario["scenarioName"]}
                    subTitle={scenario["scenarioDescription"]}
                />
                <Transfer
                    dataSource={this.state.completeData}
                    titles={['Available Jobs', 'Linked To Jobs']}
                    listStyle={{
                        width: 200,
                        height: 250,
                    }}
                    targetKeys={targetKeys}
                    selectedKeys={selectedKeys}
                    onChange={this.handleChange}
                    onSelectChange={this.handleSelectChange}
                    onScroll={this.handleScroll}
                    render={item => item.key}
                />
                <Button type="primary" onClick={this.handleClick}>Edit</Button>
            </div>
        );
    }
}



export default EditJobLinks;