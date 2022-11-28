import React, {useState} from 'react'

export default function TextForm(props) {
 
const[text,setText]=useState('')
    const handleUpClick=(event)=>{
//console.log('uppercase clicked');

let newtext=text.toUpperCase();
setText(newtext);
props.showAlert("converted to uppercase","success") ;
    }

    const handleLoClick=(event)=>{
        //console.log('lowercase clicked');
        
        let newtext=text.toLowerCase();
        setText(newtext);
          props.showAlert('converted to lowercase','success');  }
 
    const clearClick=(event)=>{
        console.log('clear text');
        
        let newtext='';
        setText(newtext);
        props.showAlert('text is clear now','success');   }
            const handleOnChange=(event)=>{
                console.log('on change');
                setText(event.target.value);
            }
  return (
    <>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}} >
    <h1>{props.heading}</h1>
<div className="mb-3 ">
  
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white' ,color:props.mode==='dark'?'white':'black'}}  id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert into Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert into Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={clearClick}>Clear text</button>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2> Your text summary</h2>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
<p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
