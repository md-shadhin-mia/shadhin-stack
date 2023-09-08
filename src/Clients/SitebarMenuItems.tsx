
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}


/*
*
    About Me
    Portfolio
    Services & Pricing
    Resume
    Blog
    Contact
*
* */
const items: MenuProps['items'] = [
    getItem('About Me', 'About_Me', <MailOutlined />),
    getItem('Portfolio', 'Portfolio', <MailOutlined />),
    getItem('Services & Pricing', 'Services_Pricing', <MailOutlined />),
    getItem('Resume', 'Resume', <MailOutlined />),
    getItem('Blog', 'Blog', <MailOutlined />),
    getItem('Contact', 'Contact', <MailOutlined />)
];


type Props = {

};
export const SitebarMenuItems = (props: Props) => {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <Menu
            onClick={onClick}
            // defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            // mode="inline"
            items={items}
        />
    );
};