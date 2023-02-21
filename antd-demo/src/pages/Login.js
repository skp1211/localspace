import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Received values of form: ", values);
};
function Login() {
  return (
    <Form
      id="components-form-demo-normal-login"
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "请输入账号!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="账号"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "请输入密码!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
