import React from 'react'
import { Col, Row } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import {useNavigate} from 'react-router-dom';
const { Meta } = Card;

const ExploreSale = () => {

    const navigate = useNavigate();
    const Dummy_Details = [
        {
            image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            title:"Card title",
            description:"This is the Description",
            price:"2000"
    
        },
        {
            image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            title:"Card title",
            description:"This is the Description",
            price:"2000"
    
        },
        {
            image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            title:"Card title",
            description:"This is the Description",
            price:"2000"
    
        },
        {
            image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            title:"Card title",
            description:"This is the Description",
            price:"2000"
    
        },
        {
            image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            title:"Card title",
            description:"This is the Description",
            price:"2000"
    
        },
        {
            image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            title:"Card title",
            description:"This is the Description",
            price:"2000"
    
        },
        {
            image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            title:"Card title",
            description:"This is the Description",
            price:"2000"
    
        },
        {
            image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            title:"Card title",
            description:"This is the Description",
            price:"2000"
    
        },
        {
            image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            title:"Card title",
            description:"This is the Description",
            price:"2000"
    
        },
    ]

  return (
    <div style={{backgroundColor:"#BEF0CB"}}>
        <Row gutter={[16, 16]} style={{margin:"15px",padding:"15px"}}>

            {
                Dummy_Details.map((val)=>(
                    <Col span={8}>
                        <Card
                            style={{
                            width: 300,
                            }}
                            cover={
                            <img
                                alt="example"
                                src={val.image}
                            />
                            }
                            actions={[
                                <ShoppingCartOutlined key="shop" style={{fontSize:"25px"}}/>
                            ]}
                            hoverable={true}
                            onClick={()=>{
                                navigate('/productSale',{state:{Image:`${val.image}`,name:`${val.title}`,price:`${val.price}`}});

                            }}
                        >
                            <h3>Price :- {val.price} Only</h3>
                            <Meta
                            avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                            title={val.title}
                            description={val.description}

                            />
                        </Card>
                    </Col>
                ))
            }
            
        </Row>
            
    </div>
    
  )
}

export default ExploreSale