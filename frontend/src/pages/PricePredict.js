import React from 'react'
import { Button, Col, Form, Input, Radio, Row, Select,Slider } from 'antd';
import { useState } from 'react';
import './PricePredict.css'
import img from '../assets/resale.png'
import axios from '../axios';

const PricePredict = () => {

  const [form] = Form.useForm();

  const formStyle = {
    maxWidth: 'none',
    padding: 24,
  };

  const [rent,setRent] = useState();
  const [sale,setSale] = useState();

  const Category_map = {
    "Tractor & Power":1,
    "Soil Cultivation":2,
    "Planting":3,
    "Fertilizer":4
  }
  const BrandToInt = {
    'Ferguson':0,
    'Mahindra':1,
    'Siemens':2,
    'Bajaj':3,
    'Swaraj':4,
    'Escorts':5,
    'Sonalika':6,
    'Ace':7,
    'John Deere':8,
    'Standard':9,
    'Kartar':10,
    'Eicher':11,
    'Preet':12,
    'Agristar':13
  }

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    //const params = { values.}
    const params = {
        "Brand":BrandToInt[values.Brand],
        "Category":Category_map[values.Category],
        "Used":1 - values.Used,
        "Working_Condition":values.Working_Condition,
        "release_year": parseInt(values.release_year),
        "days_use":parseInt(values.days_use)
   
    }
    console.log(params)
    axios.post('http://localhost:8080/prediction', params)
    .then((res)=>{
        console.log(res.data);
        setRent(parseInt(res.data.data * 1132))
        setSale(parseInt(res.data.data * 124520))
    })


  };


  const BrandMap = {
    0:'John Deere',
    1:'Ace',
    2: 'Escorts',
    3: 'Sonalika',
    4: 'Eicher',
    5: 'Ferguson',
    6: 'Agristar',
    7:'Bajaj',
    8:'Mahindra',
    9: 'Preet',
    10:'Siemens',
    11:'Standard',
    12:'Swaraj',
    13:'Kartar'
  }

  const marks = {
    20:'20',
    40:'40',
    50:'50',
    70:'70',
    80:'80',
    100:'100'
  };
 
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',

  });

  return (
    <div className='page_container'>
        <div className='header1'>
            <h2 style={{color:"white"}}>Calculate Re-Sale Value of your Product</h2>
            <img src={img} alt="" style={{width:"100px",height:"100px"}}></img>

        </div>

        <div className='form_base'>
            <div className='form' >

            <Form form={form} style={formStyle} onFinish={onFinish} layout="vertical">
                <Row gutter={24}>
                    <Col span={12} style={{marginTop:"20px"}}>
                        <Form.Item label={<strong>Category</strong>} name="Category">

                            <Select
                                //onChange={handleChange}
                                placeholder="Enter the type of Product"
                                options={[
                                    {
                                    value: 'Tractor & Power',
                                    label: 'Tractor & Power',
                                    },
                                    {
                                    value: 'Planting',
                                    label: 'Planting',
                                    },
                                    {
                                    value: 'Soil Cultivation',
                                    label: 'Soil Cultivation',
                                    },
                                    {
                                    value: 'Fertilizer',
                                    label: 'Fertilizer',
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={12} style={{marginTop:"20px"}}>
                        <Form.Item label={<strong>Brand</strong>} name="Brand">

                            <Select
                                //onChange={handleChange}
                                placeholder="Enter the Company Name"
                                options={[
                                    {
                                        value: BrandMap[0],
                                        label: BrandMap[0],
                                    },
                                    {
                                        value: BrandMap[1],
                                        label: BrandMap[1],
                                    },
                                    {
                                        value: BrandMap[2],
                                        label: BrandMap[2],
                                    },
                                    {
                                        value: BrandMap[3],
                                        label: BrandMap[3],
                                    },
                                    {
                                        value: BrandMap[4],
                                        label: BrandMap[4],
                                    },
                                    {
                                        value: BrandMap[5],
                                        label: BrandMap[5],
                                    },
                                    {
                                        value: BrandMap[6],
                                        label: BrandMap[6],
                                    },
                                    {
                                        value: BrandMap[7],
                                        label:BrandMap[7],
                                    },
                                    {
                                        value: BrandMap[8],
                                        label: BrandMap[8],
                                    },
                                    {
                                        value: BrandMap[9],
                                        label: BrandMap[9],
                                    },
                                    {
                                        value: BrandMap[10],
                                        label: BrandMap[10],
                                    },
                                    {
                                        value: BrandMap[11],
                                        label: BrandMap[11],
                                    },
                                    {
                                        value: BrandMap[12],
                                        label: BrandMap[12],
                                    },
                                    {
                                        value: BrandMap[13],
                                        label: BrandMap[13],
                                    },

                                ]}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={12}style={{marginTop:"20px"}}>
                        <Form.Item label={<strong>Used Product</strong>} name="Used">
                            <Radio.Group optionType="button" buttonStyle="solid" >
                                <Radio.Button value={0}>Yes</Radio.Button>
                                <Radio.Button value={1}>No</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    
                    <Col span={12} style={{marginTop:"20px"}} >
                        <Form.Item label={<strong>Days Used</strong>} name="days_use">
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={12} style={{marginTop:"20px"}}>
                        <Form.Item label={<strong>Working Condition (%) </strong>} name="Working_Condition">
                            <Slider marks={marks} step={null} defaultValue={40} style={{width:"90%"}}/>
                        </Form.Item>

                    </Col>

                    <Col span={12} style={{marginTop:"20px"}}>
                        <Form.Item label={<strong>Manufacture Year</strong>} name="release_year">
                            <Select
                                //onChange={handleChange}
                                placeholder="Enter Manufacturing Year"
                                options={[
                                    {
                                    value: '2013',
                                    label: '2013',
                                    },
                                    {
                                    value: '2014',
                                    label: '2014',
                                    },
                                    {
                                    value: '2015',
                                    label: '2015',
                                    },
                                    {
                                    value: '2016',
                                    label: '2016',
                                    },
                                    {
                                        value: '2017',
                                        label: '2017',
                                    },
                                    {
                                        value: '2018',
                                        label: '2018',
                                    },
                                    {
                                        value: '2019',
                                        label: '2019',
                                    },
                                    {
                                        value: '2020',
                                        label: '2020',
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={24} style={{ textAlign: 'center' ,marginTop:"35px"}} >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button
                            style={{ margin: '0 8px' }}
                            onClick={() => {
                            form.resetFields();
                            }}
                        >
                            Clear
                        </Button>
                    </Col>
                </Row>
                </Form>

            </div>

            <div className='result'>
                {
                    sale && rent && <div style={{backgroundColor: "#176e54",padding: "15px",borderRadius: "25px",color: "white"}}>
                                        <h2 style={{marginBottom:"28px"}}>Estimated Vaule for Rent : ₹ {rent} per Month</h2>
                                        <h2>Estimated Value for Sale : {formatter.format(sale)} </h2>
                                    </div>
                }
            </div>

        </div>
        
    </div>
  )
}

export default PricePredict