import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const RSVPContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  width: 100%;
  height: 20px;
  margin: 0;
  padding: 0;
  background: #474594;
`

const BackLink = styled.p`
  font-family: "Judson-Bold";
  font-size: 14px;
  width: 650px;
  color: black;
  text-decoration: underline;
  text-align: left;
  margin: 100px 0 0 0;
`

const FormContainer = styled.div`
  width: 650px;
  border: 5px solid #474594;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0 0 0;
  box-sizing: border-box;
  padding: 40px 0 40px 0;
`

const FormTitle = styled.h1`
  font-family: "OpenSans-Bold";
  font-size: 18px;
  color: black;
  width: 400px;
  text-align: center;
  margin: 0 0 40px 0;
`

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InputTitle = styled.label`
  font-family: "OpenSans-Bold";
  font-size: 14px;
  color: black;
  width: 250px;
  text-align: left;
  margin: 0 0 5px 0;
`

const InputForm = styled.input`
  width: 250px;
  height: 35px;
  border: 2px solid #88dcf8;
  box-sizing: border-box;
  padding: 0 5px 0 5px;
  margin: 0 0 20px 0;
  font-family: "OpenSans-Regular";
  font-size: 12px;
  color: black;
`

const InputButton = styled.button`
  width: 120px;
  height: 40px;
  background: #88dcf8;
  border-radius: 5px;
  font-family: "OpenSans-Bold";
  font-size: 14px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 0 0;
  cursor: pointer;
  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 1px 3px 11px rgba(33, 33, 33, 0.3);
  }
`

const RSVPPage = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const firstNameHandler = e => {
    setFirstName(e.target.value)
  }

  const lastNameHandler = e => {
    setLastName(e.target.value)
  }

  const submitInfo = e => {
    e.preventDefault()

    const data = {
      guest: {
        name: firstName,
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
    <RSVPContainer>
      <Header></Header>
      <BackLink>Back to the Wedding</BackLink>
      <FormContainer>
        <FormTitle>Enter your name to RSVP!</FormTitle>
        <FormWrapper>
          <InputTitle htmlFor="firstName">First Name</InputTitle>
          <InputForm
            type="text"
            id="firstName"
            value={firstName}
            onChange={firstNameHandler}
            placeholder="Enter your first name"
          />
          <InputTitle htmlFor="lastName">Last Name</InputTitle>
          <InputForm
            type="text"
            id="lastName"
            value={lastName}
            onChange={lastNameHandler}
            placeholder="Enter your last name"
          ></InputForm>
          <InputButton>Submit</InputButton>
        </FormWrapper>
      </FormContainer>
    </RSVPContainer>
    // <div>
    //   <h1>Kathan Gets Rich</h1>

    //   <form>
    //     <label htmlFor="name">Name</label>
    //     <input type="text" id="name" value={name} onChange={nameHandler} />

    //     <label htmlFor="canAttend">Can you attend? (Yes or No)</label>
    //     <input
    //       type="text"
    //       id="canAttend"
    //       value={canAttend}
    //       onChange={canAttendHandler}
    //     />

    //     <button onClick={submitInfo}>Submit</button>
    //   </form>
    // </div>
  )
}

export default RSVPPage
