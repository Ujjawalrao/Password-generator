import { useState } from "react"
import { Button } from "./Button";


function FormHandling() {

    const [name,setName] = useState("");
    const [number,setNumber] = useState();
    const [aboutYou,setAboutYou] = useState("");
    const [option,setOption] = useState("");
    const [jobType,setJobType] = useState("");

  return (
    <>
    <form 
    onSubmit={(e) => {
      e.preventDefault()
      alert('you submited the form')
      // setValue('')
    }}>
      
      <p>Username: {name} </p>
      <input 
      required
      className='px-2 rounded-md border-2'
      type="text"
      placeholder='username'
      value={name}
      onChange={(e) =>{
        setName(e.target.value)
        // console.log(`input value=${name}`);
      }}/>

      <p>age: {number}</p>
      <input 
      required
      className='px-2 rounded-md border-2'
      type="number"
      value={number}
      onChange={(e) =>{
        setNumber(e.target.value)
      }} />

      <p>AboutYou: {aboutYou}</p>
      <textarea 
      placeholder="About You"
      className='px-2 rounded-md border-2'
      value={aboutYou}
      onChange={(e) =>{
        setAboutYou(e.target.value)
      }}/><br />
      
      <label htmlFor="">Category: </label>
      <select 
      required
      className='px-2 rounded-md border-2'
      value={option}
      onChange={(e) =>{
        setOption(e.target.value)
      }}>
        <option value="">select an option</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Full-Stack">Full-Stack</option>
      </select>
      <br />
    
      <label>
      <input type='radio' value='Remote' checked={jobType == 'Remote'} 
      onChange={(e) =>{
        setJobType(e.target.value)
      }}  />
       Remote</label>
      <br />
      
      <label>
      <input type='radio' value='Ragular' checked={jobType == 'Ragular'}
      onChange={(e) =>{
          setJobType(e.target.value)
        }}
      />Ragular
      </label>
      <p>Job-type: {jobType}</p>
      
        <Button innerText="Submit" />

      {/* <button className='bg-blue-500 text-white  px-4 rounded-sm font-bold block'>Submit</button> */}

    </form>
    </>
  )

}
export default FormHandling;