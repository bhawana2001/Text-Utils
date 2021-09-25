import React, { useState } from 'react'

export default function TextForm(props) {
    //change to uppercase
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }
    //change to lowercase
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }
    //clear all text
    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("All cleared!", "success")
    }
    //copy text to clipboard
    const handleCopy = () => {
        let text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard!", "success")
    }
    //handle whiteSpace
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")
    }

    //to capitalize first letter
    const capitalizeFirstLet = () => {

        let firstLett = text.charAt(0);
        let newLetter = firstLett.toUpperCase();
        setText(newLetter + text.slice(1));
        props.showAlert("Capitalized first letter", "success")
    }

    //capitalize all first letters
    const capitalizeAllFirstLet = () => {
        let arr = text.toString().split(" ")
        let i;
        for (i = 0; i < arr.length; i++) {
            let ele = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            arr[i] = ele
        }
        let newText = arr.toString().replace(/,/g, " ");
        setText(newText)
        props.showAlert("Capitalized all first letters", "success")
    }

    //change target values
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');


    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 >{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear all text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove extra space</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={capitalizeFirstLet}>Capitalize first letter</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={capitalizeAllFirstLet}>Capitalize all first letter</button>



            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview! Enter something in the textbox to preview it here "}</p>
            </div>
        </>
    )
}
