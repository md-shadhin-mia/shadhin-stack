
import {Avatar, Space, Tooltip, Typography} from "antd";
import {FacebookOutlined, GithubOutlined, LinkedinOutlined, TwitterOutlined} from "@ant-design/icons";

const {Title, Paragraph} = Typography

export const SiderNavInfo = () => {
    return (
        <Space direction="vertical" align="center">
            <Title level={3}>Full Name</Title>
            {/*Todo: Add Avatar Link*/}
            <Avatar size={128} src="https://lh3.googleusercontent.com/a/AAcHTtf5j60FSy1Y5orAoxnqUiF0YIcQgf2DrAAQ83F6q-jF1Q=s360-c-no" />
            <Space>
                <Tooltip title="Facebook">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <FacebookOutlined style={{ fontSize: '24px', color: '#3b5998' }} />
                    </a>
                </Tooltip>
                <Tooltip title="Twitter">
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <TwitterOutlined style={{ fontSize: '24px', color: '#1da1f2' }} />
                    </a>
                </Tooltip>
                <Tooltip title="LinkedIn">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                        <LinkedinOutlined style={{ fontSize: '24px', color: '#0077b5' }} />
                    </a>
                </Tooltip>
                <Tooltip title="GitHub">
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                        <GithubOutlined style={{ fontSize: '24px', color: '#333' }} />
                    </a>
                </Tooltip>
            </Space>
            <Paragraph style={{ textAlign: 'center' }}>
                This is a short bio of the portfolio owner. You can write something about yourself
            </Paragraph>
        </Space>
    );
};