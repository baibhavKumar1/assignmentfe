'use client'
import { useState } from 'react';
import {
    BtnBold,
    BtnItalic,
    Editor,
    EditorProvider,
    BtnBulletList,
    BtnClearFormatting,
    BtnUnderline,
    Toolbar
} from 'react-simple-wysiwyg';
import { MenuProps } from 'antd';
import { ArrowLeftOutlined, MoreOutlined, HomeOutlined, UserOutlined, LinkedinOutlined, MailOutlined, DownOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Dropdown, Tabs } from 'antd';
import Image from 'next/image';
const SingleOrg: React.FC = () => {
    const [value, setValue] = useState('simple text');

    function onChange(e: any) {
        setValue(e.target.value);
    }
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
    const item = [
        {
            label: `Overview`,
            key: '1',
            children: <p>Hi</p>,
        },
        {
            label: `Founder Details`,
            key: '2',
            children:
                <div className='flex flex-col gap-5'>
                    <div className='flex justify-between p-1'>
                        <p>Founder Details</p>
                        <EditOutlined />
                    </div>
                    <div>
                        <div className='w-1/4'>
                            <img />
                        </div>
                        <div className='w-3/4'>
                            <div className='flex justify-between'>
                                <p>Prateek Yadav</p>
                                <div><UserOutlined /><LinkedinOutlined /></div>
                            </div>
                            <p>Co- Founder & CTO @ Zeko | Building SaaS for Hotels</p>
                            <p><HomeOutlined /> Bengaluru, Karnataka, India</p>
                            <p>Profile Score 35</p>
                        </div>
                    </div>
                    <div>
                        <div className='w-1/4'>
                            <img />
                        </div>
                        <div className='w-3/4'>
                            <div className='flex justify-between'>
                                <p>Prateek Yadav</p>
                                <div><UserOutlined /><LinkedinOutlined /></div>
                            </div>
                            <p>Co- Founder & CTO @ Zeko | Building SaaS for Hotels</p>
                            <p><HomeOutlined /> Bengaluru, Karnataka, India</p>
                            <p>Profile Score 35</p>
                        </div>
                    </div>
                </div>,
        },
        {
            label: `Notes`,
            key: '3',
            children: <div>
                <div className='flex justify-between p-1'>
                    <p>Notes</p>
                    <MoreOutlined/>
                </div>
                <div className='border flex-1 w-full rounded-lg flex flex-col min-h-60 justify-between'>
                <div className='p-1'>
                    <p>No Notes Available</p>
                </div>
                <EditorProvider>
                    <Editor value={value} onChange={onChange}>
                        <Toolbar>
                            <BtnBold />
                            <BtnItalic />
                            <BtnBulletList />
                            <BtnClearFormatting />
                            <BtnUnderline />
                        </Toolbar>
                    </Editor>
                </EditorProvider>

            </div>
            <div className='flex w-full justify-end mt-2'>
                <Button>Submit</Button>
            </div>
            </div>,
        }
    ]
    return (
        <>
            <div>
                <div className='flex items-center gap-5'>
                    <ArrowLeftOutlined />
                    <div className='flex items-center flex-1 justify-between'>
                        {/* <Image alt='img'/> */}
                        <div className='flex flex-col'>
                            <div className='flex gap-2 items-center'><p>Zeko Tech</p><p className='text-xs '>SaaS</p></div>
                            <div className='flex text-xs'><p>Source Research</p> | <p>LinkedIn</p></div>
                        </div>
                        <MailOutlined />
                        <MoreOutlined />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className="line-clamp-2 ">Zeko Tech is an end-to-end guest interactions platform that makes hotel...</p>
                    <p>htpps://///hdsdtyjghvgdf</p>
                    <div className='flex items-end gap-5'>
                        <div>
                            <p className='text-xs'>Status</p>
                            <Button>Unassigned</Button>
                        </div>
                        <div>
                            <Dropdown menu={{ items }} trigger={['click']} className='p-1 rounded'>
                                <div className='flex gap-2 items-center bg-stone-200'>
                                    <p>Click me</p>
                                    <DownOutlined />
                                </div>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <Tabs items={item} className='px-2 text-sm' size='small' />
                <div className='flex gap-5 justify-between'>
                    <Button>Skip</Button>
                    <Button>Assign Owner</Button>
                </div>
            </div>
        </>
    );
};

export default SingleOrg;