// import React, { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
export default function About(props) {
  // const[myStyle, setMystyle]= useState({
    
  //     color: 'black',
  //     backgroundColor: 'white'
    
  // })
  // const [btntext, setBtntext]= useState("Enable dark Mode")
  // const toggleStyle = ()=>{
  //   if(myStyle.color === 'white'){
  //     setMystyle({
  //       color: 'black',
  //       backgroundColor: 'white'

  //     })
  //     setBtntext("Enable dark Mode")
  //   }
  //   else{
  //     setMystyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //       border: '1px solid white'
       
  //     })
  //     setBtntext("Enable light Mode")
  //   }
  // }
  
  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={{backgroundColor: props.mode === 'dark'?'#042743':'white',color: props.mode === 'dark'?'white':'#042743'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Ujjwal 
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'rgb(31, 37, 43)':'white',color: props.mode === 'dark'?'white':'#042743'}}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={{backgroundColor: props.mode === 'dark'?'#042743':'white',color: props.mode === 'dark'?'white':'#042743'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Priyanshu
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'rgb(31, 37, 43)':'white',color: props.mode === 'dark'?'white':'#042743'}}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={{backgroundColor: props.mode === 'dark'?'#042743':'white',color: props.mode === 'dark'?'white':'#042743'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Rick
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'rgb(31, 37, 43)':'white',color: props.mode === 'dark'?'white':'#042743'}}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div> 
      {/* <div className="container my-3"></div>
      <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button> */}
    </div>
  )
}
