import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, ProfileOutlined, PlusCircleFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

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

const items: MenuProps['items'] = [
    getItem('Profiles', 'profile', <ProfileOutlined />, [
      getItem(<Link to={"/admin/"}></Link>, 'mkpf', <PlusCircleFilled/>),
      getItem('Item 2', 'mklist', <PlusCircleFilled />),
    ]),
  
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
  
    { type: 'divider' },
  
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  
    getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group'),
  ];
  

function SideMenus() {
    return (
        <Menu
            items={items}
            mode='inline'
        />
    );
}

export default SideMenus;