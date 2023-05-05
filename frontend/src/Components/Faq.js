/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import './Faq.css'

const Faq = () => {
  return (
    <div className='faq'>
        <>
        <div style={{fontSize:"20px",
              fontWeight:"800",
              color:"white",
              marginTop:"1rem",
              padding:"15px 80px",
              backgroundColor:"rgb(127, 161, 255)",
              borderRadius:"20px"
            }}
        >
        Solutions to Common Faq !!</div>
        <div className='faq_box'>
          <iframe 
          src="https://console.dialogflow.com/api-client/demo/embedded/a097707b-93c4-4f54-adce-2642977daf56" 
          width="350" height="500"
          allow="microphone;autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
          style={{border:"none" ,overflow:"scroll"}} 
          scrolling="yes" 
          frameBorder="0" 
          allowFullScreen={true} >

          </iframe>
        </div>
        
        
        </>
    </div>
  )
}

export default Faq