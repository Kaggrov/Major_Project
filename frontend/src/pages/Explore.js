import React from 'react'
import { Col, Row } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const Explore = () => {
  return (
    <div style={{backgroundColor:"#BEF0CB"}}>
        <Row gutter={[16, 16]} style={{margin:"15px",padding:"15px"}}>
            <Col span={8}  >
                <Card
                    style={{
                    width: 300,
                    }}
                    cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    }
                    actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
                    hoverable={true}
                    onClick={()=>{
                        console.log("IN Card")
                    }}
                >
                    <Meta
                    avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                    />
                </Card>

            </Col>
            <Col span={8} >
                <Card
                    style={{
                    width: 300,
                    }}
                    cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    }
                    actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
                    hoverable={true}
                >
                    <Meta
                    avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                    />
                </Card>

            </Col>
            <Col span={8} >
                <Card
                    style={{
                    width: 300,
                    }}
                    cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    }
                    actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
                    hoverable={true}
                >
                    <Meta
                    avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                    />
                </Card>
            </Col>

            <Col span={8} >
                <Card
                    style={{
                    width: 300,
                    }}
                    cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    }
                    actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
                    hoverable={true}
                >
                    <Meta
                    avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                    />
                </Card>
            </Col>
            <Col span={8} >
                <Card
                    style={{
                    width: 300,
                    }}
                    cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    }
                    actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
                    hoverable={true}
                >
                    <Meta
                    avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    style={{
                    width: 300,
                    }}
                    cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    }
                    actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
                    hoverable={true}
                >
                    <Meta
                    avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    style={{
                    width: 300,
                    }}
                    cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    }
                    actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
                    hoverable={true}
                >
                    <Meta
                    avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    style={{
                    width: 300,
                    }}
                    cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    }
                    actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
                    hoverable={true}
                >
                    <Meta
                    avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    style={{
                    width: 300,
                    }}
                    cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    }
                    actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
                    hoverable={true}
                >
                    <Meta
                    avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                    />
                </Card>
            </Col>
        </Row>
            
    </div>
    
  )
}

export default Explore