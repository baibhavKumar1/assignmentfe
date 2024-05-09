// export const SingleOrg=()=>{
//     return(
//        <div>Hio</div>
//     )   
//    }
import {ArrowLeftOutlined,MoreOutlined,MailOutlined} from '@ant-design/icons'
import Image from 'next/image';
const SingleOrg: React.FC = () => {
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
                <MoreOutlined/>
            </div>
            </div>
            <div>
            <p className="line-clamp-2 ">Zeko Tech is an end-to-end guest interactions platform that makes hotel...</p>
            </div>
        </div>
      </>
    );
  };
  
  export default SingleOrg;