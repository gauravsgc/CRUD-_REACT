//import React from 'react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Table } from 'react-bootstrap';
const View = () => {
    const { id } = useParams();
    console.warn(id);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `http://localhost:8000/stock/${id}`,
            );

            setData(result.data);
            console.log(result.data);
        };

        fetchData();
    }, [id]);
    return (
        <div>
            hello i am view
            <Table striped bordered hover responsive >
                <thead>
                    <th>Rollno</th>
                    <th> Name</th>
                    <th>Action</th>

                    {data.map((item, index) => (<tr key={index}>
                        <td > {item.rollno}</td>
                        <td >  {item.name} </td>
                        <td  >
                            <NavLink to={`/`} exact activeStyle={{ color: 'green' }} className="btn btn-warning ">Back</NavLink>
                            {/*  <Button variant="primary" className="" onClick={() => view(item.rollno)} >View</Button>
                            <NavLink to={`/view/${item.rollno}`} exact activeStyle={{ color: 'green' }} className="btn btn-warning ">View</NavLink>
                            <Button variant="success" className="mx-2">Edit </Button>
                            <Button variant="danger">Delete</Button>
*/}
                        </td>
                    </tr>

                    ))}
                </thead>
            </Table >
        </div>
    )
}

export default View
