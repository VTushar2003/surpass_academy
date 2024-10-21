import React, { useState, useEffect } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    ArrowLeftOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Layout, Menu, theme } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../Context/Context';
const { Header, Sider, Content } = Layout;

const AdminLayout = ({ children }) => {

    const { user, handleLogout } = useGlobalContext();

    const share = <i className="ri-share-line" />;
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const location = useLocation(); // Get the current route path
    const [selectedKey, setSelectedKey] = useState(['1']); // Initial selected key state
    const navigate = useNavigate(); // Hook for navigation
    const [path, setPath] = useState("")
    const currentPath = location.pathname;



    useEffect(() => {
        if (currentPath === '/Dashboard') {
            setSelectedKey(['1']);
            setPath("Dashboard")
        } else if (currentPath === '/Adduser') {
            setSelectedKey(['1.3']);
            setPath("Add User")
        } else if (currentPath === '/WeeklyChallenge') {
            setSelectedKey(['9']);
            setPath("WeeklyChallenge")
        }
    }, [currentPath]);

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} className='h-auto bg-white'>
                <div className="demo-logo-vertical">
                    <img src="./images/surpasslogotrans.png" alt="Logo" className='bg-white' />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }} className='h-full '>
                    {/* Menu Items */}
                    <Menu
                        theme="light"
                        mode="inline"
                        selectedKeys={selectedKey}
                        style={{ flex: 1 }}

                        items={[
                            {
                                key: '1',
                                icon: <i className="ri-layout-3-fill" />,
                                label: <Link to="/Dashboard">Dashboard</Link>,
                            },
                            {
                                key: '2',
                                icon: share,
                                label: 'Master',
                                children: [
                                    {
                                        key: '1.1',
                                        label: "Role",
                                    },
                                    {
                                        key: '1.2',
                                        label: "User Right",
                                    },
                                    {
                                        key: '1.3',
                                        label: <Link to="/Adduser">User</Link>,
                                    },
                                ],
                            },
                            {
                                key: '3',
                                icon: share,
                                label: <Link to="/Student">Student</Link>,
                            },
                            {
                                key: '4',
                                icon: share,
                                label: <Link to="/Course">Course</Link>,
                            },
                            {
                                key: '5',
                                icon: share,
                                label: 'Videos',
                            },
                            {
                                key: '6',
                                icon: share,
                                label: 'Manage Course',
                            },
                            {
                                key: '7',
                                icon: share,
                                label: 'Live Chat',
                            },
                            {
                                key: '8',
                                icon: share,
                                label: 'Activities',
                            },
                            {
                                key: '9',
                                icon: share,
                                label: <Link to='/WeeklyChallenge'>Weekly Challenge</Link>,
                            },
                            {
                                key: '10',
                                icon: share,
                                label: 'Live Classes',
                            },
                        ]}
                    />
                    {/* Logout Section at Bottom */}
                    <Menu

                        theme="light"
                        mode="inline"
                        style={{ borderTop: '1px solid #f0f0f0' }}
                        items={[
                            {
                                key: '11',
                                icon: <i className="ri-logout-box-r-fill" />,
                                label: <Link onClick={handleLogout} to="/Login">Logout</Link>,
                            },
                        ]}
                    />
                </div>
            </Sider>
            <Layout>
                <Header
                    className='flex justify-between relative'
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <div className='flex items-center'>
                        {/* Go Back Button */}
                        <Button
                            type="text"
                            icon={<ArrowLeftOutlined />}
                            onClick={() => navigate(-1)} // Go back to the previous route
                            style={{
                                fontSize: '16px',
                                backgroundColor: "#f0f0f0",
                                marginLeft: "25px",
                                width: 38,
                                height: 38,
                            }}

                        />
                    </div>
                    <h1 className='absolute left-20 text-2xl font-semibold  top-4'>{path}</h1>
                    <div className='flex items-center justify-evenly w-36 border-l-[1.5px] border-slate-400 my-2'>
                        <Avatar
                            size={{
                                xs: 24,
                                sm: 32,
                                md: 30,
                                lg: 40,
                                xl: 40,
                            }}
                            icon={<UserOutlined />}
                        />
                        <h1 className='text-base font-semibold truncate max-w-[4rem]'>
                            {user.username}
                        </h1>
                    </div>
                </Header>
                <Content
                    className='h-fit'
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
