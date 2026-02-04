import React, { useState } from 'react'

import '../css/exam.css'
import axios from 'axios';

interface DRKStudent{
    rollno:number,
	name:string,
	college:string
	dept:string,
	fee:number,
	eng:number
	math:number,
	sci:number
}



export default function ExamResults() {


const [student,setStudent] = useState<DRKStudent>();
const [rollno,setRollno] = useState('');


const showRes = ()=>{
    //console.log("rollno--->"+rollno);
    axios.get("http://localhost:8080/jntu/drk/exam/res?rollno="+rollno)
    .then(
        (res)=>{
            //console.log(res.data)
            setStudent(res.data);
        }
    );
}

const getRollno = (e:any)=>{
   // console.log(e.target.value);
   setRollno(e.target.value);
}

  return (
    <div>
<div className='textCenter'>


<input 
onChange={getRollno}
type='text'  placeholder='enter rollno'/>
<button 
onClick={showRes}
type="button" className="btn btn-primary">Submitt</button>


    </div>

{student == null ?"":student.rollno == 0?"No results found for Rollno"+rollno:

    <div>

<table className="table">
  <thead>
    <tr>
      <th scope="col">Student Rollno</th>
      <th scope="col">Student Name</th>
      <th scope="col">College</th>
      <th scope="col">Dept</th>
      <th scope="col">English</th>
      <th scope="col">Maths</th>
      <th scope="col">Science</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{student?.rollno}</th>
      <td>{student?.name}</td>
      <td>{student?.college}</td>
      <td>{student?.dept}</td>
      <td>{student?.eng}</td>
      <td>{student?.math}</td>
      <td>{student?.sci}</td>
    </tr>
   
  </tbody>
</table>

    </div>

}
    </div>
    
  )
}
