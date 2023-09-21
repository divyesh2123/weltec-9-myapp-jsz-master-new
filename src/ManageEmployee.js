import React, { useState } from 'react'
import AddEditEmployee from './AddEditEmployee'
import ListEmployee from './ListEmployee'

export default function ManageEmployee
() {

    const [data,setData] = useState([]);
    const [index,setIndex]= useState(-1);

    const deleteRecord = (index)=> {

      alert(index);

      let p = [...data];

      p.splice(index,1);

      console.log(p);

      setData(p);

    }
  return (
    <div>

        <AddEditEmployee data={data} setData ={setData} index={index} setIndex={setIndex}  />

        <ListEmployee data={data} remove={deleteRecord} setIndex={setIndex}/>
        
    </div>
  )
}
