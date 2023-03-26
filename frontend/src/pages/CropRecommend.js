import React from 'react'
import { Button, Col, Form, Input, Radio, Row, Select,Slider,InputNumber } from 'antd';
import { useState } from 'react';
import axios from '../axios';
import img from "../assets/recommend.jpg"
import './CropRecommend.css'
import { details } from '../utils';



const CropRecommend = () => {

    const [form] = Form.useForm();
    const [crop,setCrop] = useState(null);

    const formStyle = {
      maxWidth: 'none',
      padding: 24,
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        const body =  {
            "nitrogen":values.nitrogen,
            "phosphorus":values.phosphorus,
            "potassium":values.potassium,
            "temp":values.potassium,
            "humidity":values.humidity,
            "pH":values.ph,
            "rainfall":values.rainfall
          }
        console.log(body)

        axios.post('http://localhost:8080/recommend', body)
        .then((res)=>{
            console.log(res.data.data);
            setCrop(res.data.data)

            // console.log(crop,details[crop])
        })

    
      }
      const [inputValueN, setInputValueN] = useState(0);
      const onChangeN = (value) => {
        if (isNaN(value)) {
          return;
        }
        setInputValueN(value);
      };

      const [inputValueP, setInputValueP] = useState(0);
      const onChangeP = (value) => {
        if (isNaN(value)) {
          return;
        }
        setInputValueP(value);
      };

      const [inputValueT, setInputValueT] = useState(0);
      const onChangeT = (value) => {
        if (isNaN(value)) {
          return;
        }
        setInputValueT(value);
      };

      const [inputValueK, setInputValuek] = useState(0);
      const onChangeK = (value) => {
        if (isNaN(value)) {
          return;
        }
        setInputValuek(value);
      };

      const [inputValueH, setInputValueH] = useState(0);
      const onChangeH = (value) => {
        if (isNaN(value)) {
          return;
        }
        setInputValueH(value);
      };

      const [inputValuepH, setInputValuepH] = useState(0);
      const onChangepH = (value) => {
        if (isNaN(value)) {
          return;
        }
        setInputValuepH(value);
      };

      const [inputValueR, setInputValueR] = useState(0);
      const onChangeR = (value) => {
        if (isNaN(value)) {
          return;
        }
        setInputValueR(value);
      };
  return (

    <div className='page_container_recommend'>
    <div className='header_recommend'>
        <h2 style={{color:"white"}}>Best crop to grow based on your Location</h2>
        <img src={img} alt="" style={{width:"85px",height:"85px",backgroundSize:"cover"}}></img>

    </div>

    <div className='form_base_recommend'>
        <div className='form_recommend' >

        <Form form={form} style={formStyle} onFinish={onFinish} layout="vertical">
            <Row gutter={24}>
                <Col span={12} style={{marginTop:"20px"}}>
                    <Form.Item label={<strong>Nitrogen Content in Soil </strong>}>

                            <Row>
                                <Col span={8}>
                                <Form.Item name="nitrogen">
                                    <Slider
                                        min={0}
                                        max={140}
                                        onChange={onChangeN}
                                        value={inputValueN}
                                    />
                                </Form.Item>
                                </Col>
                                <Col span={4}>
                                    <InputNumber
                                    min={0}
                                    max={140}
                                    style={{
                                        margin: '0 16px',
                                    }}
                                    value={inputValueN}
                                    onChange={onChangeN}
                                    />
                                </Col>
                            </Row>
                    </Form.Item>
                </Col>

                <Col span={12} style={{marginTop:"20px"}}>
                    <Form.Item label={<strong>Phosphorus Content in Soil </strong>}>

                        <Row>
                            <Col span={8}>
                            <Form.Item name="phosphorus">
                                <Slider
                                    min={5}
                                    max={145}
                                    onChange={onChangeP}
                                    value={inputValueP}
                                />
                            </Form.Item>
                            </Col>
                            <Col span={4}>
                                <InputNumber
                                min={5}
                                max={145}
                                style={{
                                    margin: '0 16px',
                                }}
                                value={inputValueP}
                                onChange={onChangeP}
                                />
                            </Col>
                        </Row>
                    </Form.Item>
                </Col>

                <Col span={12} style={{marginTop:"20px"}}>
                    <Form.Item label={<strong>Potassium Content in Soil </strong>}>

                        <Row>
                            <Col span={8}>
                            <Form.Item name="potassium">
                                <Slider
                                    min={5}
                                    max={205}
                                    onChange={onChangeK}
                                    value={inputValueK}
                                />
                            </Form.Item>
                            </Col>
                            <Col span={4}>
                                <InputNumber
                                min={5}
                                max={205}
                                style={{
                                    margin: '0 16px',
                                }}
                                value={inputValueK}
                                onChange={onChangeK}
                                />
                            </Col>
                        </Row>
                    </Form.Item>
                </Col>
                
                <Col span={12} style={{marginTop:"20px"}}>
                    <Form.Item label={<strong>Temperature in Degrees </strong>}>

                        <Row>
                            <Col span={8}>
                            <Form.Item name="temp">
                                <Slider
                                    min={8}
                                    max={44}
                                    step={0.01}
                                    onChange={onChangeT}
                                    value={inputValueT}
                                />
                            </Form.Item>
                            </Col>
                            <Col span={4}>
                                <InputNumber
                                    min={8}
                                    max={44}
                                    step={0.01}
                                style={{
                                    margin: '0 16px',
                                }}
                                value={inputValueT}
                                onChange={onChangeT}
                                />
                            </Col>
                        </Row>
                    </Form.Item>
                </Col>

                <Col span={12} style={{marginTop:"20px"}}>
                    <Form.Item label={<strong>Relative Humidity Percent </strong>}>

                        <Row>
                            <Col span={8}>
                            <Form.Item name="humidity">
                                <Slider
                                    min={14}
                                    max={100}
                                    step={0.01}
                                    onChange={onChangeH}
                                    value={inputValueH}
                                />
                            </Form.Item>
                            </Col>
                            <Col span={4}>
                                <InputNumber
                                    min={14}
                                    max={100}
                                    step={0.01}
                                style={{
                                    margin: '0 16px',
                                }}
                                value={inputValueH}
                                onChange={onChangeH}
                                />
                            </Col>
                        </Row>
                    </Form.Item>
                </Col>

                <Col span={12} style={{marginTop:"20px"}}>
                    <Form.Item label={<strong>pH Value of Soil </strong>}>

                        <Row>
                            <Col span={8}>
                            <Form.Item name="ph">
                                <Slider
                                    min={3.5}
                                    max={10}
                                    step={0.01}
                                    onChange={onChangepH}
                                    value={inputValuepH}
                                />
                            </Form.Item>
                            </Col>
                            <Col span={4}>
                                <InputNumber
                                    min={3.5}
                                    max={10}
                                    step={0.01}
                                style={{
                                    margin: '0 16px',
                                }}
                                value={inputValuepH}
                                onChange={onChangepH}
                                />
                            </Col>
                        </Row>
                    </Form.Item>
                </Col>

                <Col span={12} style={{marginTop:"20px"}}>
                    <Form.Item label={<strong>RainFall in mm</strong>}>

                        <Row>
                            <Col span={8}>
                            <Form.Item name="rainfall">
                                <Slider
                                    min={20}
                                    max={300}
                                    step={0.01}
                                    onChange={onChangeR}
                                    value={inputValueR}
                                />
                            </Form.Item>
                            </Col>
                            <Col span={4}>
                                <InputNumber
                                    min={20}
                                    max={300}
                                    step={0.01}
                                style={{
                                    margin: '0 16px',
                                }}
                                value={inputValueR}
                                onChange={onChangeR}
                                />
                            </Col>
                        </Row>
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

        {
                crop &&     <div className='result_recommend'>
                                <div className='title_crop'>
                                    <h2 style={{color:"#e06d20"}}>Suggested Crop : </h2>
                                    <h3>{crop}</h3>
                                </div>
                                
                                <div className='description_crop'>
                                    <h2>Crop Description</h2>
                                    <h4>{details[crop]["description"]}</h4>
                                </div>

                                <div className='produce'>
                                    <h2>Highest Producer in World : </h2>
                                    <h3>{details[crop]["highest"]}</h3>
                                </div>

                                <div className='usage'>
                                    <h2 style={{color:"#e06d20"}}>Crop Usage : </h2>
                                    <h3>{details[crop]["usage"]}</h3>
                                </div>

                                <div className='produce'>
                                    <h2>Current Market Price : </h2>
                                    <h3>{details[crop]["price"]}</h3>
                                </div>



                            </div>
        }

    </div>
    
    </div>

  )
}

export default CropRecommend