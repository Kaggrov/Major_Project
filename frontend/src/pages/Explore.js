import React from 'react'
import { Col, Row } from 'antd';
import {ShoppingFilled} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import {useNavigate} from 'react-router-dom';
const { Meta } = Card;

const Explore = () => {

    const navigate = useNavigate();
    const Dummy_Details = [
        {
            image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            title:"Card title",
            description:"This is the Description",
            rent:"1500"
    
        },
        {
            image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            title:"Card title",
            description:"This is the Description",
            rent:"1500"
    
        },
        {
            image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            title:"Card title",
            description:"This is the Description",
            rent:"1500"
    
        },
        {
            image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            title:"Card title",
            description:"This is the Description",
            rent:"1500"
    
        },
        {
            image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            title:"Card title",
            description:"This is the Description",
            rent:"1500"
    
        },
        {
            image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            title:"Card title",
            description:"This is the Description",
            rent:"1500"
    
        },
        {
            image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            title:"Card title",
            description:"This is the Description",
            rent:"1500"
    
        },
        {
            image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            title:"Card title",
            description:"This is the Description",
            rent:"1500"
    
        },
        {
            image:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
            title:"Card title",
            description:"This is the Description",
            rent:"1500"
    
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
                                <ShoppingFilled key="shop" style={{fontSize:"25px"}}/>
                            ]}
                            hoverable={true}
                            onClick={()=>{
                                navigate('/product',{state:{Image:`${val.image}`,name:`${val.title}`,rent:`${val.rent}`}});

                            }}
                        >
                            <h3>Rent Per Month :- {val.rent} Only</h3>
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

export default Explore