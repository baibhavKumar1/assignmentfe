import { Tabs } from "antd";

const item = [
    {
        label: `Experience`,
        key: '1',
        children: <div>
            <div>
                <img/>
                <div>
                    <p>Co-Founder & CTO</p>
                    <div className="flex gap-3"><p>Zeko</p><p>Nov 2022 - Present</p></div>
                </div>
            </div>
            <div>
                <img/>
                <div>
                    <p>Co-Founder & CTO</p>
                    <div className="flex gap-3"><p>Zeko</p><p>Nov 2022 - Present</p></div>
                </div>
            </div>
            <div>
                <img/>
                <div>
                    <p>Co-Founder & CTO</p>
                    <div className="flex gap-3"><p>Zeko</p><p>Nov 2022 - Present</p></div>
                </div>
            </div>
        </div>,
    },
    {
        label:`Education(2)`,
        key:'2',
        children:<div>
            <div>
                <img/>
                <div>
                    <p>Birla Institute of Technology and Science, Pilani</p>
                    <p>Bachelor of Technology, Electrical, Electronics and Communications Engineering 2018-2022</p>
                </div>
            </div>
            <div>
                <img/>
                <div>
                    <p>Birla Institute of Technology and Science, Pilani</p>
                    <p>Bachelor of Technology, Electrical, Electronics and Communications Engineering 2018-2022</p>
                </div>
            </div>
        </div>
    }
]
const SingleUser: React.FC = () => {
    return (
        <div>
            <div>
                <div>
                    <img />
                </div>
                <div>
                    <p>Prateek Yadav</p>
                    <div><p>Co-Founder & CTO @ Zeko | Building SaaS for Hotels</p></div>
                </div>
                <div>35</div>
            </div>
            <div>
                <Tabs items={item}/>
            </div>
        </div>
    )
}

export default SingleUser;