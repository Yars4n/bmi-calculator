import React from "react";

const BMI = (props) => {
    const {height, weight, foot, inch, pounds} = props.values;

     
    const heightInMeters = props.values.unit === "imperial" ? (foot * 0.3048) + (inch * 0.0254) : height/100;
    const weightTrue = props.values.unit==="imperial"? pounds * 0.45359237: weight;
    const BMI = weightTrue / (heightInMeters **2);
    return (
        <div className="body">
            <div className="background-container"> <div className="background"> </div></div>
            <div className="container">
            
            <div className="left">
            <div className="logo-container">
            <img className="logo" src="/logo.svg" alt="" />
            </div>
                <div className="left-text">
                <h1>Body Mass Index Calculator</h1>
                <p>Better understand your weight in relation to your height using our body mass index (BMI) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
                </div>
            </div>

            <div className="right">
            <div className="enter">Enter your details below</div>
            <div className="checkboxes">
                <label className="radio-container"><input className="radio-button" value="metric" name="unit" id="metric" type="radio" checked={props.values.unit==="metric"} onChange={props.handleChange}/><span className="checkmark"></span> <label className="label" htmlFor="metric">Metric</label></label>
                <label className="radio-container"><input className="radio-button" value="imperial" name="unit" id="imperial" type="radio"  checked={props.values.unit==="imperial"} onChange={props.handleChange}/><span className="checkmark"></span> <label className="label" htmlFor="imperial">Imperial</label></label>
            </div>
            <div className="input-containerr">
            
            {props.values.unit==="metric"?
            <div className="input-container">
            <div className="unit-container"><input className="input" name="height" value = {height} placeholder="0"  type="text" onChange={props.handleChange}/> <p className="input-unit">cm</p> </div>
            <div className="unit-container"><input className="input" name="weight" value = {weight} placeholder="0" type="text" onChange={props.handleChange}/>  <p className="input-unit">kg</p> </div>
            </div>
            :
            <div className="imperial-container">
            <div className="imperial-height">
            <div className="unit-container"><input className="input-imperial inputFoot" name="foot" value = {foot} placeholder="0"  type="number" onChange={props.handleChange}/> <p className="input-unit">ft</p> </div>
            <div className="unit-container"><input className="input-imperial inputInch" name="inch" value = {inch} placeholder="0"  type="number" onChange={props.handleChange}/> <p className="input-unit">in</p> </div>
            </div>
            <div className="unit-container"><input className="input-imperial inputPounds" name="pounds" value = {pounds} placeholder="0" type="number" onChange={props.handleChange}/> <p className="input-unit">lbs</p></div>
            
            </div>}
            </div>
              

            <div className="message">
               {BMI>=7.5 && BMI<500?<div className="info">
               <div className="info-left">
               <h6>Your BMI is...</h6>
               <h2>{BMI.toFixed(1)}</h2>
               </div>
               <div className="info-right">
               <p >Your BMI suggests you’re 
               {
                    BMI > 24.9?
                    " obese"
                    : BMI <18.5?
                     " underweight"
                    :" a healthy weight"
               }. 
               Your ideal weight is between <span>{(18.5 * (heightInMeters)**2).toFixed(1)}{props.values.unit==='metric'?"kgs":"lbs"} - {(24.9 * (heightInMeters)**2).toFixed(1)}{props.values.unit==='metric'?"kgs":"lbs"} .</span></p>
               </div>
               </div> 
               :
               <div className="welcome"> 
               <h2>Welcome</h2>
                <p>Enter your height and weight and you'll see your result</p>
                </div>
               }
               
            </div>
             
            </div>
            </div>
        </div>
    )
}


export default BMI;