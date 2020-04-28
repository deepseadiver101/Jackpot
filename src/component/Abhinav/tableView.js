import React, { Component } from "react";
import {
  Table,
  Menu,
  Dropdown,
  Divider,
  Modal,
  Tag,
  Row,
  Col,
  Radio,
} from "antd";
import { Button } from "@material-ui/core";
import data from "../../data.json";
import Moment from "react-moment";
import EditJobLinks from "./editJobLinks";
import MyForm from "./myForm.js";
import CreateJob from "./createJob.js";
import CompareScreen from "./compareScreen.js";
import CompareField from "./compareField.js";
import CustomTable from "../customTable";
import SelectSource from "../trowe/SelectSource";

let i = 1;

class tableView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      trig: false,
      modalVisible: false,
      confirmLoading: false,
      currentRow: null,
      formToggle: false,
      jobToggle: false,
      createJobModal: false,
      compareVisible: false,
      compareFieldModal: false,
      selectSource: false,
    };
  }
  getData = () => {
    data.map((data) => {
      let tem = data;
      tem["key"] = i++;
      let d = this.state.data;
      d.push(tem);

      this.setState({ data: d, trig: true });
    });
    console.log(this.state.data);
  };
  selectRows = (selectedRowKeys, selectedRows) => {
    let obj = {
      key: selectedRowKeys[0],
      object: selectedRows[0],
    };

    this.setState({
      currentRow: obj,
    });
  };

  componentDidMount() {
    this.getData();
  }

  showModal = () => {
    this.setState({ modalVisible: true });
  };
  handleCreate = (obj) => {
    this.setState({ trig: false });
    let data = this.state.data;

    obj["index"] = i;
    obj["key"] = i;
    obj["lastModifiedDate"] = new Date();
    obj["validated"] = false;
    obj["scenarioVersion"] = "1";
    data.push(obj);
    i++;

    setInterval(() => {
      this.setState({
        data: data,
        modalVisible: false,
        trig: true,
      });
    }, 100);
  };
  handleSubmission = (obj, key) => {
    this.setState({ trig: false });
    let data = this.state.data;
    obj["lastModifiedDate"] = new Date();
    data[key] = obj;

    this.setState({
      data: data,
      modalVisible: false,
      trig: true,
    });
  };
  onCancel = () => {
    this.setState({ modalVisible: false });
  };

  openEditForm = (current) => {
    return (
      <MyForm
        current={current}
        handleSubmission={this.handleSubmission}
        handleCancel={this.handleCancel}
      />
    );
  };
  handleCancel = (e) => {
    this.setState({
      currentRow: null,
      formToggle: false,
      editJobs: false,
      jobToggle: false,
      createJobModal: false,
      compareVisible: false,
      compareFieldModal: false,
      selectSource: false,
    });
  };
  openCompareScreen = () => {
    this.setState({ selectSource: true });
  };
  validateData = () => {
    let obj = this.state.currentRow;
    let data = this.state.data;
    let actual = obj["object"];
    actual["lastModifiedDate"] = new Date();
    actual["validated"] = true;
    let key = obj["key"];
    console.log(this.state.currentRow);
    data[key] = actual;
    this.setState({ data: data });
  };
  handleSaveAndOpenField = () => {
    this.setState({
      compareVisible: false,
      compareFieldModal: true,
    });
  };
  saveSources = (source1, source2) => {
    this.setState({
      source1: source1,
      source2: source2,
      compareVisible: true,
      selectSource: false,
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const columns = [
      {
        title: "ScenarioName",
        dataIndex: "scenarioName",
        render: (text, record) => <span>{text}</span>,
      },
      {
        title: "ScenarioDescription",
        dataIndex: "scenarioDescription",
        render: (text, record) => <span>{text}</span>,
      },
      {
        title: "ScenarioVersion",
        dataIndex: "scenarioVersion",
        render: (text, record) => <span>{text}</span>,
      },
      {
        title: "Jobs",
        dataIndex: "jobs",
        render: (tags, record) => (
          <span>
            {tags.map((tag) => {
              let color = tag.length > 4 ? "geekblue" : "green";
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },

      {
        title: "Last Modified",
        dataIndex: "lastModifiedDate",
        render: (text, record) => (
          <span>
            <Moment format="YYYY/MM/DD">{text}</Moment>
          </span>
        ),
      },
      {
        title: "Validated",
        dataIndex: "validated",
        render: (validated, record) => (
          <span>
            {validated ? (
              <span>
                <div
                  style={{
                    backgroundColor: "blue",
                    height: "15px",
                    width: "15px",
                  }}
                ></div>
              </span>
            ) : (
              <span>
                <div
                  style={{
                    backgroundColor: "red",
                    height: "15px",
                    width: "15px",
                  }}
                ></div>
              </span>
            )}
          </span>
        ),
      },
    ];
    const current = this.state.currentRow;
    const menu = (
      <Menu>
        <Menu.Item>
          <Button variant="contained" color="primary">
            Edit Scenarios. Info
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              this.setState({ formToggle: true });
            }}
          >
            Edit Scenarios. Sources
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button variant="contained" color="primary">
            Edit Scenarios. Comparision Fields
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              this.setState({ editJobs: true });
            }}
          >
            Edit Scenarios. Job Links
          </Button>
        </Menu.Item>
      </Menu>
    );
    console.log(current);
    return (
      <div style={{ marginTop: "30px" }}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => this.props.history.push("/mainmenu")}
          style={{ float: "right" }}
        >
          MainMenu
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            style={{ margin: "20px" }}
            type="primary"
            onClick={() => this.setState({ createJobModal: true })}
          >
            Create
          </Button>
          <Dropdown overlay={menu}>
            <Button>Edit</Button>
          </Dropdown>
          <Button type="primary" onClick={this.showModal}>
            Delete
          </Button>
          <Button type="primary" onClick={this.validateData}>
            Validate
          </Button>
        </div>
        <Modal
          title="Edit Data"
          visible={this.state.editJobs}
          onCancel={this.handleCancel}
          footer={null}
        >
          <EditJobLinks
            current={current}
            handleSubmission={this.handleSubmission}
            handleCancel={this.handleCancel}
          />
        </Modal>
        <Modal
          title="Edit Data"
          visible={this.state.formToggle}
          onCancel={this.handleCancel}
          footer={null}
        >
          {current !== null ? this.openEditForm(current) : <>Please select</>}
        </Modal>

        {this.state.selectSource ? (
          <SelectSource
            handleCancel={this.handleCancel}
            saveSources={this.saveSources}
          />
        ) : null}
        <Modal
          title="Create Job"
          visible={this.state.createJobModal}
          onCancel={this.handleCancel}
          footer={null}
        >
          <CreateJob
            handleCancel={this.handleCancel}
            handleCreate={this.handleCreate}
            openCompareScreen={this.openCompareScreen}
          />
        </Modal>
        <Modal
          width="650"
          title="Compare Screen"
          visible={this.state.compareVisible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <CompareScreen
            handleSaveAndOpenField={this.handleSaveAndOpenField}
            handleCancel={this.handleCancel}
            source1={this.state.source1}
            source2={this.state.source2}
          />
        </Modal>
        <Modal
          width="600"
          title="Compare Fields"
          visible={this.state.compareFieldModal}
          onCancel={this.handleCancel}
          footer={null}
        >
          <CompareField />
        </Modal>
        <Divider />

        {this.state.trig ? (
          <Table
            scroll={{ y: 400 }}
            rowSelection={{
              type: "radio",
              onChange: (selectedRowKeys, selectedRows) =>
                this.selectRows(selectedRowKeys, selectedRows),
            }}
            columns={columns}
            dataSource={this.state.data}
          />
        ) : null}
      </div>
    );
  }
}

export default tableView;
