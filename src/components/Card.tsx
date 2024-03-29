import React from "react";
import { Card, Col, Row } from "antd";

interface ICardItems {
  label: string;
  num: number;
  key: string;
}

const items: ICardItems[] = [
  {
    label: "Dashboard",
    key: "dashboard",
    num: 11,
  },
  {
    label: "Schedule",
    key: "schedule",
    num: 20,
  },
  {
    label: "Clients",
    key: "client",
    num: 3,
  },
  {
    label: "Jobs",
    key: "jobx",
    num: 5,
  },
];

const MyCard: React.FC = () => (
  <Row gutter={16}>
    <Col sm={{ span: 4, offset: 4 }}></Col>
    {items.map((item) => (
      <Col sm={{ span: 4 }} xs={{ span: 24 }} key={item.key}>
        <Card hoverable size="small" style={{ textAlign: "right" }}>
          <div>{item.num}</div>
          <div>{item.label}</div>
        </Card>
      </Col>
    ))}
  </Row>
);

export default MyCard;
