import React, { useEffect, useState } from 'react'

export default function AddEditEmployee(props) {
    const [data,setData] = useState({
        firstName : "",
        lastName : ""
    })

    const handleInput= (e)=> {

      setData({...data,[e.target.name]: e.target.value});

    }

    useEffect(()=> {

      setData(props.data[props.index])

    },[props.index])

    const handleSubmit = (e)=> {
        e.preventDefault();

        let t = [...props.data];

        if(props.index <0)
        {
        t.push(data);

        }
        else
        {
          t[props.index]=data;

        }

        props.setData(t);

        props.setIndex(-1);
    }
  return (
    <form onSubmit={handleSubmit}>

        <input type='text' name='firstName' onChange={handleInput} value={data?.firstName} />
        <input type='text'  name='lastName' onChange={handleInput} value={data?.lastName}/>

        <input type='submit' value="save" />
        
    </form>
  )
}
