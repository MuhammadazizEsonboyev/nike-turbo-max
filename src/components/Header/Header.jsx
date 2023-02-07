import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const navigate = useNavigate()

    let obj = {
        name: name,
        age: age
    }


    const postData = (e) => {
        e.preventDefault()
        if (obj.name.length >= 7 && obj.age >= 18) {
            axios.post("http://localhost:3000/data", obj).then(res => {
                if (res.status === 201) {
                    alert(res.statusText)
                    setName("")
                    setAge("")
                    navigate("/result")
                    console.log(res.data)
                }
            })
        }
        else { alert("To'g'irlab kiriting ma'lumotni") }

    }

    return (
        <>
            <Container fluid='md'>
                <Row className="justify-content-md-center mt-5" >
                    <Col xs={6}>
                        <Form onSubmit={postData}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} required className='mb-1' />

                                {name.length < 7 ? <p style={{ color: "red" }}>Ma'lumot 7 harfdan iborat bo'lishi kerak</p> : <p style={{ color: "green" }}>To'g'ri</p>}

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="text" placeholder="Age" onChange={(e) => setAge(e.target.value)} value={age} required className='mb-1' />

                                {age < 18 ? <p style={{ color: "red" }}>Bu saytga kirishga yoshlik qilasan</p> : <p style={{ color: "green" }}>Mujik</p>}


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
        </>
    )
}

export default Header