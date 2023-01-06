import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {

  const [City, setCity] = useState();
  const [result1 ,setresult1]=useState();

  const changeHandler = e =>{
    setCity(e.target.value)
  }

  const submitHandler = e=>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=05318583e5716c69f1ef7537afdc1212`)
    .then(response => response.json())
  .then(result => {
    const kelvin= result.main.temp;
    const celsius=kelvin-273.15
    console.log(celsius)
    setresult1("The Exact Temp in"+" "+City+'\n'+Math.round(celsius)+"°C")
    setCity("")
  })
  .catch(error => console.log('error', error));
  }
  return (
    <>
    <center>
      <div className="card">
        <div className="card-body">
          <h2 className="card-tittle"> Weather App</h2>
            <form onSubmit={submitHandler}>
            <input type="text" name="City" value={City} onChange={changeHandler}></input><br></br><br/>
            <input type="Submit" value="Get Temperature"></input>
            </form>
            <h2> {result1}</h2>
          </div>
        </div>
      
    </center>
  </>
  );
}

export default App;
