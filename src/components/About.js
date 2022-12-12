

export default function About(props) {
    
   let myStyle={
    color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white'
   } //here myStyle is an oject
   
  
   
  return (
  
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item"  >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This is an online text converter app and it helps to transform your text into desired form for free.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Browser Compatible</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
       This is a browser friendly app, you can run it in either browser to get the same result without an error.
It is a bug free app and completely safe to use .
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingThree" >
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        <strong>Option</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
        It having these options : Uppercase ,lowercase, Copy text , clear text ,remove extra spaces. All these options helps you to manipulate your text as per your desire.
        This is compact version that helps user to fulfill its requirement and help them to work on there text.
    </div>
  </div>
</div>
{/* <div className="className=container my-3">
<button onClick={toggleStyle}type="button" className="btn btn-primary">{btntxt}</button>
</div> */}
    </div>
    </div>
  )
}
