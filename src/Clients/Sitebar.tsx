import {Avatar, Layout, Space, Tooltip, Typography} from 'antd';
import {FacebookOutlined, GithubOutlined, LinkedinOutlined, TwitterOutlined} from '@ant-design/icons';
import {SitebarMenuItems} from "./SitebarMenuItems.tsx";

const { Sider } = Layout;
const { Title, Paragraph } = Typography;

const Sidebar = () => {
    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top:0,
            }}
            collapsedWidth={0}
            width={280}
            breakpoint="lg"
        >
            <div style={{ padding: '24px' }}>

            </div>
            <SitebarMenuItems />
        </Sider>
    );
};

export default Sidebar;
