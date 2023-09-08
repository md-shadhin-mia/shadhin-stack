// @flow
import * as React from 'react';
import {Button, Divider, Layout, theme} from 'antd';
import {MenuUnfoldOutlined} from "@ant-design/icons";
import {SitebarMenuItems} from "./SitebarMenuItems.tsx";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import {Outlet} from "react-router-dom";
import {SiderNavInfo} from "./SiderNavInfo.tsx";

const { Header, Content, Footer, Sider } = Layout;

type Props = {

};

export function ClientLayout(props: Props) {

    const [collapsed, setCollapsed] = React.useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const screen = useBreakpoint();
    return (
        <Layout style={{minWidth:"100vw", maxWidth:"100vw", overflowX:"hidden"}} hasSider>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    setCollapsed(broken)
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                collapsed={collapsed}
                trigger={null}
                width={280}
                style={{
                    minHeight: "100vh",
                    maxHeight: "100vh",
                    background: colorBgContainer,
                    height: '100vh',
                    overflow:"auto",
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    zIndex:1024
                }}>
                <SiderNavInfo />
                <Divider />
                <SitebarMenuItems />
            </Sider>
            <Layout style={{marginLeft: screen.lg ? 280 : 0}}>
                {!screen.lg && <Header style={{padding: 0, background: colorBgContainer}}>
                    <Button type={"ghost"} onClick={() => setCollapsed(!collapsed)}><MenuUnfoldOutlined/></Button>
                </Header>}
                <Content>
                    <Outlet />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}