import './App.css';
import BMI from './BMI';
import Second from './Second';
import Improve from './Improve';
import Limit from './Limit';
import React from 'react';


function App() {

  const [values, setValues] = React.useState({
    height: '',
    weight: '',
    unit:"metric",
    foot:'', 
    inch:'', 
    pounds:''

  })
 

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues({
      ...values,
      [name]: type==="checkbox"? checked : value
    });
    
  };
  console.log(values.unit)

  return (
    <div className='the-container'>
     <BMI values = {values}
          handleChange = {handleChange}   
     />
     <div className='comp-container'>
     <Second/>
     </div>
     <div className='improve-container'>
     <div className='improve-cards-container'>
     <Improve 
     image={ <img className='icon-eating' src="/icon-eating.svg" alt="" />}
     title={"Healthy eating"}
     content= {"Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."}
     />
     <Improve
      image={ <img className='icon-eating' src="/icon-exercise.svg" alt="" />}
      title={"Regular exercise"}
      content= {"Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."}
     />
     <Improve
      image={ <img className='icon-eating' src="/icon-sleep.svg" alt="" />}
      title={"Adequate sleep"}
      content= {"Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."}
     />
     </div>
     </div>
     <div className='limit-container'>
     <div className='limit-cards-container'>

    
     <div className='limit-title'>
     <h1>Limitations of BMI</h1>
     <p>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
     </div>
     <Limit 
      clas = 'one'
      image = {<img src="/icon-gender.svg" alt="" />}
      title = {"Gender"}
      content = {"The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."}
     />
     

      
     <Limit
      clas = 'two'
      image = {<img src="/icon-age.svg" alt="" />}
      title = {"Age"}
      content = {"In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."}
       
      />
     <Limit 
      clas = 'three'
      image = {<img src="/icon-muscle.svg" alt="" />}
      title = {"Muscle"}
      content = {"BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."} 
     />
      
     <Limit 
      clas = 'four'
      image = {<img src="/icon-pregnancy.svg" alt="" />}
      title = {"Pregnancy"}
      content = {"Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."}
       
     />
     <Limit 
      clas = 'five'
      image = {<img src="/icon-race.svg" alt="" />}
      title = {"Race"}
      content = {"Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."}
       
     />
     
     </div>
     </div>
     </div>
  );
}



export default App;
