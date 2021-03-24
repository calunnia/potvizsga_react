import React from 'react'
import Pet from './Pet.js'

function Client({item, Key}) {
    return (
        <div className="Client" >
                {item.name}
              {item.pets.map( (pet,i) => <Pet pet={pet} Key={i.toString()+pet.name } /> )
}
        </div>
    )
}

export default Client
