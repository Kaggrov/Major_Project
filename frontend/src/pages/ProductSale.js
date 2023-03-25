import React ,{useState}from 'react'
import {useLocation,useNavigate} from 'react-router-dom';
import {Button, Slider,Modal ,QRCode,Result } from 'antd';
import "./Product.css"



const ProductSale = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const gutters = [];
    ["3", "6", "9", "12", "24"].forEach((value, i) => {
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
            Setbooking(200*gutterKey);
            setIsModalOpen(false)
        },5000)
    }
  return (

    <div className='product'>

        <div className='image__container' style={{width:"100%"}}>
            <img
                alt="example"
                src={`http://localhost:9000/retrieve/images/single?name=${location.state.Image}`}
                style={{width:"560px",height:"500px"}}
            />
        </div>

        <div className='details__container' style={{width:"100%"}}>
            <h2>{location.state.name}</h2>
            <div style={{display:"flex",flexDirection:"row",gap:"60px",justifyContent:"space-evenly"}}>
                <div style={{backgroundColor:"#4C4B16",borderRadius:"15px",color:"white",padding:"10px"}}>
                    <h3>Total Amount </h3>
                    <h4 style={{textAlign:"center"}}>{(location.state.price)}</h4>
                </div>
                <div style={{backgroundColor:"#4C4B16",borderRadius:"15px",color:"white",padding:"10px"}}>
                    <h3>Refundable Security</h3>
                    <h4 style={{textAlign:"center"}}>Rs 0</h4>
                </div>
            </div>
 
            <Button onClick={handlePurchase} style={{backgroundColor:"#F7A4A4",color:"#fff",borderRadius:"15px",padding:"40px",fontSize:"20px",fontWeight:"700"}}>
                Buy Now !
            </Button>
            <Modal title="Complete trasaction" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <h2>Scan the QR code to make Payment</h2>
                    <QRCode value="https://pmkisan.gov.in/" />

            </Modal>
            {
                booking && <Result
                status="success"
                title={`Successfully Purchased the ${location.state.name}` }
                subTitle="Order number: 2017182818828182881 Delivery takes 1-5 Days , please wait."
                extra={[
                  <Button type="primary" key="console" onClick={()=>{
                    navigate("/"); 
                  }}>
                    Go Console
                  </Button>,
                  <Button key="buy" onClick={()=>{navigate("/ExploreSale")}}>Buy Again</Button>,
                ]}
              />
            }
        </div>
    </div>
  )
}

export default ProductSale