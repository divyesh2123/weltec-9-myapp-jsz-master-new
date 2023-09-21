import React from 'react'

export default function ListEmployee(props) {

 


  return (
    <table>{
        props.data.map((value, index)=> {

          return (<tr><td>{value.firstName}</td><td>
            
            {value.lastName}
            
            </td>
            
            <td>

              <button onClick={()=> { props.remove(index) } }>Delete</button>
            </td>
            <td>

<button onClick={()=> { props.setIndex(index) } }>Edit</button>
</td>
            
            </tr>)
        })
      
      }</table>
  )
}
