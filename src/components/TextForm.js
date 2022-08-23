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
    const [text, setText] = useState('Enter the text');
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to toLowerCase</button>
                <button className="btn btn-primary mx-1" onClick={clearscreen}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words & {text.length} characters</p>
                <p>{0.008 * text.split("").length} Minutes reading time</p>
                <h3>---------------------preview---------------------------</h3>
                <p>{text}</p>
            </div>
        </>
    )
}