import { Button,Modal ,Form,Input,Upload,message } from 'antd'
import React , {useState} from 'react'
import { UploadOutlined } from '@ant-design/icons';

import './Admin.css'

const Admin = () => {

    const [mode,setMode] = useState("");
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
            onOk={() => {
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

    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        setOpen(false);
        if(mode === "sale"){
            //API Call to store in sale table
        }
        else if(mode === "rent"){
            // API Call to store in rent table;
        }
    };


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