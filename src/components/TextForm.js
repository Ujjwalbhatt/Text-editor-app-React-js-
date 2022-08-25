import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper was clicked");
        let newText = text.toUpperCase();

        setText(newText);
    }
    const handleLoClick = () => {

        let newText = text.toLowerCase();

        setText(newText);
    }
    const clearscreen = () => {

        let newText = '';

        setText(newText);
    }
    const handleOnChange = (event) => {

        setText(event.target.value);
    }
    const handleExtraSpaces= ()=>{
        let newText =  text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text, setText] = useState('Enter the text');
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
                <h1>{props.heading }</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'black':'white', color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to toLowerCase</button>
                <button className="btn btn-primary mx-1" onClick={clearscreen}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Clear extra spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words & {text.length} characters</p>
                <p>{0.008 * text.split("").length} Minutes reading time</p>
                <h2>preview</h2>
                <p>{text.length>0?text: "Enter something above to preview the text here"}</p>
            </div>
        </>
    )
}
