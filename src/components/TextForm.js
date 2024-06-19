import React, {useState} from 'react'
 

export default function TextForm(props) {

    const handleUpClick = ()=>{
        //console.log("uppercase" + text);
        let newText = text.toUpperCase();
        setText(newText);

    }

    const handleLowClick = ()=>{
        //console.log("uppercase" + text);
        let newText = text.toLowerCase();
        setText(newText);

    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);

    }



    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);

    }


    const[text, setText] = useState(' ');

  return (
    <>
       <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>

       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'light', color: props.mode==='dark'?'white':'black'}} id="myBox " rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
       <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
     
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
    </div>
    </>
  )
}
