import { Button, Divider, Input, Select, Tabs, Typography } from "antd"
import { LinkedinFilled, ArrowsAltOutlined,EditOutlined } from '@ant-design/icons'
import { Founder } from "./founder"
import { Notes } from "./notes"

const item = [
    {
        label: `Overview`,
        key: '1',
        children: <p>Hi</p>,
    },
    {
        label: `Founder Details`,
        key: '2',
        children: <Founder/>,
    },
    {
        label: `Notes`,
        key: '3',
        children: <Notes/>,
    }
];
export const NewData = () => {
    return (
        <div className="flex h-min-screen gap-2">
            <div className="w-1/5 *:rounded h-max xs:flex-1">
                <div className="bg-black/50 p-1">
                    <p>Zeko Tech </p>
                    <div>
                        <p className="line-clamp-2">Zeko Tech is an end-to-end guest interactions platform that makes hotel...</p>
                        <div className="flex gap-2"><p>Added by : John Doe</p> | <p>4 days ago</p></div>
                    </div>
                </div>
                <Divider />
                <div>
                    <div>
                        <p>Zeko Tech </p>
                    </div>
                    <div>
                        <p className="line-clamp-2">Zeko Tech is an end-to-end guest interactions platform that makes hotel...</p>
                        <div className="flex gap-2"><p>Added by : John Doe</p> | <p>4 days ago</p></div>
                    </div>
                </div>
            </div>
            <div className="flex-1 p-1 xs:hidden">
                <div className="flex justify-between gap-2">
                    <div>
                        <div className="flex items-center gap-2">
                            <p className="rounded-full bg-black text-white p-1 px-3">.</p>
                            <p className="text-2xl">Zeko Tech</p>
                            <p>SaaS</p>
                            <LinkedinFilled /> 
                        </div>
                        <div>
                            <p>Source Research | LinkedIn</p>
                        </div>
                        <p>Zeko is an end-to-end guest interactions platform that makes hotels more efficient & profitable. With a focus on empowering hoteliers with modern tech soultions.</p>
                    </div>
                    <div className="flex items-center gap-2">
                    <ArrowsAltOutlined className="rounded-full border border-black p-1"/>
                    <EditOutlined className="rounded-full border border-black p-1"/>
                        <Button>Skip</Button>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div>
                        <Typography.Text>Status</Typography.Text>
                        <Button className="w-48"></Button>
                    </div>
                    <div>
                        <label className="text-xs">Primary Owner</label>
                        <Input />
                    </div>
                    <div>
                        <label>Secondary Owner</label>
                        <Input className="border border-dashed" />
                    </div>
                    <div>
                        <label className="text-xs text-black/30">Send message to all owners (optional)</label>
                        <Input />
                    </div>
                </div>
                <div>
                    <Tabs items={item} />
                </div>
            </div>
        </div>
    )
}