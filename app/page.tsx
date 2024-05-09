import { Divider, Input, Tooltip } from "antd";
import App from "./home/page";
import { AlignLeftOutlined, AppstoreOutlined, BuildOutlined, UserOutlined, DollarOutlined, CalendarOutlined,SearchOutlined,FilterOutlined} from '@ant-design/icons'

export default function Home() {
  return (
    <div className="flex min-h-screen justify-between">
      <div className="border w-max flex flex-col *:flex *:flex-col *:items-center space-y-2 xs:hidden">
        <p className="bg-black text-white rounded-full w-max h-max p-1 mx-auto">Hi</p>
        <button><AppstoreOutlined /><p className="text-xs">WorkSpace</p></button>
        <button ><BuildOutlined /><p className="text-xs">Leads</p></button>
        <button><UserOutlined /><p className="text-xs">POI Alerts</p></button>
        <button><DollarOutlined /><p className="text-xs">Funds Tracking</p></button>
        <button><CalendarOutlined /><p className="text-xs">My Meetings</p></button>
        <Divider />
        <button><UserOutlined /><p className="text-xs">My Profile</p></button>
      </div>
      <div className="flex-1">
        <div className="flex justify-between p-2 px-8 xs:px-2">
          <div className="flex items-center gap-2">
            <AlignLeftOutlined className="hidden xs:block" />
            <p>Leads</p>
          </div>
          <Input className="w-max xs:hidden"
            placeholder="Enter your username"
            prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={
              <Tooltip title="Filter">
                <FilterOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }/>
            <div className="hidden xs:flex">
            <SearchOutlined/>
            <FilterOutlined/>
            </div>
        </div>
        <App />
      </div>
    </div>
  );
}
