import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const GetData = () => {

const [user, setUser] = useState([])

const getAllData = () => {
    axios.get('http://localhost:3000/data').then(data =>{
       setUser(data.data)
    })
}

const deleteData = (id) => {
    axios.delete(`http://localhost:3000/data/${id}`)
    .then((res)=>{alert(res.statusText)})
    
}

useEffect(()=>{
    getAllData()
}, [])



    return (
        <>
            <Container>
                <Row className='justify-content-center mt-5'>
                    <Col xs={10}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Age</th>

                                </tr>
                            </thead>
                            <tbody>
                               {user?.map((data)=>{
                                 return(
                                    <>
                                    <tr>
                                 <td>{data.id}</td>
                                 <td>{data.name}</td>
                                 <td>{data.age}</td>
                                 <Link to={`/result/edit/${data.id}`}>
                                 <button>Edit</button>
                                 </Link>
                                 <button onClick={()=> deleteData(data.id)}>Delete</button>
                             </tr>
                                    </>
                                 )
                               })}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default GetData