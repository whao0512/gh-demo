import React from "react";
import {
  Layout,
  Menu,
  Form,
  Input,
  Button,
  Avatar,
  Badge,
  Row,
  Col,
} from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

import styles from "../JobTable.module.scss";

const { Header } = Layout;

const items: MenuProps["items"] = [
  {
    label: "Dashboard",
    key: "dashboard",
    icon: <MailOutlined />,
  },
  {
    label: "Schedule",
    key: "schedule",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Clients",
    key: "client",
    icon: <SettingOutlined />,
  },
  {
    label: "Jobs",
    key: "jobx",
    icon: <SettingOutlined />,
  },
  {
    label: "Team",
    key: "Team",
    icon: <SettingOutlined />,
  },
  {
    label: "Inventory",
    key: "inventory",
    icon: <SettingOutlined />,
  },
  {
    label: "Inbox",
    key: "inbox",
    icon: <SettingOutlined />,
  },
  {
    label: "Integrations",
    key: "integrations",
    icon: <SettingOutlined />,
  },
  {
    label: "LM Shift",
    key: "shift",
  },
];
const MyHeader: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className={styles.headerLeft}>
        <h3 className={styles.logoName}>Last Minutes</h3>
        <Menu mode="horizontal" defaultSelectedKeys={["2"]} items={items} />
      </div>

      <div style={{ paddingTop: 15 }} className={styles.displayNone}>
        <Form layout={"inline"} form={form} style={{ maxWidth: 600 }}>
          <Form.Item>
            <Input placeholder="Search..." />
          </Form.Item>
          <Form.Item>
            <Button icon={<MessageOutlined />} />
          </Form.Item>
          <Form.Item>
            <Badge dot>
              <Avatar shape="square" icon={<UserOutlined />} />
            </Badge>
          </Form.Item>
        </Form>
      </div>
    </Header>
  );
};

export default MyHeader;
