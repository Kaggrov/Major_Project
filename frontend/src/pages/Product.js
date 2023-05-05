import React ,{useState,useEffect}from 'react'
import {useLocation} from 'react-router-dom';
import {Button, Slider,Modal ,QRCode } from 'antd';
import "./Product.css"
import axios from "../axios"
import Confetti from 'react-confetti'


const Product = () => {

    const location = useLocation();
    const gutters = [];
    ["3", "6", "9", "12", "24"].forEach((value, i) => {
        gutters[i] = value;
      });
    
    const [gutterKey, setGutterKey] = useState(1);
    const [booking,Setbooking]  = useState(null)
    const [expiry,setExpiry] = useState()
    const [currentProduct,setCurrentProduct] = useState();

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

        const {data:{key}} = await axios.get("/getKey")
        let order_id;

        const amount  = (location.state.rent)*(parseInt(gutters[gutterKey]));
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
                Setbooking((location.state.rent)*gutterKey);
                setIsModalOpen(true);
                setShowConfetti(true);
                const dbQuery = {
                    userName:localStorage.getItem("userName"),
                    expiry: gutters[gutterKey],
                    product:location.state.name
                }
                await axios.post("/user",dbQuery)
                .then(res=>{
                    console.log(res.data)
                    setExpiry(gutters[gutterKey])
                    setCurrentProduct(location.state.name)
                })


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

    const synchronize = async () => {
        await axios.post("/user",{
            userName:localStorage.getItem("userName"),
        })
        .then(res=>{
            res.data.products.map((ele)=>{
                if(ele.product === location.state.name){
                    setExpiry(ele.expiry)
                    setCurrentProduct(ele.product)
                }
            })
        })

    }
    useEffect( () =>{
        synchronize();
    },[])
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
                    <h4 style={{textAlign:"center"}}>{(location.state.rent)*(parseInt(gutters[gutterKey]))}</h4>
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
                    <h2>Scan the QR code for Receipt</h2>
                    <QRCode value="https://pmkisan.gov.in/" />

            </Modal>
            {
                expiry && currentProduct===location.state.name && <div style={{fontSize:"30px",fontWeight:"700",color:"#EB455F"}}>Your rent will overdue in {expiry} months</div>
            }
        </div>
    </div>
  )
}

export default Product