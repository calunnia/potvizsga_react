import React,{useState} from 'react'

function Pet({pet,Key}) {


    const[data,setData] = useState([]) // subscribe POST utani valasz.
    const [loading, setLoading] = useState (false)
    const [ petVacinated, setPetVaccinated] = useState(pet.isVaccinated)

const setVacination = (petname,isVaccinated) => {

    
            setLoading(true) 

            let postData = {"name" : petname, "isVaccinated" : isVaccinated }
            fetch('api/pets/', {
                    method: "POST",
                    body: JSON.stringify(postData),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then( response => response.json() )
            .then( resData => { //SetShowSubsribeResponse(true)
                                setData(resData)
                            })
            .catch( error => {
                    console.log('post error message', error)
                    setData(null)
            })
            .finally( res => {setLoading(false); setPetVaccinated(true)})
      }

    return (
        <div className="Pet">
            {pet.name} - Vaccinate :&nbsp; 
               { <button onClick={()=> setVacination(pet.name,true)}>  
                   {loading 
                      ? '...'
                      : petVacinated ? 'true':'false'
                   }
                </button>}
        </div>
    )
}

export default Pet
