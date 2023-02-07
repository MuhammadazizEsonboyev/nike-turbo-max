import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const EditPage = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const navigate = useNavigate()
    const { id } = useParams()
    console.log(id)

    const getOne = () => {
        axios.get(`http://localhost:3000/data/${id}`)
            .then((res) => {
                console.log(res)
                setName(res.data.name)
                setAge(res.data.age)
            })
    }

    useEffect(() => {
        getOne()
    }, [])

    const editData = (edit_id) => {
        let obj_edt = {
            name: name,
            age: age
        }

        if (obj_edt.name.length >= 7 && obj_edt.age >= 18){
            axios.put(`http://localhost:3000/data/${edit_id}`, obj_edt)
            .then((res) => {
                alert(res.statusText)
                navigate("/result")
                setName("")
                setAge("")

            }) 
        }

        else { alert("To'g'irlab kiriting ma'lumotni") }
    }


    return (
        <>
            <Container>
                <Row className="justify-content-md-center mt-5">
                    <Col xs={6}>
                        <Container fluid='md'>
                            <Row className="justify-content-md-center mt-5" >
                                <Col xs={6}>
                                    <Form onSubmit={() => editData(id)}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} required />

                                            
                                {name.length < 7 ? <p style={{ color: "red" }}>Ma'lumot 7 harfdan iborat bo'lishi kerak</p> : <p style={{ color: "green" }}>To'g'ri</p>}

                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Age</Form.Label>
                                            <Form.Control type="text" placeholder="Age" onChange={(e) => setAge(e.target.value)} value={age} required />

                                            {age < 18 ? <p style={{ color: "red" }}>Yoshing kichkina</p> : <p style={{ color: "green" }}>Erkak</p>}

                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">

                                        </Form.Group>
                                        <Button variant="primary" style={{ width: "100%" }} type="submit">
                                            Submit
                                        </Button>
                                    </Form>

                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EditPage