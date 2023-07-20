// import React from "react"

// function App(){
//     return "Hello World"
// }

// export default App

import React, { useRef } from "react"
import { Form, Button, Card } from "react-bootstrap"
import Layout from "../components/layout"
// import { useAuth } from '../contexts/AuthContext'

export default function App () {
    const pickupRef = useRef()
    const destinationRef = useRef()
    const timeSlotRef = useRef()

  return (
    <>
    <Layout>
      <Card>
        <Card.Body>
           <h2 className="text-center mb-4">Book Ride</h2> 
           <Form>
            <Form.Group id="pickup">
              <Form.Label>Pick-up location</Form.Label>
              <Form.Control type="text" ref={pickupRef} required/>
            </Form.Group>
            <Form.Group id="destination">
              <Form.Label>Destination</Form.Label>
              <Form.Control type="text" ref={destinationRef} required/>
            </Form.Group>
            <Form.Group id="timeSlot">
              <Form.Label>Time Slot</Form.Label>
              <Form.Control type="time" ref={timeSlotRef} required/>
            </Form.Group>
            <Button className="w-100" type="submit">Find My Ride</Button>
           </Form>
        </Card.Body>
      </Card>
      </Layout>
    </>
  )
}
