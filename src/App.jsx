import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'


const diseases = [
  "Flu", "Diabetes", "HyperTensions", "Asthama", "Malaria",
  "Typhoid", "Migraine", "Athritis", "Covid-19", "Allergy"
];

function App(){
  const [form, setform] = useState(
    {
      firstname: "",
      lastname: "",
      phone: "",
      diseases: diseases[0],
    }
  );
  const [patients, setpatients] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handlechange = (e)=>{
    setform({...form, [e.target.name]: e.target.value});
  }
  const handlesubmit = (e)=>{
    e.preventDefault();
    if(!form.firstname || !form.lastname || !form.phone) return;
    // setpatients([...patients,form])
    if(editingIndex === null){
      setpatients([...patients, form]);
    }else{
      patients.splice(editingIndex,1,form);
      setEditingIndex(null)
    }

    setform({
      firstname: "",
      lastname: "",
      phone: "",
      diseases: diseases[0],
    })
  }
  const handleDelete = (indexvalue)=>{
      setpatients(patients.filter((patientvalues, patientsindex)=> patientsindex !== indexvalue  ));
  }
// add kr do form ma values us index row ki jo edit krni or editing ma us setedited row ka index dal do jo editing index ma jaye ga
  const handleEdit = (indexvalue)=>{
    setform(patients[indexvalue]);
    setEditingIndex(indexvalue);
  }

  return(
<>
<div className='max-w-xl mx-auto bg-green-500 rounded mt-3 overflow-hidden'>
  <p className='text-center font-bold mt-3 underline'>PATIENT DATA</p>
  <form onSubmit={handlesubmit} className='flex flex-wrap gap-2 mt-10 justify-center p-3 rounded'>
    <input onChange={handlechange} value={form.firstname} name='firstname' type="text" className='border rounded px-2 py-2' placeholder='First Name' />
    <input onChange={handlechange} value={form.lastname} name='lastname' type="text" className='border rounded px-2 py-2' placeholder='Last Name' />
    <input onChange={handlechange} value={form.phone} name='phone' type="number" className='border rounded px-2 py-2' placeholder='phone No' />
    <select onChange={handlechange} value={form.diseases} name="diseases" className='border rounded w-auto py-2'>
      {diseases.map((diseasevalue)=>(
          <option key={diseasevalue} value={diseasevalue}>{diseasevalue}</option>
        ))}
    </select>
    <button type='submit' className='bg-amber-400 px-2 py-2 rounded'>Submit</button>
  </form>

  <table className='w-full table-fixed border border-collapse'>
    <thead>
      <tr className='bg-amber-50'>
        <th className='border px-2 py-2'>First Name</th>
        <th className='border px-2 py-2'>Last Name</th>
        <th className='border px-2 py-2'>Phone No</th>
        <th className='border px-2 py-2'>Disease</th>
        <th className='border px- pt-2'>Deletion</th>
        <th className='border px-2 pt-2'>EDIT</th>
      </tr>
    </thead>
    <tbody>
         { patients.map((patient,indexvalue)=>(
    <tr key={indexvalue}>
      <td className='border px-2 py-2'>{patient.firstname}</td>
      <td className='border px-2'>{patient.lastname}</td>
      <td className='border px-2'>{patient.phone}</td>
      <td className='border px-2 overflow-hidden'>{patient.diseases}</td>
      <td className='border px-2 overflow-hidden'>
        <button onClick={()=> handleDelete(indexvalue)} className='bg-red-400 px-2 mx-2 rounded shadow-2xl hover:bg-amber-300'>
          Delete
        </button>
      </td>
      <td className='border px-2 overflow-hidden'>
        <button onClick={()=>handleEdit(indexvalue)} className='bg-blue-400 px-2 mx-2 rounded shadow-2xl hover:bg-amber-300'>EDIT</button>
      </td>
    </tr>
  ))}
    </tbody>
  </table>
</div>

    </>
  )
}


export default App