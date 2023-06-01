import React from 'react'
import "../less/Client.less";
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined, SettingOutlined } from '@ant-design/icons';


const items = [
    {
        label: 'Home',
        key: '/',
        icon: <HomeOutlined />
      },
      {
        label: 'Client',
        key: '/client',
        icon: <SettingOutlined />,
      },
      {
        label: "Student",
        key: '/seller',
        icon: <HomeOutlined/>
      },
    ];


const Header = () => {
    const navigate = useNavigate()
  
    const onClick = (e) => {
      navigate(e.key)
    };
  return (
   <>
   <div >
   <Menu  className="appHeader" onClick={onClick}  items={items} />
   
   </div>
   </>
  )
}

export default Header