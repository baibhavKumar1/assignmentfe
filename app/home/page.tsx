'use client'
import React from 'react';
import { Button, Dropdown, Tabs } from 'antd';
import { DownOutlined ,MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { NewData } from '../components/newdata';

const items: MenuProps['items'] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const operations = <div className='flex items-center gap-2 xs:hidden'>
  <p>Sort By</p>
  <Dropdown menu={{ items }} trigger={['click']} className='p-1 rounded'>
    <div className='flex gap-2 items-center bg-stone-200'>
      <p>Click me</p>
      <DownOutlined />
    </div>
  </Dropdown>
  <MenuFoldOutlined />
  <MenuUnfoldOutlined />
</div>

const item = [
  {
    label: `New (20)`,
    key: '1',
    children: <NewData/>,
  },
  {
    label: `Pipeline (60)`,
    key: '2',
    children: <p>Hi</p>,
  },
  {
    label: `Rolled Off (40)`,
    key: '3',
    children: <p>Hi</p>,
  }
]


const App: React.FC = () => {

  return (
    <>
      <Tabs tabBarExtraContent={operations} items={item} className='px-2 text-sm' size='small'/>
    </>
  );
};

export default App;