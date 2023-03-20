import React, { useState } from "react";
import {
  Space,
  Table,
  Tag,
  Modal,
  Form,
  Input,
  InputNumber,
  Row,
  Col,
  Button,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
import HModal from "./components/Modal";
import { ExclamationCircleFilled } from "@ant-design/icons";

export interface DataType {
  key: string | number;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

let initData: DataType[] = [];

for (let i = 0; i < 30; i++) {
  initData.push({
    key: i,
    name: `Edward King ${i}`,
    age: i + 2,
    address: `London, Park Lane no. ${i}`,
    tags: ["COOL", "TEACHER"],
  });
}

const HTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const [data, setData] = useState<DataType[]>(initData);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  const [open, setOpen] = useState(false);
  const [itemData, setItemData] = useState(null);

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="default" onClick={(e) => update(record)}>
            Edit
          </Button>
          <Button danger type="default" onClick={(e) => remove(record)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const update = (item: any) => {
    setItemData(item);
    setOpen(true);
  };

  const remove = (item: any) => {
    const { confirm } = Modal;
    confirm({
      title: "Do you Want to delete these items?",
      icon: <ExclamationCircleFilled />,
      onOk() {
        let newData = data.filter(({ key }) => key !== item.key);
        setData(newData);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  const onFinish = (values: any) => {
    let searchData = initData.filter((itemData) => {
      if (values.name && !values.age) {
        return itemData.name.includes(values.name);
      } else if (!values.name && values.age) {
        return itemData.age === values.age;
      } else if (values.name && values.age) {
        return (
          itemData.name.includes(values.name) && itemData.age === values.age
        );
      } else {
        return true;
      }
    });
    setData(searchData);
  };

  const handleCreate = () => {
    setOpen(true);
  };

  const handleRemoveSelected = () => {
    let result = data.filter(
      (itemData) => !selectedRowKeys.includes(itemData.key)
    );
    setData(result);
    setSelectedRowKeys([]);
  };

  return (
    <div>
      <Form onFinish={onFinish} form={form}>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="name" name="name">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="age" name="age">
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              <Space wrap>
                <Button type="primary" htmlType="submit">
                  Search
                </Button>
                <Button type="default" htmlType="button" onClick={onReset}>
                  Reset
                </Button>
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Space
        wrap
        className="operate-area"
        style={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Button danger type="primary" onClick={handleRemoveSelected}>
          Delete Selected
        </Button>
        <Button type="primary" onClick={handleCreate}>
          Create
        </Button>
      </Space>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        bordered
        size="small"
      />
      <HModal
        open={open}
        setOpen={setOpen}
        item={itemData}
        setData={setData}
        data={data}
      />
    </div>
  );
};
export default HTable;
