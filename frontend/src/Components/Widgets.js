/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import './Widgets.css'

const Widget = () => {
  return (
    <div className='widgets'>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkisanektamorcha%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340" height="3000" 
        style={{border:"none" ,overflow:"scroll"}} 
        scrolling="yes" 
        frameBorder="0" 
        allowFullScreen={true} 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">

        </iframe>
        
    </div>
  )
}

export default Widget