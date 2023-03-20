import React from "react";
import { Layout, theme } from "antd";
import MyHeader from "./components/Header/Header";
import MyCard from "./components/Card";
import JobTable from "./components/JobTable";

import styles from "./components/JobTable.module.scss";

const { Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  // const siteLayout = {
  //   padding: " 10px  50px 0",
  // };
  return (
    <Layout>
      <MyHeader />
      <Content className={styles.siteLayout}>
        <div style={{ marginBottom: 10 }}>
          <MyCard />
        </div>
        <div
          style={{ padding: 24, minHeight: 380, background: colorBgContainer }}
        >
          <JobTable />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;
