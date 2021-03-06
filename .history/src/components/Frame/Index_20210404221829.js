import React from 'react'
import { Layout, Menu, Breadcrumb, Dropdown, Avatar } from 'antd'
import { withRouter } from 'react-router-dom'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  DownOutlined,
} from '@ant-design/icons'
import logo from './logo.png'
import { adminRoutes } from '../../routes'
import './frame.css'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const routes = adminRoutes.filter((route) => route.isShow)
function Index(props) {
  const popMenu = (
    <Menu>
      <Menu.Item key="noti">通知中心</Menu.Item>
      <Menu.Item key="setting">设置</Menu.Item>
      <Menu.Item key="logOut">退出</Menu.Item>
    </Menu>
  )
  return (
    <Layout>
      <Header className="header" style={{ backgroundColor: '#428bca' }}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Dropdown overlay={popMenu}>
          <div>
            <Avatar>M</Avatar>
            <span style={{color="#fff"}}>管理员</span>
            <DownOutlined />
          </div>
        </Dropdown>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {routes.map((route) => {
              return (
                <Menu.Item
                  key={route.path}
                  onClick={(p) => props.history.push(p.key)}
                >
                  {route.title}
                </Menu.Item>
              )
            })}
          </Menu>
        </Sider>
        <Layout style={{ padding: '16px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default withRouter(Index)
