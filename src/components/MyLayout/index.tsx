import React from "react";

import { Layout, Menu, Breadcrumb, Avatar, Dropdown } from "antd";
import {
  DesktopOutlined,
  HomeOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import Title from "antd/lib/skeleton/Title";
import Search from "antd/lib/input/Search";
import WhoToRead from "../WhoToRead";

import "./MyLayout.css";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const MyLayout: React.FC<any> = ({ children }) => {
  const history = useHistory();
  const exitUser = () => {
    history.push("/login");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to='/user'>Профиль</Link>
      </Menu.Item>
      <Menu.Item onClick={exitUser}>Выход</Menu.Item>
    </Menu>
  );
  const onSearch = (value: any) => console.log(value);

  const users: any = localStorage.getItem("user");
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider className='sidebar'>
        <div className='logo' />
        <Menu theme='light' defaultSelectedKeys={["1"]} mode='inline'>
          <Menu.Item
            className='menu__li'
            key='1'
            icon={<HomeOutlined className='menu__li' />}
          >
            <Link to='/'> Главная</Link>
          </Menu.Item>

          <Menu.Item
            className='menu__li'
            key='2'
            icon={<UserOutlined className='menu__li' />}
          >
            <Link to='/user'>Профиль</Link>
          </Menu.Item>
        </Menu>

        <Dropdown overlay={menu} placement='topCenter' arrow>
          <div className='sidebar__user'>
            <Avatar size='large' icon={<UserOutlined />} />
            <strong className='sidebar__user-name'>
              {JSON.parse(users).name}
            </strong>
          </div>
        </Dropdown>
      </Sider>

      <Layout className='site-layout'>
        {/* <Header className='site-layout-background' style={{ padding: 0 }} /> */}
        <Content className='mylayout__content' style={{ margin: "0 0px" }}>
          <div
            className='site-layout-background'
            style={{ padding: 0, minHeight: 360, minWidth: 360 }}
          >
            {children}
          </div>
        </Content>

        <Sider className='sidebar-right'>
          {" "}
          <Search
            className='sidebar-right__search'
            placeholder='Поиск в Твиттере'
            size='large'
            allowClear
            onSearch={onSearch}
          />
          <WhoToRead />
        </Sider>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
