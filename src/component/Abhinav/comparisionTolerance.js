import React, { Component, useContext, useState, useEffect, useRef } from "react";
import "antd/dist/antd.css";
import { Table, Input, Popconfirm, Form, Tooltip, Select,  Button, Tabs } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import Modal from '@material-ui/core/Modal';

const EditableContext = React.createContext();
const { Option } = Select;
const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const sourceNames = ["Hinet-1", "BNYM-1"];

const dataTypes = ["varchar", "numeric", "decimal", "boolean"];

const hinetFieldNames = [
    "corp_action_ind",
    "screen_color",
    "psy_inl_id",
    "psy_utd_id"
];

const bnymFieldNames = [
    "corporate_action_flag",
    "s_col",
    "pty_inl_id",
    "psy_som_id",
    "psy_iwu_id"
];


const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef();
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex]
        });
    };

    const save = async e => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log("Save failed:", errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        max: 50,
                        message: `required.`
                    }
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
                <div
                    className="editable-cell-value-wrap"
                    style={{
                        paddingRight: 24
                    }}
                    onClick={toggleEdit}
                >
                    {children}
                </div>
            );
    }

    return <td {...restProps}>{childNode}</td>;
};


class ComparisionTolerance extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: sourceNames[0],
                children: [
                    {
                        title: "Fieldname",
                        dataIndex: "fieldName0",
                        width: "100px",
                        render: (text, record) => {
                            return (
                                <div >
                                    <Select
                                        style={{ width: 100 }}
                                        onChange={event =>
                                            this.handleSelectChange(event, record, "fieldName0")
                                        }
                                    >
                                        {hinetFieldNames.map((fieldName, index) => {
                                            return (
                                                <Option value={fieldName}>
                                                    <Tooltip title={fieldName}>{fieldName}</Tooltip>
                                                </Option>
                                            );
                                        })}
                                    </Select>
                                </div>
                            );
                        }
                    },
                    {
                        title: "Datatype",
                        dataIndex: "datatype0",
                        width: "100px",
                        render: (text, record) => {
                            return (
                                <div >
                                    <Select
                                        style={{ width: 100 }}
                                        onChange={event =>
                                            this.handleSelectChange(event, record, "datatype0")
                                        }
                                    >
                                        {dataTypes.map((dataType, index) => {
                                            return (
                                                <Option value={dataType}>
                                                    <Tooltip title={dataType}>{dataType}</Tooltip>
                                                </Option>
                                            );
                                        })}
                                    </Select>
                                </div>
                            );
                        }
                    },
                    {
                        title: "Original value(s)",
                        dataIndex: "originalvalue0",
                        width: "100px",
                        editable: true,
                        ellipsis: true,
                        render: (text, record) => (
                            <Tooltip title={text}>
                                {text.length > 10 ? `${text.slice(0, 10)}...` : text}
                            </Tooltip>
                        )
                    },
                    {
                        title: "Translated value(s)",
                        dataIndex: "translatedValue0",
                        width: "100px",
                        editable: true,
                        ellipsis: true,
                        render: (text, record) => (
                            <Tooltip title={text}>
                                {text.length > 10 ? `${text.slice(0, 10)}...` : text}
                            </Tooltip>
                        )
                    },
                    {
                        title: " ",
                        width: "50px",
                        render: (text, record) =>
                            this.state.dataSource.length >= 1 ? (
                                <Popconfirm
                                    title="Sure to delete?"
                                    onConfirm={() => this.handleDelete(record.key)}
                                >
                                    <Tooltip title="Delete">
                                        <DeleteOutlined />
                                    </Tooltip>
                                </Popconfirm>
                            ) : null
                    }
                ]
            },
            {
                title: sourceNames[1],
                children: [
                  {
                    title: "Fieldname",
                    dataIndex: "fieldName1",
                    width: "100px",
                    render: (text, record) => {
                      return (
                        <div>
                        <Select
                          style={{ width: 100 }}
                          onChange={event =>
                            this.handleSelectChange(event, record, "fieldName1")
                          }
                        >
                          {bnymFieldNames.map((fieldName, index) => {
                            return (
                              <Option value={fieldName}>
                                <Tooltip title={fieldName}>{fieldName}</Tooltip>
                              </Option>
                            );
                          })}
                        </Select>
                        </div>
                      );
                    }
                  },
                  {
                      title: "Datatype",
                      dataIndex: "datatype1",
                      width: "100px",
                      render: (text, record) => {
                        return (
                          <div >
                          <Select
                            style={{ width: 100 }}
                            onChange={event =>
                              this.handleSelectChange(event, record, "datatype1")
                            }
                          >
                            {dataTypes.map((dataType, index) => {
                              return (
                                <Option value={dataType}>
                                  <Tooltip title={dataType}>{dataType}</Tooltip>
                                </Option>
                              );
                            })}
                          </Select>
                          </div>
                        );
                      }
                  },
                  {
                    title: "Original value(s)",
                    dataIndex: "originalvalue1",
                    width: "100px",
                    editable: true,
                    ellipsis: true,
                    render: (text, record) => (
                      <Tooltip title={text}>
                        {text.length > 10 ? `${text.slice(0, 10)}...` : text}
                      </Tooltip>
                    )
                  },
                  {
                    title: "Translated value(s)",
                    dataIndex: "translatedValue1",
                    width: "100px",
                    editable: true,
                    ellipsis: true,
                    render: (text, record) => (
                      <Tooltip title={text}>
                        {text.length > 10 ? `${text.slice(0, 10)}...` : text}
                      </Tooltip>
                    )
                  },
                  {
                      title: " ",
                      width: "50px",
                      render: (text, record) =>
                          this.state.dataSource.length >= 1 ? (
                              <Popconfirm
                                  title="Sure to delete?"
                                  onConfirm={() => this.handleDelete(record.key)}
                              >
                                  <Tooltip title="Delete">
                                      <DeleteOutlined />
                                  </Tooltip>
                              </Popconfirm>
                          ) : null
                  }
                ]
              }
        ];
        this.state = {
            dataSource: [],
            count: 0
        };
    }
  
    getDataSource=(name)=>{
       return this.columns.filter(col=> col["title"]===name)
    }
     
    handleSelectChange = (value, record, fieldName) => {
        console.log(record);
        console.log(value);
        record[fieldName] = value;
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => record.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...record });
        this.setState({
            dataSource: newData
        });
    };
    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter(item => item.key !== key)
        });
    };

    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            fieldName0: "",
            originalvalue0: "",
            translatedValue0: "",
            fieldName1: "",
            originalvalue1: "",
            translatedValue1: ""

        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1
        });
    };

    handleSave = row => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        this.setState({
            dataSource: newData
        });
    };

    handleSaveModal = async e => {
        console.log(this.state.dataSource);
        let backEndData = {
            translationTables: [
                {
                    sourceName: "Hinet",
                    translationValues: []
                },
                {
                    sourceName: "BNYM",
                    translationValues: []
                }
            ]
        };
        this.state.dataSource.forEach((record, index) => {
            sourceNames.forEach((sourceName, sourceNameIndex) => {
                let translationValueRecord = {};
                if (
                    record[`fieldName${sourceNameIndex}`] !== "" &&
                    record[`originalvalue${sourceNameIndex}`] !== "" &&
                    record[`translatedValue${sourceNameIndex}`] !== ""
                ) {
                    translationValueRecord["fieldName"] =
                        record[`fieldName${sourceNameIndex}`];
                    translationValueRecord["originalvalue"] =
                        record[`originalvalue${sourceNameIndex}`];
                    translationValueRecord["translatedValue"] =
                        record[`translatedValue${sourceNameIndex}`];

                    console.log(record, translationValueRecord);
                    backEndData["translationTables"][sourceNameIndex][
                        "translationValues"
                    ] = [
                            ...backEndData["translationTables"][sourceNameIndex][
                            "translationValues"
                            ],
                            translationValueRecord
                        ];
                }
            });
        });
        console.log(backEndData);
    };

    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableRow,
                cell: EditableCell
            }
        };
        const columns = this.columns.map(col => {
            if (!col.children) return col;
            return {
                ...col,
                children: col.children
                    ? col.children.map(chilCol => {
                        if (!chilCol.editable) {
                            return chilCol;
                        }
                        return {
                            ...chilCol,
                            onCell: record => ({
                                record,
                                editable: chilCol.editable,
                                dataIndex: chilCol.dataIndex,
                                title: chilCol.title,
                                handleSave: this.handleSave
                            })
                        };
                    })
                    : []
            };
        });

        return (
            <div >
                <Modal  open="true"  onClose={()=> console.log(false)}>
                <div>
                    <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>Add a row</Button>
                    <Tabs type="card" defaultActiveKey={0}>
                    {sourceNames.map((sourceName,index) => {
                        const columns=this.getDataSource(sourceName)
                        return <Tabs.TabPane tab={sourceName} key={index}><Table
                         bordered dataSource={dataSource} columns={columns} 
                        /></Tabs.TabPane>
                    })
                    }
                    </Tabs>
                    <Button onClick={this.handleSaveModal} style={{ marginRight: "20px" }} type="primary">Save and Exit</Button>
                    <Button onClick={() => this.props.history.push("/scenarios")}>Cancel</Button>
               </div>

                </Modal>
            </div>
        );
    }

    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false
        });
    };

}

export default ComparisionTolerance;