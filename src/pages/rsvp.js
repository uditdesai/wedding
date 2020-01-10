import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { graphql } from "gatsby"
import sheetrock from "sheetrock"

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
  justify-content: center;
  background: #fce4ec;
`

// const Header = styled.div`
//   width: 100%;
//   height: 20px;
//   margin: 0;
//   padding: 0;
//   background: #474594;
// `

const BackLink = styled.p`
  font-family: "OpenSans-Regular";
  font-size: 14px;
  width: 700px;
  color: black;
  text-decoration: underline;
  text-align: left;
  margin: 0;
`

const Hashtag = styled.p`
  font-family: "Judson-Bold";
  font-size: 24px;
  width: 650px;
  color: #474594;
  text-align: right;
`

const FormContainer = styled.div`
  width: 700px;
  /* border: 5px solid #474594; */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0 75px 0;
  box-sizing: border-box;
  padding: 40px 0 40px 0;
  box-shadow: 1px 3px 11px rgba(33, 33, 33, 0.3);
  background: white;
`

const FormTitle = styled.h1`
  font-family: "OpenSans-Bold";
  font-size: 18px;
  color: black;
  width: 475px;
  text-align: center;
  margin: 0;

  &:first-of-type {
    margin: 0 0 30px 0;
  }
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
  border: none;

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

const EventRSVPWrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border: 1px dashed #e4e4e4;
  box-sizing: border-box;
  padding: 20px;
`

const EventQuestionWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 10px 0 0 0;
`

const EventTitle = styled.h4`
  font-family: "OpenSans-Bold";
  font-size: 16px;
  color: black;
  text-decoration: underline;
  margin: 0;
`

const YesNoWrapper = styled.div`
  display: flex;
  align-self: center;
  justify-self: start;
`

const AttendanceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px 0 0;
`

const YesNo = styled.label`
  font-family: "OpenSans-Regular";
  font-size: 14px;
  color: black;
  margin: 0 5px 0 0;
`

const YesNoTitle = styled.p`
  font-family: "OpenSans-Regular";
  font-size: 14px;
  color: black;
  margin: 0 20px 0 0;
  width: 70px;
`

const YesNoInput = styled.input``

const FamilyMembersWrapper = styled.div`
  display: flex;
  justify-self: end;
`

const FamilyMemberText = styled.p`
  font-family: "OpenSans-Regular";
  font-size: 14px;
  color: black;
  width: 200px;
  margin: 0 20px 0 0;
`

const FamilyMemberInput = styled.select`
  border: 1px solid black;
  background: white;
  border-radius: 5px;
  height: 30px;
  width: 40px;
  outline: none;
`

const RSVPPage = ({ data }) => {
  let guests = [...data.currentGuests.edges]

  const [guestData, setGuestData] = useState([])

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const [correctGuestScreen, setCorrectGuestScreen] = useState(false)
  const [incorrectGuestScreen, setIncorrectGuestScreen] = useState(false)

  const [submittedRSVP, setSubmittedRSVP] = useState(false)

  const [side, setSide] = useState("")
  const [tag, setTag] = useState("")
  const [sheetIndex, setSheetIndex] = useState(0)

  const [bridesPithi, setBridesPithi] = useState({
    attending: "n/a",
    numOfFamily: 0,
  })
  const [groomsPithi, setGroomsPithi] = useState({
    attending: "n/a",
    numOfFamily: 0,
  })
  const [wedding, setWedding] = useState({
    attending: "n/a",
    numOfFamily: 0,
  })
  const [reception, setReception] = useState({
    attending: "n/a",
    numOfFamily: 0,
  })

  const firstNameHandler = e => {
    setFirstName(e.target.value)
  }

  const lastNameHandler = e => {
    setLastName(e.target.value)
  }

  const bridesPithiAttendanceHandler = e => {
    const yesOrNo = e.currentTarget.value
    setBridesPithi(prev => {
      return { attending: yesOrNo, numOfFamily: prev.numOfFamily }
    })
  }

  const bridesPithiFamilyHandler = e => {
    const numOfFamily = e.currentTarget.value
    setBridesPithi(prev => {
      return { attending: prev.attending, numOfFamily: numOfFamily }
    })
  }

  const groomsPithiAttendanceHandler = e => {
    const yesOrNo = e.currentTarget.value
    setGroomsPithi(prev => {
      return { attending: yesOrNo, numOfFamily: prev.numOfFamily }
    })
  }

  const groomsPithiFamilyHandler = e => {
    const numOfFamily = e.currentTarget.value
    setGroomsPithi(prev => {
      return { attending: prev.attending, numOfFamily: numOfFamily }
    })
  }

  const weddingAttendanceHandler = e => {
    const yesOrNo = e.currentTarget.value
    setWedding(prev => {
      return { attending: yesOrNo, numOfFamily: prev.numOfFamily }
    })
  }

  const weddingFamilyHandler = e => {
    const numOfFamily = e.currentTarget.value
    setWedding(prev => {
      return { attending: prev.attending, numOfFamily: numOfFamily }
    })
  }

  const receptionAttendanceHandler = e => {
    const yesOrNo = e.currentTarget.value
    setReception(prev => {
      return { attending: yesOrNo, numOfFamily: prev.numOfFamily }
    })
  }

  const receptionFamilyHandler = e => {
    const numOfFamily = e.currentTarget.value
    setReception(prev => {
      return { attending: prev.attending, numOfFamily: numOfFamily }
    })
  }

  useEffect(() => {
    const myCallback = function(error, options, response) {
      if (!error) {
        setGuestData(response.rows.slice(1, response.rows.length))
      } else {
        console.log(error)
      }
    }
    sheetrock({
      url:
        "https://docs.google.com/spreadsheets/d/1wEO30I7CduPCuQ_QNTiuEedVfmY-N-72oQxwdCsU_Wc/edit?usp=sharing#gid=0",
      callback: myCallback,
      reset: true,
    })
  }, [])

  useEffect(() => {
    if (correctGuestScreen === true) {
      for (let i = 0; i < guestData.length; i++) {
        if (
          guests[sheetIndex].node.name.toLowerCase().trim() ===
          guestData[i].cellsArray[0].toLowerCase().trim()
        ) {
          if (guestData[i].cellsArray[5] !== "n/a") {
            setBridesPithi({
              attending: guestData[i].cellsArray[5],
              numOfFamily: guestData[i].cellsArray[13],
            })
          }
          if (guestData[i].cellsArray[7] !== "n/a") {
            setGroomsPithi({
              attending: guestData[i].cellsArray[7],
              numOfFamily: guestData[i].cellsArray[14],
            })
          }
          if (guestData[i].cellsArray[9] !== "n/a") {
            setWedding({
              attending: guestData[i].cellsArray[9],
              numOfFamily: guestData[i].cellsArray[15],
            })
          }
          if (guestData[i].cellsArray[11] !== "n/a") {
            setReception({
              attending: guestData[i].cellsArray[11],
              numOfFamily: guestData[i].cellsArray[16],
            })
          }
        }
      }
    }
  }, [guestData, correctGuestScreen])

  const submitName = e => {
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
      if (data.guest.name === guests[i].node.name.toLowerCase().trim()) {
        foundGuest = true
        setSide(guests[i].node.side)
        setTag(guests[i].node.tag)
        setSheetIndex(i)
      } else {
        if (guests[i].node.familymembers !== null) {
          const names = guests[i].node.familymembers.split(", ")
          for (let j = 0; j < names.length; j++) {
            if (data.guest.name === names[j].toLowerCase().trim()) {
              foundGuest = true
              setSide(guests[i].node.side)
              setTag(guests[i].node.tag)
              setSheetIndex(i)
            }
          }
        }
      }
    }

    if (foundGuest === true) {
      console.log("success")
      setCorrectGuestScreen(true)
    } else {
      console.log("no guest found")
      setIncorrectGuestScreen(true)
    }
  }

  const submitInfo = e => {
    e.preventDefault()

    const data = {
      guest: {
        name: guests[sheetIndex].node.name,
        numberOfGuests: guests[sheetIndex].node.numberofguests,
        familyMembers: guests[sheetIndex].node.familyMembers,
        tag: tag,
        side: side,
        eventOneAttending: bridesPithi.attending,
        eventOneNumber: `${bridesPithi.numOfFamily}`,
        eventTwoAttending: groomsPithi.attending,
        eventTwoNumber: `${groomsPithi.numOfFamily}`,
        eventThreeAttending: wedding.attending,
        eventThreeNumber: `${wedding.numOfFamily}`,
        eventFourAttending: reception.attending,
        eventFourNumber: `${reception.numOfFamily}`,
      },
    }

    fetch(
      `https://v2-api.sheety.co/efd2a35bf372a3cbe5976ef9c8e084d8/kathanGetsRich/guests/${sheetIndex +
        2}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data)
        setSubmittedRSVP(true)
        setCorrectGuestScreen(false)
        setIncorrectGuestScreen(false)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <RSVPContainer>
      <StyledLink to="/">
        <BackLink>Back to the Wedding</BackLink>
      </StyledLink>
      {submittedRSVP === true && (
        <FormContainer>
          <FormTitle>
            Thanks for sending us your RSVP to the wedding events!
          </FormTitle>
          <FormTitle>Shaadi mein zaroor aana!</FormTitle>
        </FormContainer>
      )}
      {correctGuestScreen === false &&
        incorrectGuestScreen === false &&
        submittedRSVP === false && (
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
              <InputButton onClick={submitName}>Submit</InputButton>
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
            <InputButton onClick={submitName}>Submit</InputButton>
          </FormWrapper>
        </FormContainer>
      )}
      {correctGuestScreen === true && incorrectGuestScreen === false && (
        <FormContainer>
          <FormTitle>
            You and your family are invited to the following wedding events, let
            us know which you can attend!
          </FormTitle>
          <FormWrapper>
            {(tag === "all events" && side === "bride") ||
            (tag === "pithi" && side === "bride") ? (
              <EventRSVPWrapper>
                <EventTitle>Bride's Pithi</EventTitle>
                <EventQuestionWrapper>
                  <YesNoWrapper>
                    <YesNoTitle>Can you attend?</YesNoTitle>
                    <AttendanceWrapper>
                      <YesNo>Yes</YesNo>
                      <YesNoInput
                        checked={bridesPithi.attending === "yes"}
                        value="yes"
                        type="radio"
                        onChange={bridesPithiAttendanceHandler}
                      />
                    </AttendanceWrapper>
                    <AttendanceWrapper>
                      <YesNo>No</YesNo>
                      <YesNoInput
                        checked={bridesPithi.attending === "no"}
                        value="no"
                        type="radio"
                        onChange={bridesPithiAttendanceHandler}
                      />
                    </AttendanceWrapper>
                  </YesNoWrapper>
                  <FamilyMembersWrapper>
                    <FamilyMemberText>
                      Number of family members who can attend?
                    </FamilyMemberText>
                    <FamilyMemberInput
                      value={bridesPithi.numOfFamily}
                      onChange={bridesPithiFamilyHandler}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </FamilyMemberInput>
                  </FamilyMembersWrapper>
                </EventQuestionWrapper>
              </EventRSVPWrapper>
            ) : (
              <></>
            )}
            {(tag === "all events" && side === "groom") ||
              (tag === "pithi" && side === "groom" && (
                <EventRSVPWrapper>
                  <EventTitle>Groom's Pithi</EventTitle>
                  <EventQuestionWrapper>
                    <YesNoWrapper>
                      <YesNoTitle>Can you attend?</YesNoTitle>
                      <AttendanceWrapper>
                        <YesNo>Yes</YesNo>
                        <YesNoInput
                          checked={groomsPithi.attending === "yes"}
                          value="yes"
                          type="radio"
                          onChange={groomsPithiAttendanceHandler}
                        />
                      </AttendanceWrapper>
                      <AttendanceWrapper>
                        <YesNo>No</YesNo>
                        <YesNoInput
                          checked={groomsPithi.attending === "no"}
                          value="no"
                          type="radio"
                          onChange={groomsPithiAttendanceHandler}
                        />
                      </AttendanceWrapper>
                    </YesNoWrapper>
                    <FamilyMembersWrapper>
                      <FamilyMemberText>
                        Number of family members who can attend?
                      </FamilyMemberText>
                      <FamilyMemberInput
                        value={groomsPithi.numOfFamily}
                        onChange={groomsPithiFamilyHandler}
                      >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </FamilyMemberInput>
                    </FamilyMembersWrapper>
                  </EventQuestionWrapper>
                </EventRSVPWrapper>
              ))}
            {(tag === "all events" ||
              tag === "wedding" ||
              tag === "wedding and reception") && (
              <EventRSVPWrapper>
                <EventTitle>Wedding</EventTitle>
                <EventQuestionWrapper>
                  <YesNoWrapper>
                    <YesNoTitle>Can you attend?</YesNoTitle>
                    <AttendanceWrapper>
                      <YesNo>Yes</YesNo>
                      <YesNoInput
                        checked={wedding.attending === "yes"}
                        value="yes"
                        type="radio"
                        onChange={weddingAttendanceHandler}
                      />
                    </AttendanceWrapper>
                    <AttendanceWrapper>
                      <YesNo>No</YesNo>
                      <YesNoInput
                        checked={wedding.attending === "no"}
                        value="no"
                        type="radio"
                        onChange={weddingAttendanceHandler}
                      />
                    </AttendanceWrapper>
                  </YesNoWrapper>
                  <FamilyMembersWrapper>
                    <FamilyMemberText>
                      Number of family members who can attend?
                    </FamilyMemberText>
                    <FamilyMemberInput
                      value={wedding.numOfFamily}
                      onChange={weddingFamilyHandler}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </FamilyMemberInput>
                  </FamilyMembersWrapper>
                </EventQuestionWrapper>
              </EventRSVPWrapper>
            )}
            {(tag === "all events" ||
              tag === "reception" ||
              tag === "wedding and reception") && (
              <EventRSVPWrapper>
                <EventTitle>Reception</EventTitle>
                <EventQuestionWrapper>
                  <YesNoWrapper>
                    <YesNoTitle>Can you attend?</YesNoTitle>
                    <AttendanceWrapper>
                      <YesNo>Yes</YesNo>
                      <YesNoInput
                        checked={reception.attending === "yes"}
                        value="yes"
                        type="radio"
                        onChange={receptionAttendanceHandler}
                      />
                    </AttendanceWrapper>
                    <AttendanceWrapper>
                      <YesNo>No</YesNo>
                      <YesNoInput
                        checked={reception.attending === "no"}
                        value="no"
                        type="radio"
                        onChange={receptionAttendanceHandler}
                      />
                    </AttendanceWrapper>
                  </YesNoWrapper>
                  <FamilyMembersWrapper>
                    <FamilyMemberText>
                      Number of family members who can attend?
                    </FamilyMemberText>
                    <FamilyMemberInput
                      value={reception.numOfFamily}
                      onChange={receptionFamilyHandler}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </FamilyMemberInput>
                  </FamilyMembersWrapper>
                </EventQuestionWrapper>
              </EventRSVPWrapper>
            )}
            <InputButton onClick={submitInfo}>Submit</InputButton>
          </FormWrapper>
        </FormContainer>
      )}
    </RSVPContainer>
  )
}

export default RSVPPage

export const query = graphql`
  query {
    currentGuests: allGoogleSheetGuestsRow {
      edges {
        node {
          name
          numberofguests
          familymembers
          tag
          side
          eventoneattending
          eventonenumber
          eventtwoattending
          eventtwonumber
          eventthreeattending
          eventthreenumber
          eventfourattending
          eventfournumber
          eventonecount
          eventtwocount
          eventthreecount
          eventfourcount
        }
      }
    }
  }
`
