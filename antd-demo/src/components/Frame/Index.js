import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { adminRouters } from "../../routes";
import logo from "../../assets/tx.jpg";
import Icon from "@ant-design/icons/lib/components/Icon";
import { withRouter } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const routes = adminRouters.filter((route) => route.isShow);
const Index = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{ width: "100vw", height: "100vh" }}
      id="components-layout-demo-custom-trigger"
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img src={logo} alt="react项目" />
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={["2"]}>
          {routes.map((route) => {
            return (
              <Menu.Item
                key={route.path}
                onClick={(p) => props.history.push(p.key)}
              >
                <Icon type="route.icon"></Icon>
                {route.title}
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <span className="app-title">REACT管理系统</span>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default withRouter(Index);
