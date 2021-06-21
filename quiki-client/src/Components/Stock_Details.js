
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, Link, } from 'react-router-dom';
//import View from './View.js';

import { Table } from 'react-bootstrap';
//import http from "../http-common";
function Stock_Details() {
    const [data, setData] = useState([]);
    const [msg, setmsg] = useState("");
    /* const view = (rollno) => {
         //function view(rollno) {
         console.log(`you clicked me${rollno}`);
         const fetchData = async () => {
             const result = await axios(
                 `http://localhost:8000/stock/${rollno}`,
             );
 
             setData(result.data);
             console.log(result.data);
         };
         fetchData();
     }*/

    useEffect(() => {


        fetchData();
    }, []);
    const fetchData = async () => {
        const result = await axios.get(
            'http://localhost:8000/stock',
        );

        setData(result.data);
        // console.log(result.data);
    };
    const deleteuser = async rollno => {
        console.log(rollno);
        await axios.delete(
            `http://localhost:8000/stock/delete/${rollno}`)
        fetchData();
    }

    //return http.get("/stock");


    return (
        <>
            <div>{msg === 'hi' ? <div className="alert alert-primary" >
                This is a  alert—check it out!
  </div> : null}</div>
            <Table striped bordered hover responsive >
                <thead>
                    <th>Rollno</th>
                    <th> Name</th>
                    <th>Action</th>

                    {data.map((item, index) => (<tr key={index}>
                        <td > {item.rollno}</td>
                        <td >  {item.name} </td>
                        <td  >

                            {/*  <Button variant="primary" className="" onClick={() => view(item.rollno)} >View</Button>*/}
                            <NavLink to={`/view/${item.rollno}`} exact activeStyle={{ color: 'green' }} className="btn btn-warning ">View</NavLink>
                            <NavLink to={`/Edit/${item.rollno}/${item.name}`} exact activeStyle={{ color: 'green' }} className="btn btn-success mx-2 ">Edit</NavLink>
                            {/*<Button variant="success" className="mx-2">Edit </Button> */}
                            <Link onClick={() => deleteuser(item.rollno)} exact activeStyle={{ color: 'green' }} className="btn btn-danger mx-2 ">Delete</Link>


                        </td>
                    </tr>

                    ))}
                </thead>
            </Table >
        </>
    );

}

export default Stock_Details
