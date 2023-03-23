import React, { useState } from 'react'
import img from '../assets/crop.png'
import './CropDetect.css'
import { Button, Col, Form,Row,Upload ,message} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from '../axios';

const CropDetect = () => {
    const [form] = Form.useForm();
    let image = null;

    const [data,setData] = useState();

    const formStyle = {
      maxWidth: 'none',
      padding: 24,
    };

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

    const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
        onSuccess("ok");
    }, 4000);
    image = file;
    console.log(image)
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        if(image){
            const imgForm = new FormData();
            imgForm.append('file',image,image.name)
            console.log(imgForm)

            axios.post('http://localhost:8080/detect',imgForm, {
                headers:{
                  'accept': 'application/json',
                  'Accept-Language':'en-US,en;q=0.8',
                  'Content-Type': `multipart/form-data; boundary=${imgForm._boundary}`
                }
              })
              .then((res)=>{
                console.log(res)
                setData(res.data)
              })
        }
    
    };

  return (
    <div className='page_container'>
        <div className='header_crop'>
            <h2 style={{color:"white"}}>Detect Disease for your Crop and get Solutions</h2>
            <img src={img} alt="" style={{width:"70px",height:"70px",marginLeft:"30px",borderRadius:"18px"}}></img>
        </div>

        <div className='form_base'>
            <div className='form' >

                <Form form={form} style={formStyle} onFinish={onFinish} layout="vertical">
                    <Row gutter={24}>
                        <Col span={12} style={{marginTop:"20px"}}>
                            <Form.Item name="crop" label={<strong>Upload Crop Image</strong>}>
                                <Upload {...props}
                                customRequest={dummyRequest}>
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24} style={{ textAlign: 'center' ,marginTop:"35px"}} >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>

            </div>

            {
                data &&     <div className='result_crop'>
                                <div className='title'>
                                    <h2 style={{color:"#e06d20"}}>Disease & Crop Category : </h2>
                                    <h3>{data.title.split(":")[1]}({data.title.split(":")[0]})</h3>
                                </div>
                                
                                <div className='description'>
                                    <h2>Disease Description</h2>
                                    <h4>{data.description}</h4>
                                </div>

                                <div className='prevent'>
                                    <h2>Preventive Strategies</h2>
                                    <h4>{data.prevent}</h4>
                                </div>

                                <div className='supplement'>
                                    <h2 style={{color:"#e06d20"}}>Supplements Recommended : </h2>
                                    <h3>{data.supplement}</h3>
                                </div>

                                <div style={{display:"flex",flexDirection:"row",gap:"9px"}}>
                                    <img src={`${data.supplement_image}`} alt="img" style={{height:"70px",width:"70px",
                                    border:"1px solid darkblue",
                                    borderRadius:"15px"}}></img>
                                    <Button type='link' href={data.supplement_buy} target="_blank"
                                        style={{
                                            backgroundColor:"#1266db",
                                            borderRadius:"10px",
                                            marginTop:"16px",
                                            marginLeft:"20px",
                                            color:"white"}}>
                                        Buy Now</Button>

                                </div>

                            </div>
            }

        </div>

    </div>
  )
}

export default CropDetect