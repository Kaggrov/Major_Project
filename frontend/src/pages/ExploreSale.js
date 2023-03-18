import React,{useState,useEffect} from 'react'
import { Col, Row } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import {useNavigate} from 'react-router-dom';
import axios from '../axios'
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
                productList.map((val)=> {

                    if(val.type==="sale"){
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
                                        <ShoppingCartOutlined key="shop" style={{fontSize:"25px"}}/>
                                    ]}
                                    hoverable={true}
                                    onClick={()=>{
                                        navigate('/productSale',{state:{Image:`${val.imgName}`,name:`${val.title}`,price:`${val.price}`}});

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
                        )
                    }
                    else {
                        return ""
                    }
                })
            }
            
        </Row>
            
    </div>
    
  )
}

export default ExploreSale