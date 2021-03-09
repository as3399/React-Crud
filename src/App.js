import React, { useState } from 'react'
import './App.css';

function App() {

  const [data1, setData1] = useState([]);
  const [data, setData] = useState({
    fname: "",
    lname: "",
    Age: "",
    email: "",
    number: ""
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value })
  }
  const onSubmit = (event) => {
    event.preventDefault();
    setData1((m) => {
      return [...m, data]
    });
    setData({ fname: "", lname: "", Age: "", email: "", number: "" })
  }
  const Del = (index) => {
    data1.splice(index, 1);
    setData1(() => { return [...data1] });
  }
  const Edit = (index) => {
    setData({ fname: data1[index].fname, lname: data1[index].lname, Age: data1[index].Age, email: data1[index].email, number: data1[index].number })
    setIndex1(index);
    console.log("clicked")
  }
  const Update = (index1) => {
    console.log(index1);
    data1.splice(index1, 1, data);
    setData(() => { return [data] })
    setData({ fname: "", lname: "", Age: "", email: "", number: "" })
  }
  const [show, setShow] = useState(true);
  const [index1, setIndex1] = useState(0);

  return (<>
    <h1>React CRUD</h1>
    <form id="container" onSubmit={onSubmit}>
      <label for="fname">First Name</label><br></br>
      <input name="fname" type="fname" value={data.fname} onChange={InputEvent} required /><br></br>
      <label for="lname">Lastname</label><br></br>
      <input name="lname" type="lname" value={data.lname} onChange={InputEvent} required /><br></br>
      <label for="Age">Age</label><br></br>
      <input name="Age" min="0" type="number" value={data.Age} onChange={InputEvent} required /><br></br>
      <label for="number">Number</label><br></br>
      <input name="number" type="number" min="0" value={data.number} onChange={InputEvent} required /><br></br>
      <label for="email">Email</label><br></br>
      <input name="email" type="email" value={data.email} onChange={InputEvent} required /><br></br>
      {!show ? null : <button type="submit" id="submit" class="btn btn-success" value="Submit">Submit</button>}
      {show ? null : <button id="submit" class="btn btn-success" onClick={() => { Update(index1); setShow(!show) }}>Update</button>}
    </form>
    <table id="table">
    <thead>
      <tr>
        <th>Full Name</th>
        <th>Age</th>
        <th>Number</th>
        <th>Email</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody id="tbody">
      {data1.map((i, index) => {
        return (
          <tr key={index} id={index}>
            <td >{data1[index].fname}  {data1[index].lname}</td>
            <td >{data1[index].Age} Years</td>
            <td >+91 {data1[index].number}</td>
            <td >{data1[index].email}</td>
             {show ? <td> <button key={index} id={index} class="btn btn-primary" onClick={() => { Edit(index); setShow(!show) }}>Edit</button>
              <button key={index} id={index} class="btn btn-danger" onClick={() => { Del(index) }}> X </button></td> : null}
            <td></td>
          </tr>)
      })}
    </tbody>
  </table>
  </>)
}

export default App;
