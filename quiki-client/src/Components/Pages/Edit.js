import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import React, { useState, } from 'react'
import { Form, Button, Col } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';

const Edit = () => {
    //const history = useHistory();
    let history = useHistory();
    const [Student, setStudent] = useState(
        {
            rollno: '',
            name: ''
        })

    const { id } = useParams();
    //const { nm } = useParams();
    const [data, setData] = useState([]);
    const { rollno, name } = Student;

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `http://localhost:8000/stock/${id}`,
            );

            setData(result.data);
            // console.log(result.data[0].rollno);
            setStudent(result.data[0])
            //setStudent(result.data.rollno);
        };

        fetchData();
    }, [id]);

    const submitHandeler = async e => {
        e.preventDefault()
        console.log(Student.rollno + "" + Student.name);
        await axios.put(`http://localhost:8000/stock/edit/${id}/${Student.name}`)
        history.push('/');
        //  history.pushState("/");
        // alert(Student.rollno);
        //  alert(Student.name);
        // alert(`${rollno}${name}`)

    }
    return (
        <div className="container w-75 mx-auto mt-5  shadow p-5">
            <h2 className="text-center mb-4">Edit</h2>

            <Form onSubmit={submitHandeler} className="">

                <Form.Row>

                    <Col xs={5}>

                        <Form.Group controlId="formBasicRollno">
                            <Form.Label>Rollno</Form.Label>
                            <Form.Control type="text" placeholder="Enter rollno" value={rollno}
                                readOnly onChange={e => setStudent({ ...Student, rollno: e.target.value })} />

                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col xs={5}>
                        <Form.Group controlId="formBasicname">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="enter name" value={name}
                                onChange={e => setStudent({ ...Student, name: e.target.value })} />
                        </Form.Group>
                    </Col>

                </Form.Row>
                <Button variant="primary" type="submit">
                    Submit
  </Button>
                <span></span>
            </Form>
        </div>
    )
}

export default Edit
