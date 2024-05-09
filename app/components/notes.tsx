import { MoreOutlined } from '@ant-design/icons'
import { Button } from 'antd';
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
export const Notes = () => {
    const [value, setValue] = useState('simple text');

    function onChange(e: any) {
        setValue(e.target.value);
    }
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between p-1'>
                <p>Notes</p>
                <MoreOutlined />
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
        </div>
    )
}