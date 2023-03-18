import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd';
import {ShoppingFilled} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import {useNavigate} from 'react-router-dom';
import axios from '../axios'
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

    const [productList,setProductList] = useState([]);

    const getData = () =>{

        axios.get('/retrieve/products')
        .then((res)=> {
          console.log(res.data);
          setProductList(res.data);
        })

    }

    useEffect(()=>{
        getData();
    },[])
  return (
    <div style={{backgroundColor:"#BEF0CB"}}>
        <Row gutter={[16, 16]} style={{margin:"15px",padding:"15px"}}>

            {
                productList.map((val)=>{
                    if(val.type ==="rent"){
                        return (
                                <Col span={8}>
                                    <Card
                                        style={{
                                        width: 300,
                                        }}
                                        cover={
                                        <img
                                            alt="example"
                                            src={`http://localhost:9000/retrieve/images/single?name=${val.imgName}`}
                                            style={{height:"200px",width:"300px"}}
                                        />
                                        }
                                        actions={[
                                            <ShoppingFilled key="shop" style={{fontSize:"25px"}}/>
                                        ]}
                                        hoverable={true}
                                        onClick={()=>{
                                            navigate('/product',{state:{Image:`${val.imgName}`,name:`${val.title}`,rent:`${val.price}`}});

                                        }}
                                    >
                                        <h3>Rent Per Month :- {val.price} Only</h3>
                                        <Meta
                                        avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                                        title={val.title}
                                        description={val.description}
                                        />
                                    </Card>
                                </Col>
                        )
                        
                    }
                    else{
                        return "";
                    }
                })
            }
            
        </Row>
            
    </div>
    
  )
}

export default Explore