import React, { useState } from "react";
import { Table, Button, Input, Form } from "antd";
import {
  CloudDownloadOutlined,
  EditOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import styles from "./JobTable.module.scss";

interface DataType {
  key: string;
  name: string;
  phone: string;
  assigned: string;
  type: string;
  schedule: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Client Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
    defaultSortOrder: "descend",
    sorter: (a: any, b: any) => a.name.length - b.name.length,
  },
  {
    title: "Phone",
    className: "column-money",
    dataIndex: "phone",
    align: "right",
    sorter: (a: any, b: any) => a.phone - b.phone,
  },
  {
    title: "Techs Assigned",
    dataIndex: "assigned",
    sorter: (a: any, b: any) => a.assigned - b.assigned,
  },
  {
    title: "Job Type",
    dataIndex: "type",
    sorter: (a: any, b: any) => a.type - b.type,
  },
  {
    title: "Scheduled",
    dataIndex: "scheduled",
    sorter: (a: any, b: any) => a.scheduled - b.scheduled,
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    phone: "13384848484",
    assigned: "New York No. 1 Lake Park",
    type: "service",
    schedule: "2023-09-09",
  },
  {
    key: "2",
    name: "Jim Green",
    phone: "13384848484",
    assigned: "New York No. 1 Lake Park",
    type: "service",
    schedule: "2023-09-09",
  },
  {
    key: "3",
    name: "Joe Black",
    phone: "13384848484",
    assigned: "New York No. 1 Lake Park",
    type: "service",
    schedule: "2023-09-09",
  },
];

// function debounce(fn: any, delay: number) {
//   let timer: any = null;
//   return function () {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply();
//     }, delay);
//   };
// }

const TableHeader: React.FC = (props: any) => {
  const [form] = Form.useForm();

  const handleKeyUp = (e: any) => {
    if (e.currentTarget === "") {
      props.setDataSource(data);
    } else {
      const result = data.filter((item: any) =>
        item.name.toLowerCase().includes(e.currentTarget.value.toLowerCase())
      );
      props.setDataSource(result);
    }
  };

  return (
    <div className={styles.jobTableHeader}>
      <div className={styles.jobTableHeaderTitle}>Jobs</div>
      <div className={styles.jobTableHeaderRight}>
        <Form layout={"inline"} form={form} style={{ maxWidth: 600 }}>
          <Form.Item>
            <Input
              placeholder="search"
              prefix={<SearchOutlined />}
              onKeyUp={handleKeyUp}
            />
          </Form.Item>
          <Form.Item>
            <Button icon={<CloudDownloadOutlined />} type="primary">
              Export
            </Button>
          </Form.Item>
          <Form.Item>
            <Button icon={<EditOutlined />} type="primary">
              Edit Fields
            </Button>
          </Form.Item>
          <Form.Item>
            <Button icon={<PlusOutlined />} type="primary">
              Add Job
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const JobTable: React.FC = () => {
  const [dataSource, setDataSource] = useState(data);
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      bordered
      title={() => TableHeader({ dataSource, setDataSource })}
      scroll={{ x: 800, y: 300 }}
    />
  );
};

export default JobTable;
