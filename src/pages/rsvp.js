import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const guests = [
  {
    name: "Richa Desai",
    numOfGuests: "3",
    familyMembers: "Udit Desai, Yogesh Desai, Samta Desai",
    tag: "All events",
  },
  {
    name: "Kathan Desai",
    numOfGuests: "1",
    familyMembers: "Kavin Desai",
    tag: "Wedding and Reception",
  },
  {
    name: "Udit Desai",
    numOfGuests: "0",
    familyMembers: "",
    tag: "Reception",
  },
]

const StyledLink = styled(Link)`
  text-decoration: none;
  outline: none;
`

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
  font-size: 16px;
  width: 650px;
  color: black;
  text-decoration: underline;
  text-align: left;
  margin: 100px 0 0 0;
`

const Hashtag = styled.p`
  font-family: "Judson-Bold";
  font-size: 24px;
  width: 650px;
  color: #474594;
  text-align: right;
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
  box-shadow: 1px 3px 11px rgba(33, 33, 33, 0.3);
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
  width: 300px;
  text-align: left;
  margin: 0 0 5px 0;
`

const InputForm = styled.input`
  width: 300px;
  height: 35px;
  border: 2px solid #88dcf8;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0 5px 0 8px;
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
  outline: none;

  &:hover {
    box-shadow: 1px 3px 11px rgba(33, 33, 33, 0.3);
  }
`

const InputErrorMessage = styled.p`
  width: 300px;
  text-align: left;
  font-family: "OpenSans-Regular";
  font-size: 14px;
  color: black;
  margin: 6px 0 6px 0;
`

const RSVPPage = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const [correctGuestScreen, setCorrectGuestScreen] = useState(false)
  const [incorrectGuestScreen, setIncorrectGuestScreen] = useState(false)

  const firstNameHandler = e => {
    setFirstName(e.target.value)
  }

  const lastNameHandler = e => {
    setLastName(e.target.value)
  }

  const submitInfo = e => {
    e.preventDefault()

    setCorrectGuestScreen(false)
    setIncorrectGuestScreen(false)

    const data = {
      guest: {
        name: `${firstName
          .toLowerCase()
          .trim()} ${lastName.toLowerCase().trim()}`,
      },
    }

    console.log(data)

    setFirstName("")
    setLastName("")

    let foundGuest = false
    for (let i = 0; i < guests.length; i++) {
      if (data.guest.name === guests[i].name.toLowerCase().trim()) {
        foundGuest = true
      }
    }

    if (foundGuest === true) {
      console.log("success")
      setCorrectGuestScreen(true)
    } else {
      console.log("no guest found")
      setIncorrectGuestScreen(true)
    }

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
      <StyledLink to="/">
        <BackLink>Back to the Wedding</BackLink>
      </StyledLink>
      {correctGuestScreen === false && incorrectGuestScreen === false && (
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
            <InputButton onClick={submitInfo}>Submit</InputButton>
          </FormWrapper>
        </FormContainer>
      )}
      {correctGuestScreen === false && incorrectGuestScreen === true && (
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
            <InputErrorMessage>
              Unfortunately, we don't have your name on our guestlist.
            </InputErrorMessage>
            <InputErrorMessage>
              Please make sure you enter your name correctly.
            </InputErrorMessage>
            <InputErrorMessage>
              If you think we've made a mistake please email us at
              guests@kathangetsrich.com!
            </InputErrorMessage>
            <InputButton onClick={submitInfo}>Submit</InputButton>
          </FormWrapper>
        </FormContainer>
      )}
      {correctGuestScreen === true && incorrectGuestScreen === false && (
        <FormContainer>
          <FormTitle>
            Let us know which events you and your family can attend!
          </FormTitle>
        </FormContainer>
      )}
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
