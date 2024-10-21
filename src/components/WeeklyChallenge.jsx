import React from 'react'
import TableComp from './TableComp'
import AdminLayout from './AdminLayout'
import { Button, Col, Form, Input, Row, Table, Upload } from 'antd'
import RichTextEditor from './RichTextEditor'
const WeeklyChallenge = () => {

    const columns = [
        {
            title: 'Sr. No.',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Start Date',
            dataIndex: 'startdate',
            key: 'startdate',
        },
        {
            title: 'End Date',
            dataIndex: 'enddate',
            key: 'enddate',
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

    const [form] = Form.useForm();
    return (
        <>
            <AdminLayout>
                <Form form={form} layout='vertical'>
                    <TableComp title="Add Weekly Challenge">
                        <Row gutter={16} className='mt-3 px-6 font-semibold'>
                            <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                    label="Title"
                                    name="title"
                                    rules={[{ required: true, message: 'Please input your Title!' }, { min: 3, message: 'Name must be at least 3 characters!' }]}
                                >
                                    <Input placeholder="Name" className='bg-[#d9d9d9]' />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                    label="Start Date"
                                    name="startdate"
                                    rules={[{ required: true, message: 'Please select Start Date!' }]}
                                >
                                    <Input className='bg-[#d9d9d9]' type='date' />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                    label="End Date"
                                    name="enddate"
                                    rules={[{ required: true, message: 'Please select End Date!' }]}
                                >
                                    <Input className='bg-[#d9d9d9]' type='date' />
                                </Form.Item>
                            </Col>
                        </Row>
                        {/* Row for Username, Password, Status */}
                        <Row gutter={16} className='px-6 font-semibold'>
                            <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                    label="Zip Upload"
                                    name="zipupload"
                                    rules={[{ required: true, message: 'Please upload Zip File!' }]}
                                >
                                    <div className='w-[19.5rem] flex items-center justify-start rounded-lg p-1 bg-[#d9d9d9]'>
                                        <input type="text" readOnly className='bg-transparent font-medium pl-2 text-sm text-[#a3a3a3] focus:outline-none' placeholder='Zip Upload' />
                                        <Upload className='border-l-[1px] pl-2 border-[#a0a0a0]'>
                                            <button>
                                                <i className="ri-folder-open-fill" /> Browse
                                            </button>
                                        </Upload>
                                    </div>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={8}>
                                <Form.Item
                                    label="Challenge Image"
                                    name="challengeimage"
                                    rules={[{ required: true, message: 'Please upload Challenge Image!' }]}
                                >
                                    <div className='w-[19.5rem] flex items-center justify-start rounded-lg p-1 bg-[#d9d9d9]'>
                                        <input type="text" readOnly className='bg-transparent font-medium pl-2 text-sm text-[#a3a3a3] focus:outline-none' placeholder='Image' />
                                        <Upload className='border-l-[1px] pl-2 border-[#a0a0a0]'>
                                            <button>
                                                <i className="ri-folder-open-fill" /> Browse
                                            </button>
                                        </Upload>
                                    </div>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row className='w-full bg-black flex items-center justify-center'>
                            <Col className='flex items-center w-full justify-center'>
                                <RichTextEditor />
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
                <TableComp title="List Weekly Challenge">
                    <Table columns={columns}
                        size="small"
                        className='p-6 text-[#bebebe]'
                        pagination={false}
                        bordered />
                </TableComp>
            </AdminLayout>
        </>
    )
}

export default WeeklyChallenge
