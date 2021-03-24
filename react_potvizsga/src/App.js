import React, {useState} from 'react'
import './App.css'
import Client from './components/Client.js'

const App = () => {

  const [data,setData]= useState([]) // [{},{},{}]   null
  const [ inputData,setInputData] = useState('')
 
  const setShowResults = () =>{
    fetch('api/clients/?search='+ inputData)
    .then( response => response.json() )
    .then( adat => setData(adat) )
    .catch(error =>{
                    console.log('error fetching data', error)
                    setData(null)
                  })
   // .finally(respons => setLoading(false) )
  
   
  
  console.log('data=',data);
  
  }
  return (<>
    <div className="App">
        <h1> Veterinarian admin-clients</h1>
 
         <input value={inputData} onChange={ (el) => setInputData(el.target.value)}/>
         <button disabled={ inputData.length < 3 } onClick={ () => setShowResults()}>Search</button>
         <hr />
    </div>

    {  
       data.map( (item,i) => <Client item={item} Key={i.toString()} />   )
    }
    
</>
  )
}

export default App
