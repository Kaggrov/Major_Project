import React ,{useState}from 'react'
import {useLocation} from 'react-router-dom';
import {Button, Slider,Modal ,QRCode } from 'antd';
import "./Product.css"



const Product = () => {
    const location = useLocation();
    const gutters = [];
    ["3+", "6+", "9+", "12+", "24+"].forEach((value, i) => {
        gutters[i] = value;
      });
    
    const [gutterKey, setGutterKey] = useState(1);
    const [booking,Setbooking]  = useState(null)

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handlePurchase = () => {
        setIsModalOpen(true);

        setTimeout(()=>{
            Setbooking((location.state.rent)*gutterKey);
            setIsModalOpen(false)
        },5000)
    }
  return (

    <div className='product'>

        <div className='image__container' style={{width:"100%"}}>
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                style={{width:"560px",height:"500px"}}
            />
        </div>

        <div className='details__container' style={{width:"100%"}}>
            <h2>{location.state.name}</h2>
            <div>How long do you want to rent ?</div>
            <div style={{ width: '88%' }}>
                <Slider
                    min={0}
                    max={Object.keys(gutters).length - 1}
                    value={gutterKey}
                    onChange={setGutterKey}
                    marks={gutters}
                    step={null}
                    tooltip={{
                        formatter: (value) => gutters[value],
                }}
                />
            </div>
            <div style={{display:"flex",flexDirection:"row",gap:"60px",justifyContent:"space-evenly"}}>
                <div>
                    <h3>Monthly Rent</h3>
                    <h4 style={{textAlign:"center"}}>{(location.state.rent)*gutterKey}</h4>
                </div>
                <div >
                    <h3>Refundable Security</h3>
                    <h4 style={{textAlign:"center"}}>Rs 0</h4>
                </div>
            </div>
            <div style={{color:"red"}}>
             Free Delivery and Setup within 2-3 days after KYC completion
            </div>
            <Button onClick={handlePurchase} style={{backgroundColor:"#F7A4A4",color:"#fff"}}>
                Rent Now !
            </Button>
            <Modal title="Complete trasaction" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <h2>Scan the QR code to make Payment</h2>
                    <QRCode value="https://pmkisan.gov.in/" />

            </Modal>
            {
                booking && <div style={{fontSize:"30px",fontWeight:"700",color:"#EB455F"}}>Your rent will overdue in {gutters[gutterKey].replace("+","")} months</div>
            }
        </div>
    </div>
  )
}

export default Product