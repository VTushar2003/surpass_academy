import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import { Col, Form, Input, Row, Select, Button, Table, Space, Tooltip, Popconfirm } from 'antd';
import TableComp from './TableComp';
import { useGlobalContext } from '../Context/Context';

const { Option } = Select;

const AddUser = () => {
    const [form] = Form.useForm();
    const { userData, addUser, handleDelete } = useGlobalContext();

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(7); // You can change this number to control users per page

    const handleFinish = (values) => {
        const newData = {
            ...values,
            key: Math.floor(Math.random() * 10000), // Generate a random key for the new user
            number: userData.length + 1,
        };
        addUser(newData); // Use the addUser function from context
        form.resetFields();
    };

    // Calculate pagination range
    const startIdx = (currentPage - 1) * usersPerPage + 1;
    const endIdx = Math.min(currentPage * usersPerPage, userData.length);

    // Logic for enabling/disabling Previous and Next buttons
    const totalPages = Math.ceil(userData.length / usersPerPage);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const columns = [
        {
            title: 'Sr. No.',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Mobile No.',
            dataIndex: 'mobile',
            key: 'mobile',
        },
        {
            title: 'Roles',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => (
                <Space>
                    <button>
                        <i className="ri-pencil-fill"></i>
                    </button>
                    <Popconfirm
                        title={`Are You Sure to Delete user ${record.name}?`}
                        onConfirm={() => handleDelete(record.key)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <button>
                            <i className="ri-delete-bin-fill"></i>
                        </button>
                    </Popconfirm>
                </Space>
            )
        },
    ];

    return (
        <AdminLayout>
            <Form
                form={form}
                layout='vertical'
                onFinish={handleFinish}
            >
                <TableComp title="Add User">
                    <Row gutter={16} className='mt-3 px-6 font-semibold'>
                        <Col xs={24} sm={12} md={7}>
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[{ required: true, message: 'Please input your name!' }, { min: 3, message: 'Name must be at least 3 characters!' }]}
                            >
                                <Input placeholder="Name" className='bg-[#d9d9d9]' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={7}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
                            >
                                <Input placeholder="Email" className='bg-[#d9d9d9]' type='email' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={5}>
                            <Form.Item
                                label="Mobile No."
                                name="mobile"
                                rules={[{ required: true, message: 'Please input your mobile number!' }, { pattern: /^\d{10}$/, message: 'Mobile number must be 10 digits!' }]}
                            >
                                <Input placeholder="+91" className='bg-[#d9d9d9]' type='number' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={5}>
                            <Form.Item
                                label="Role"
                                name="role"
                                rules={[{ required: true, message: 'Please select a role!' }]}
                            >
                                <Select placeholder="Select role">
                                    <Option value="admin">Admin</Option>
                                    <Option value="teacher">Teacher</Option>
                                    <Option value="staff">Staff</Option>
                                    <Option value="accountant">Accountant</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    {/* Row for Username, Password, Status */}
                    <Row gutter={16} className='px-6 font-semibold'>
                        <Col xs={24} sm={12} md={8}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }, { min: 5, message: 'Username must be at least 5 characters!' }]}
                            >
                                <Input placeholder="Username" className='bg-[#d9d9d9]' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }, { min: 8, message: 'Password must be at least 8 characters!' }]}
                            >
                                <Input.Password placeholder="Password" className='bg-[#d9d9d9]' />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <Form.Item
                                label="Status"
                                name="status"
                                rules={[{ required: true, message: 'Please select a status!' }]}
                            >
                                <Select placeholder="Select Status">
                                    <Option value="demo">Demo</Option>
                                    <Option value="active">Active</Option>
                                    <Option value="inactive">Inactive</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Submit Button */}
                    <Row gutter={16} className='px-6 font-semibold'>
                        <Col>
                            <Button
                                htmlType="submit"
                                className='rounded-2xl font-semibold px-6 py-2 mb-5 bg-[#d9d9d9]'
                            >
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </TableComp>
            </Form>

            {/* ADDED USERS LIST */}
            <TableComp title="List Users" extraStyles="mt-5">
                <Table
                    columns={columns}
                    dataSource={userData.slice(startIdx - 1, endIdx)} // Adjusted to show paginated data
                    size="small"
                    className='p-6 text-[#bebebe]'
                    pagination={false}
                    bordered
                />
                <div className='px-6 space-y-5'>
                    <hr className='bg-[#bebebe] h-0.5' />
                    <div className='flex justify-between'>
                        <span>
                            <h3>Showing {startIdx} to {endIdx} of {userData.length} entries</h3>
                        </span>
                        {/* Pagination Controls */}
                        <div className='text-end space-y-3 pb-3'>
                            <div className='flex items-center gap-3'>
                                <button
                                    className='bg-white px-3 py-1 rounded-md  hover:bg-[#bebebe] font-medium'
                                    onClick={handlePrevious}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>
                                <button
                                    className='bg-white px-3 py-1 rounded-md hover:bg-[#bebebe] font-medium'
                                    onClick={handleNext}
                                    disabled={currentPage === totalPages ? true : false}
                                >
                                    Next
                                </button>
                            </div>
                            <div>
                                <span>Page {currentPage} of {totalPages}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </TableComp>
        </AdminLayout>
    );
};

export default AddUser;
