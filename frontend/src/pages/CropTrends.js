import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';
import './CropTrends.css'
import { Select,Input ,Space,Button,Tag} from 'antd';

const CropTrends = () => {
    const [supply,setSupply] = useState([7, 30, 50, 12, 12, 18, 8, 20])
    const [selectedCrop,setSelectedCrop] = useState();
    const [quantity,setQuantity] = useState();
    const x_values = ['Coffee','Rice', 'Wheat', 'Millets', 'Pulses', 'Tea', 'SugarCane', 'Tomato'];
    const Demand = [9,20,40,14,11,12,10,14,15]
    const [profits,setProfits]= useState([])

    const onInput = (e) =>{
        setQuantity(e.target.value);
    }
    const onSubmit  = (e) =>{
        e.preventDefault();
        const ind = x_values.indexOf(selectedCrop);
        const new_supply = supply.slice();
        new_supply[ind] += parseInt(quantity);
        console.log(new_supply)
        setSupply(new_supply)
        console.log(supply)

    }
    var trace1 = {
        x: x_values,
        y: supply,
        name: 'Supply',
        marker: {color: 'rgb(55, 83, 109)'},
        type: 'bar'
      };
      var trace2 = {
        x: x_values,
        y: Demand,
        name: 'Demand',
        marker: {color: 'rgb(26, 118, 255)'},
        type: 'bar'
      };
      
      var data = [trace1,trace2];
      
      var layout = {
        title: 'Current Trends in Crop growth',
        xaxis: {tickfont: {
            size: 14,
            color: 'rgb(107, 107, 107)'
          }},
        yaxis: {
          title: 'Quantity (Tons)',
          titlefont: {
            size: 16,
            color: 'rgb(107, 107, 107)'
          },
          tickfont: {
            size: 14,
            color: 'rgb(107, 107, 107)'
          }
        },
        legend: {
          x: 0,
          y: 1.0,
          bgcolor: 'rgba(255, 255, 255, 0)',
          bordercolor: 'rgba(255, 255, 255, 0)'
        },
        bargap: 0.15,
        bargroupgap: 0.1
      };
      
      useEffect(()=>{

        let arr = [];
        for(let i=0;i<8;i++)
        {

            if(Demand[i]>=supply[i])
            {
                arr.push(x_values[i])
            }
            arr.sort(function(a, b) {
                return a - b;
              });
            setProfits(arr);
        }
      },[supply])

    //   var blink = document.getElementById("blink");
    //   setInterval(function () {
    //     if (blink.style.opacity === 0) {
    //       blink.style.opacity = 1;
    //     } else {
    //       blink.style.opacity = 0;
    //     }
    //   }, 1000);

    const color_map = ['magenta','gold','geekblue']

  return (
    <div className='page_container'>
        <div className='heading'>
            <h2 style={{marginLeft:"15px",marginTop:"15px",color:"whitesmoke"}}>Analyze trends for Crop growth this Season</h2>
            <h2 style={{marginLeft:"15px",color:"whitesmoke"}}>This will help you to grow crop according to Demand and Supply</h2>

        </div>
        <span id="blink">Live</span>

        <div className='middle_container'>

            <div className='graph'>
                <Plot
                    data={data}
                    layout={ layout }
                />
                

            </div>

            <div className='input'>
                <div>
                    <h3>Select crop and approximate Quantity of Crop you will produce :</h3>
                </div>
                <Select
                    showSearch
                    placeholder="Select a Crop"
                    optionFilterProp="children"
                    onChange={(e)=>{
                        setSelectedCrop(e);
                    }}
                    filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={[
                    {
                        value: 'Rice',
                        label: 'Rice',
                    },
                    {
                        value: 'Wheat',
                        label: 'Wheat',
                    },
                    {
                        value: 'Millets',
                        label: 'Millets',
                    },
                    {
                        value: 'Pulses',
                        label: 'Pulses',
                    },
                    {
                        value: 'Tea',
                        label: 'Tea',
                    },
                    {
                        value: 'Coffee',
                        label: 'Coffee',
                    },
                    {
                        value: 'SugarCane',
                        label: 'SugarCane',
                    },
                    {
                        value: 'Tomato',
                        label: 'Tomato',
                    },
                    ]}
                />
                <Space.Compact
                    style={{
                        width: '100%',
                    }}
                    >
                    <Input placeholder='Enter Quantity in Tons' onChange={onInput}/>
                    <Button type="primary" onClick={onSubmit}>Submit</Button>
                </Space.Compact>
                <div>
                    <h3 style={{marginBottom:"30px",marginTop:"50px",color:"rgb(152, 62, 236)"}}>Profitable Choices currently may be :-</h3>
                
                        {
                            profits.map((val,i)=>{
                                console.log("hello")
                                return (
                                    <Tag color={color_map[i]}style={{width:"150px",height:"100px",alignItems:"center"}}>
                    
                                            <h3 style={{marginLeft:"35px",marginTop:"35px"}}>{val}</h3>
    
                                    </Tag>
                                )
                            })
                        }

                </div>

            </div>

        </div>
    </div>

  )
}

export default CropTrends