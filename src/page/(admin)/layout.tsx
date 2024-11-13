import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: <Link to="/admin">Dashboard</Link>,
  },
  {
    key: "Product",
    label: <Link to="/admin/product">Product</Link>,
  },
];

const items2: MenuProps["items"] = [
  {
    key: "sub1",
    icon: <UserOutlined />,
    label: <Link to="/admin">Dashboard</Link>,
    // children: [
    //   { key: "1", label: <Link to="/admin/user/option1">Option 1</Link> },
    //   { key: "2", label: <Link to="/admin/user/option2">Option 2</Link> },
    //   { key: "3", label: <Link to="/admin/user/option3">Option 3</Link> },
    //   { key: "4", label: <Link to="/admin/user/option4">Option 4</Link> },
    // ],
  },
  {
    key: "sub2",
    icon: <LaptopOutlined />,
    label: "Product",
    children: [
      { key: "1", label: <Link to="products">List product</Link> },
      { key: "2", label: <Link to="/admin/product/add">Add product</Link> },
      {
        key: "3",
        label: <Link to="/admin/product/edit/:id">Edit product</Link>,
      },
    ],
  },
  {
    key: "sub3",
    icon: <NotificationOutlined />,
    label: "Notifications",
    children: [
      {
        key: "9",
        label: <Link to="/admin/notification/option1">Option 9</Link>,
      },
      {
        key: "10",
        label: <Link to="/admin/notification/option2">Option 10</Link>,
      },
      {
        key: "11",
        label: <Link to="/admin/notification/option3">Option 11</Link>,
      },
      {
        key: "12",
        label: <Link to="/admin/notification/option4">Option 12</Link>,
      },
    ],
  },
];

const LayoutAdmin: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb
            items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
            style={{ margin: "16px 0" }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
