import { Modal, Form, Input, InputNumber, Select } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import React, { useState } from "react";

interface PropsType {
  open: boolean;
  item?: any;
  setOpen?: any;
  setData: any;
  data?: any;
}

const HModal = (props: PropsType) => {
  const [form] = Form.useForm();

  //   form.setFieldsValue(item);
  const { open, item, setOpen, setData, data } = props;
  const onCancel = () => {
    setOpen(false);
    form.resetFields();
  };

  const onOk = () => {
    let values = form.getFieldsValue();
    let { confirm } = Modal;
    confirm({
      title: "Do you Want to save these items?",
      icon: <ExclamationCircleFilled />,
      onOk() {
        if (item?.key) {
          setData([
            ...data.filter((itemData: any) => itemData.key !== item.key),
            values,
          ]);
        } else {
          setData([...data, values]);
        }

        onCancel();
      },
      onCancel() {
        onCancel();
      },
    });
  };

  return (
    <>
      <Modal
        title="Update"
        open={open}
        onOk={onOk}
        onCancel={onCancel}
        okText="确认"
        cancelText="取消"
        destroyOnClose={true}
      >
        <Form
          form={form}
          preserve={false}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
          initialValues={item}
        >
          <Form.Item label="name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="age" name="age">
            <InputNumber />
          </Form.Item>
          <Form.Item label="tags" name="tags">
            <Select mode="multiple" allowClear placeholder="Please select">
              <Select.Option value="NICE">NICE</Select.Option>
              <Select.Option value="LOSER">LOSER</Select.Option>
              <Select.Option value="COOL">COOL</Select.Option>
              <Select.Option value="TEACHER">TEACHER</Select.Option>
              <Select.Option value="DEVELOPER">DEVELOPER</Select.Option>
              <Select.Option value="LAYER">LAYER</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="address" name="address">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default HModal;
