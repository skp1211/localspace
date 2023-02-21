import { Button, Card, Form, Input, message } from "antd";
import React from "react";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const onFinish = (values) => {
  console.log("Received values of form: ", values);
};
const onFinishFailed = () => {
  message.error("Submit failed!");
};
function Edit(props) {
  return (
    <Card title="商品编辑">
      <Form
        {...formItemLayout}
        name="register"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="名字"
          name="name"
          rules={[{ required: true, message: "请输入商品名字" }]}
        >
          <Input placeholder="请输入商品名字" />
        </Form.Item>
        <Form.Item
          name="price"
          label="价格"
          rules={[{ required: true, message: "请输入商品价格！" }]}
        >
          <Input placeholder="请输入商品价格" />
        </Form.Item>
        <Form.Item label="">
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Edit;
