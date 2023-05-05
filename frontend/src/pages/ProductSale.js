import React ,{useState}from 'react'
import {useLocation,useNavigate} from 'react-router-dom';
import {Button, Slider,Modal ,QRCode,Result } from 'antd';
import "./Product.css"
import axios from "../axios"
import Confetti from 'react-confetti'



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
    const [showConfetti,setShowConfetti] = useState(false)

    const handleOk = () => {
        setIsModalOpen(false);
        setTimeout(()=>{
            setShowConfetti(false)
        },5000)
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handlePurchase = async () => {
        // setIsModalOpen(true);

        // setTimeout(()=>{
        //     Setbooking(200*gutterKey);
        //     setIsModalOpen(false)
        // },5000)
        const {data:{key}} = await axios.get("/getKey")
        let order_id;
        const amount  = parseFloat(location.state.price.replace(/,/g, ''));
        console.log(amount,location.state.price)
        const order = {
            amount : amount
        }
        await axios.post('/checkout',order)
        .then(res => {
            console.log(res.data)
            order_id = res.data.id
        })

        var options = {
            key: key, 
            amount: amount,
            currency: "INR",
            name: "Farmers MarketPlace",
            description: "Sale/Rent Payment",
            // image: "https://example.com/your_logo",
            order_id: order_id,
            // callback_url: "http://localhost:9000/paymentVerification",
            "handler": async function  (response){
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature)
                setIsModalOpen(true);
                setShowConfetti(true);
                Setbooking(200*gutterKey);

            },
            prefill: {
                "name": "Farmer",
                "email": "Farmer.purchase@gmail.com",
                "contact": "9000090000"
            },
            theme: {
                "color": "#00FF80"
            }
        };

        const razor = new window.Razorpay(options);
        razor.open();
    }
  return (

    <div className='product'>
        {showConfetti && <Confetti height={window.innerHeight} width={window.width} numberOfPieces={3000} />}

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
                    
                    <h2>Scan the QR code for Receipt</h2>
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
                    Go to Home
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