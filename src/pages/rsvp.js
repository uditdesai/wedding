import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const RSVPPage = () => {
  const [name, setName] = useState("")
  const [canAttend, setCanAttend] = useState("")

  const nameHandler = e => {
    setName(e.target.value)
  }

  const canAttendHandler = e => {
    setCanAttend(e.target.value)
  }

  const submitInfo = e => {
    e.preventDefault()

    const data = {
      guest: {
        name: name,
        canAttend: canAttend,
      },
    }

    console.log(data)

    // fetch(
    //   "https://v2-api.sheety.co/efd2a35bf372a3cbe5976ef9c8e084d8/kathanGetsRich/guests",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   }
    // )
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log("Success:", data)
    //   })
    //   .catch(error => {
    //     console.error(error)
    //   })
  }

  useEffect(() => {
    // fetch(
    //   "https://v2-api.sheety.co/efd2a35bf372a3cbe5976ef9c8e084d8/kathanGetsRich/guests"
    // )
    //   .then(results => {
    //     return results.json()
    //   })
    //   .then(data => {
    //     console.log(data)
    //   })
  }, [])

  return (
    <div>
      <h1>Kathan Gets Rich</h1>

      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={nameHandler} />

        <label htmlFor="canAttend">Can you attend? (Yes or No)</label>
        <input
          type="text"
          id="canAttend"
          value={canAttend}
          onChange={canAttendHandler}
        />

        <button onClick={submitInfo}>Submit</button>
      </form>
    </div>
  )
}

export default RSVPPage
