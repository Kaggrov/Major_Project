import { Button,Modal ,Form,Input,Upload,message } from 'antd'
import React , {useState} from 'react'
import { UploadOutlined } from '@ant-design/icons';
import axios from '../axios';

import './Admin.css'

const Admin = () => {

    const [mode,setMode] = useState("");
    let image = null;
    const handleSale = () =>{
        setOpen(true);
        setMode("sale");
    }

    const handleRent = () => {
        setOpen(true)
        setMode("rent")
    }
    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
          onSuccess("ok");
        }, 4000);
        image = file;
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

    const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
        const [form] = Form.useForm();
        return (
          <Modal
            open={open}
            title="Create a new collection"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={(e) => {
              e.preventDefault()
              form
                .validateFields()
                .then((values) => {
                  form.resetFields();
                  onCreate(values);
                })
                .catch((info) => {
                  console.log('Validate Failed:', info);
                });
            }}
          >
            <Form
              form={form}
              layout="vertical"
              name="form_in_modal"
              initialValues={{
                modifier: 'public',
              }}
            >
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[
                    {
                        required: true,
                        message: 'Please input the title of collection!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="description" label="Description">
                    <Input type="textarea" />
                </Form.Item>

                <Form.Item name="price" label="Price">
                    <Input />
                </Form.Item>

                <Form.Item name="photo" label="Photograph of Product">
                    <Upload {...props}
                    customRequest={dummyRequest}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </Form.Item>
            </Form>
          </Modal>
        );
      };
    
      
    const [open, setOpen] = useState(false);

    const onCreate = async (values) => {
      
        console.log('Received values of form: ', values);
        setOpen(false);

        if(mode === "sale"){
            //API Call to store as sale
            console.log("Submitting Product for sale");

            console.log(image)
            if(image) {
              const imgForm = new FormData();
              imgForm.append('file',image,image.name)
              console.log(imgForm)
      
              axios.post('/upload/ProductImage',imgForm, {
                headers:{
                  'accept': 'application/json',
                  'Accept-Language':'en-US,en;q=0.8',
                  'Content-Type': `multipart/form-data; boundary=${imgForm._boundary}`
                }
              }).then((res)=>{
                  console.log(res.data)
      
                  const ProductpostData = {

                    title:values.title,
                    imgName:res.data.filename,
                    description:values.description,
                    price:values.price,
                    timestamp: Date.now(),
                    type:"sale"
                  }
                  console.log(ProductpostData);
                  savePost(ProductpostData)
      
              })
            }
            else
            {
              const ProductpostData = {

                text:values.title,
                description:values.description,
                price:values.price,
                timestamp: Date.now(),
                type:"sale"
              }
              console.log(ProductpostData);
              savePost(ProductpostData)
      
            }
    
        }
        else if(mode === "rent"){
            // API Call to store as rent;
            console.log("Submitting Product for rent");

            console.log(image)
            if(image) {
              const imgForm = new FormData();
              imgForm.append('file',image,image.name)
              console.log(imgForm)
      
              axios.post('/upload/ProductImage',imgForm, {
                headers:{
                  'accept': 'application/json',
                  'Accept-Language':'en-US,en;q=0.8',
                  'Content-Type': `multipart/form-data; boundary=${imgForm._boundary}`
                }
              }).then((res)=>{
                  console.log(res.data)
      
                  const ProductpostData = {

                    title:values.title,
                    imgName:res.data.filename,
                    description:values.description,
                    price:values.price,
                    timestamp: Date.now(),
                    type:"rent"
                  }
                  console.log(ProductpostData);
                  savePost(ProductpostData)
      
              })
            }
            else
            {
              const ProductpostData = {

                text:values.title,
                description:values.description,
                price:values.price,
                timestamp: Date.now(),
                type:"rent"
              }
              console.log(ProductpostData);
              savePost(ProductpostData)
      
            }
      
        }
    };

    const savePost = async (postData) =>{
      console.log(postData)
      await axios.post('/upload/ProductPost',postData)
            .then((resp)=>{
              console.log(resp);
            })
    }


  return (
    <div className='admin_dashboard'>
        <div className='button' onClick={handleSale}>
            <p>Add Listings for Sale </p>
        </div>
        <div className='button'onClick={handleRent}>
            <p>Add Listings for Rent </p>
        </div>
        <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  )
}

export default Admin