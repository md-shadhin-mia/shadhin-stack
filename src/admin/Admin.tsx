import React from 'react';
import { Layout, Menu, Avatar, Dropdown, Badge, Input } from 'antd';
import type {MenuProps} from 'antd';
import Logo from "../assets/react.svg"
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  BellOutlined,
  MailOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import SideMenus from './Components/SideMenus';

const { Header, Sider, Content } = Layout;

const AvatarMenusItem: MenuProps['items'] =[
  {
    key:1,
    label:(<div><UserOutlined /> Profile</div>),
  },
  {
    key:2,
    label:(<div><SettingOutlined /> Settings</div>),
  },
  {
    key:3,
    label:(<div><LogoutOutlined /> Sign Out</div>),
  },
] 


const AdminPanel = () => {

  const menu = (
    <Menu>
      <Menu.Item key="profile">
        
      </Menu.Item>
      <Menu.Item key="settings">
        <SettingOutlined /> Settings
      </Menu.Item>
      <Menu.Item key="logout">
        <LogoutOutlined /> Sign Out
      </Menu.Item>
    </Menu>
  );

  
  return (
    <Layout style={{ minHeight: '100vh', minWidth:"100vw" }}>
      <Sider
        breakpoint='md'
        collapsedWidth={0}>
        {/* <div
          style={{
            height: '32px',
            margin: '16px',
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        /> */}
        <SideMenus />
      </Sider>
      <Layout>
      <Header style={{ background: '#fff', padding: 0 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={Logo}
                    alt="Logo"
                    style={{ height: '32px', marginRight: '16px' }}
                  />
                  <Input.Search placeholder="Search" style={{ width: 200 }} />
                  </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Badge dot>
                <BellOutlined style={{ fontSize: '18px', marginRight: '16px' }} />
              </Badge>
              <Badge dot>
                <MailOutlined style={{ fontSize: '18px', marginRight: '16px' }} />
              </Badge>
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                  <Avatar size={32} icon={<UserOutlined />} />
                </a>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content style={{ margin: '16px' }}>
          <h1>here is main content</h1>
        </Content> 
      </Layout>
    </Layout>
  );
};

export default AdminPanel;
