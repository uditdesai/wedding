import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { TweenMax } from "gsap"
import CSSPlugin from "gsap/CSSPlugin"
import useWindowSize from "../hooks/useWindowSize"

import Landing from "../images/landing.png"
import LandingMobile from "../images/landingMobile.png"

import Down from "../images/down.png"

import KathanBaby from "../images/kathan-baby.jpg"
import KathanKid from "../images/kathan-kid.jpg"
import RichaBaby from "../images/richa-baby.jpg"
import RichaKid from "../images/richa-kid.jpg"
import RichaGrad from "../images/richa-grad.jpg"
import KathanGrad from "../images/kathan-grad.jpg"
import KathanRichaHalloween from "../images/kathan-richa-halloween.jpg"
import RichaKathanToronto from "../images/richa-kathan-toronto.jpg"
import KathanRichaChandla from "../images/kathan-richa-chandla.jpg"
import Family from "../images/family-extended.jpg"

import Garba from "../images/garba.jpg"
import Mehndi from "../images/mehndi.jpg"
import Wedding from "../images/wedding.jpg"
import Reception from "../images/reception.jpg"
import BridesPithi from "../images/brides-pithi.jpg"
import GroomsPithi from "../images/grooms-pithi.jpg"

const C = CSSPlugin

const StyledLink = styled(Link)`
  text-decoration: none;
  outline: none;
`

const LandingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${Landing}) no-repeat center center fixed;
  background-size: cover;
  position: relative;

  @media (max-width: 800px) {
    min-height: 90vh;
    background: url(${LandingMobile}) no-repeat center center;
    background-size: cover;
  }
`

const LandingGradientOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgb(103, 77, 0);
  /* background: linear-gradient(
    180deg,
    rgba(103, 77, 0, 0) 0%,
    rgba(253, 218, 178, 1) 100%
  ); */

  /* background: rgb(103, 77, 0);
  background: linear-gradient(
    0deg,
    rgba(103, 77, 0, 1) 0%,
    rgba(252, 196, 147, 0) 100%
  ); */

  background: rgb(103, 77, 0);
  background: linear-gradient(
    0deg,
    rgba(154, 136, 82, 1) 0%,
    rgba(255, 220, 189, 0) 100%
  );
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 800px) {
    height: 90vh;
  }
`

const LandingTitle = styled.h1`
  font-family: "KaushanScript-Regular";
  font-size: 170px;
  color: white;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;

  @media (max-width: 1300px) {
    font-size: 145px;
  }
  @media (max-width: 1100px) {
    font-size: 130px;
  }
  @media (max-width: 1000px) {
    font-size: 120px;
  }
  @media (max-width: 900px) {
    font-size: 100px;
  }

  @media (max-width: 800px) {
    font-size: 42px;
  }
`

const LandingDate = styled.h4`
  font-family: "Judson-Bold";
  font-size: 24px;
  color: white;
  text-align: center;
  width: 100%;
  margin: 0 0 30px 0;
  padding: 0;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`

const LandingDown = styled.img`
  width: 20px;
  margin: 0 0 50px 0;
  cursor: pointer;
`

const RSVPContainer = styled.div`
  width: 100%;
  background: white;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RSVPSection = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin: 70px 0 30px 0;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 1000px) {
    width: 90%;
    align-items: center;
    flex-direction: column;
  }
`

const RSVPInnerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 340px;
  width: fit-content;

  @media (max-width: 1000px) {
    height: 300px;
    width: 100%;
    margin: 0 0 20px 0;

    &:first-child {
      margin: 0 0 60px 0;
    }
  }
`

const RSVPInnerSectionTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 340px;
  width: fit-content;

  @media (max-width: 1000px) {
    height: 275px;
    width: 100%;
    margin: 0 0 20px 0;
  }
`

const RSVPTitle = styled.h1`
  font-family: "Judson-Bold";
  color: black;
  font-size: 64px;
  margin: 0 0 0 0;
  width: 365px;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 48px;
  }
`

const RSVPDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 365px;

  @media (max-width: 1000px) {
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`

const DateCard = styled.div`
  width: 31%;
  height: 170px;
  background: #94a5c3;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RSVPDate = styled.h1`
  font-family: "Judson-Bold";
  color: black;
  font-size: 100px;
  margin: 0;

  @media (max-width: 1000px) {
    font-size: 100px;
  }
`

const RSVPDateSubText = styled.p`
  font-family: "Judson-Bold";
  color: black;
  font-size: 40px;
  margin: 0;

  @media (max-width: 1000px) {
    font-size: 32px;
    margin: 0;
  }
`

const RSVPInvitationText = styled.p`
  font-family: "Judson-Regular";
  color: black;
  font-size: 18px;
  margin: 0;
  width: 250px;
  text-align: center;
`

const RSVPSectionButton = styled.button`
  width: 280px;
  height: 60px;
  font-family: "Judson-Bold";
  color: black;
  background: #94a5c3;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  border: none;

  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 1px 3px 11px rgba(33, 33, 33, 0.3);
  }

  @media (max-width: 1000px) {
    width: 250px;
    height: 65px;
    font-size: 28px;
  }
`

const RSVPEnding = styled.h1`
  width: 280px;
  font-family: "Judson-Bold";
  color: #474594;
  font-size: 50px;
  text-align: center;
  margin: -20px 0 25px 0;

  @media (max-width: 800px) {
    font-size: 36px;
  }
`

const EventsContainer = styled.div`
  width: 100%;
  background-color: #fd9f93;
`

const EventsTitle = styled.h1`
  font-family: "Judson-Bold";
  font-size: 64px;
  color: black;
  width: 100%;
  text-align: center;
  padding: 75px 0 50px 0;

  @media (max-width: 800px) {
    font-size: 30px;
    padding: 40px 0 30px 0;
  }
`

const EventsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-gap: 75px 75px;
  justify-content: center;
  padding: 0 0 100px 0;

  @media (max-width: 1100px) {
    grid-template-columns: 300px 300px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 300px;
    grid-gap: 30px 30px;
  }
`

const EventSquare = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  position: relative;
  border-radius: 10px;

  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 1px 3px 11px rgba(71, 69, 148, 0.5);
  }
`

const EventImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`

const EventOverlay = styled.div`
  position: absolute;
  height: 300px;
  width: 300px;
  background: rgba(28, 27, 58, 0.6);
  opacity: 1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    background: rgba(28, 27, 58, 0.8);
  }
`

const EventSquareStartTitle = styled.h4`
  width: 80%;
  font-family: "Judson-Bold";
  font-size: 24px;
  color: white;
  text-align: center;
  position: absolute;
  margin: 0;

  @media (max-width: 800px) {
    opacity: 0;
  }
`

const EventSquareTitle = styled.h4`
  width: 85%;
  font-family: "Judson-Bold";
  font-size: 22px;
  color: white;
  text-align: center;
  margin: 0 0 15px 0;
  opacity: 0;

  @media (max-width: 800px) {
    opacity: 1;
  }
`

const EventSquareSubtitle = styled.p`
  width: 85%;
  font-family: "Judson-Regular";
  font-size: 16px;
  color: white;
  text-align: center;
  margin: 0 0 5px 0;
  opacity: 0;

  @media (max-width: 800px) {
    opacity: 1;
  }
`

const EventSquareDesc = styled.p`
  width: 85%;
  font-family: "Judson-Italic";
  font-size: 14px;
  color: white;
  text-align: center;
  margin: 5px 0 0 0;
  opacity: 0;

  @media (max-width: 800px) {
    opacity: 1;
  }
`

const EventSquarePrompt = styled.p`
  width: 85%;
  font-family: "Judson-Regular";
  font-size: 16px;
  color: white;
  text-align: center;
  margin: 20px 0 0 0;
  opacity: 0;

  @media (max-width: 800px) {
    opacity: 1;
  }
`

const StoryContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  height: fit-content;
`

const StoryTitle = styled.h1`
  font-family: "Judson-Bold";
  font-size: 64px;
  color: #5f3e73;
  width: 100%;
  text-align: center;
  padding: 75px 0 60px 0;

  @media (max-width: 800px) {
    font-size: 30px;
    padding: 40px 0 30px 0;
  }
`

const StorySection = styled.div`
  width: 70%;
  height: 2450px;
  position: relative;
  margin: 0 auto 0 auto;

  @media (max-width: 800px) {
    width: 95%;
    height: 1130px;
  }
`

const LastStoryImg = styled.div`
  width: 900px;
  height: 550px;
  background: grey;
  border-radius: 50%;
  margin: 0 auto 100px auto;
  background: url(${Family}) no-repeat center center;
  background-size: cover;

  @media (max-width: 800px) {
    width: 330px;
    height: 220px;
    margin: 0 auto 50px auto;
  }
`

const StoryImg1Left = styled.img`
  width: 400px;
  height: 400px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  right: ${props => `${props.right}%`};
  object-fit: cover;

  @media (max-width: 800px) {
    width: 165px;
    height: 165px;
    top: ${props => `${props.top / 2.1}px`};
    right: ${props => `${props.right - 3}%`};
  }
`

const StoryImg1Right = styled.img`
  width: 400px;
  height: 400px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.right}%`};
  object-fit: cover;

  @media (max-width: 800px) {
    width: 165px;
    height: 165px;
    top: ${props => `${props.top / 2.1}px`};
    left: ${props => `${props.right - 3}%`};
  }
`

const StoryImg2Left = styled.img`
  width: 300px;
  height: 300px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  right: ${props => `${props.right}%`};
  object-fit: cover;

  @media (max-width: 800px) {
    width: 145px;
    height: 145px;
    top: ${props => `${props.top / 2.1}px`};
    right: ${props => `${props.right - 3}%`};
  }
`

const StoryImg2Right = styled.img`
  width: 300px;
  height: 300px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.right}%`};
  object-fit: cover;

  @media (max-width: 800px) {
    width: 145px;
    height: 145px;
    top: ${props => `${props.top / 2.1}px`};
    left: ${props => `${props.right - 3}%`};
  }
`

const StoryImg3Left = styled.img`
  width: 450px;
  height: 450px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  right: ${props => `${props.right}%`};
  object-fit: cover;

  @media (max-width: 800px) {
    width: 185px;
    height: 185px;
    top: ${props => `${props.top / 2.1}px`};
    right: ${props => `${props.right - 3}%`};
  }
`

const StoryImg3Right = styled.img`
  width: 450px;
  height: 450px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.right}%`};
  left: ${props => `${props.right - 3}%`};
  object-fit: cover;

  @media (max-width: 800px) {
    width: 185px;
    height: 185px;
    top: ${props => `${props.top / 2.1}px`};
    left: ${props => `${props.right - 3}%`};
  }
`

const StoryImg4Left = styled.img`
  width: 350px;
  height: 350px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  right: ${props => `${props.right}%`};
  object-fit: cover;

  @media (max-width: 800px) {
    width: 165px;
    height: 165px;
    top: ${props => `${props.top / 2.1}px`};
    right: ${props => `${props.right - 3}%`};
  }
`

const StoryImg4Right = styled.img`
  width: 350px;
  height: 350px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.right}%`};
  object-fit: cover;

  @media (max-width: 800px) {
    width: 165px;
    height: 165px;
    top: ${props => `${props.top / 2.1}px`};
    left: ${props => `${props.right - 3}%`};
  }
`

const Footer = styled.div`
  width: 100%;
  background: #91677d;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 650px;

  @media (max-width: 800px) {
    width: 90%;
  }
`

const FooterButton = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 5px;
  background: #91677d;
  color: white;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Judson-Bold";
  font-size: 22px;
  color: white;
  cursor: pointer;
  transition: box-shadow 0.5s ease;
  outline: none;

  &:hover {
    box-shadow: 1px 3px 11px rgba(33, 33, 33, 0.3);
  }

  @media (max-width: 800px) {
    font-size: 16px;
    width: 100px;
    height: 40px;
  }
`

const FooterTitle = styled.h1`
  font-family: "Judson-Bold";
  font-size: 24px;
  color: white;
  padding: 50px 0 50px 0;
  margin: 0;
  width: 60%;

  @media (max-width: 800px) {
    font-size: 16px;
  }
`

const IndexPage = () => {
  // width and height of screen
  const { width } = useWindowSize()
  const [firstDigit, setFirstDigit] = useState(0)
  const [secondDigit, setSecondDigit] = useState(0)
  const [thirdDigit, setThirdDigit] = useState(0)

  useEffect(() => {
    let one_day = 1000 * 60 * 60 * 24
    let pres_day = new Date()
    let wedding_day = new Date(pres_day.getFullYear(), 5, 25)
    let result =
      Math.round(wedding_day.getTime() - pres_day.getTime()) / one_day
    var final_result = result.toFixed(0)

    if (final_result >= 100) {
      setFirstDigit(final_result.toString()[0])
      setSecondDigit(final_result.toString()[1])
      setThirdDigit(final_result.toString()[2])
    } else {
      setFirstDigit(0)
      setSecondDigit(final_result.toString()[0])
      setThirdDigit(final_result.toString()[1])
    }
  }, [])

  const scrollDown = () => {
    let elmt = document.getElementById("rsvpContainer")
    elmt.scrollIntoView({ behavior: "smooth" })
  }

  const hoverEvent = num => {
    if (width > 800) {
      TweenMax.to(`#eventOverlay${num}`, 0.5, {
        backgroundColor: "rgba(28, 27, 58, 0.9)",
      })
      TweenMax.to(`.eventText${num}`, 0.5, { autoAlpha: 1 })
      TweenMax.to(`#eventStartTitle${num}`, 0.3, { autoAlpha: 0 })
    }
  }

  const hoverEventRev = num => {
    if (width > 800) {
      TweenMax.to(`#eventOverlay${num}`, 0.5, {
        backgroundColor: "rgba(28, 27, 58, 0.6)",
      })
      TweenMax.to(`.eventText${num}`, 0.5, { autoAlpha: 0 })
      TweenMax.to(`#eventStartTitle${num}`, 0.3, { autoAlpha: 1 })
    }
  }

  return (
    <>
      <LandingContainer>
        <LandingGradientOverlay>
          <LandingTitle>#KathanGetsRich</LandingTitle>
          <LandingDate>June 25 - June 28, 2020</LandingDate>
          <LandingDown src={Down} onClick={scrollDown} />
        </LandingGradientOverlay>
      </LandingContainer>
      <RSVPContainer id="rsvpContainer">
        <RSVPSection>
          <RSVPInnerSection>
            <RSVPTitle>It's Desaided!</RSVPTitle>
            <RSVPDateContainer>
              <DateCard>
                <RSVPDate>{firstDigit}</RSVPDate>
              </DateCard>
              <DateCard>
                <RSVPDate>{secondDigit}</RSVPDate>
              </DateCard>
              <DateCard>
                <RSVPDate>{thirdDigit}</RSVPDate>
              </DateCard>
            </RSVPDateContainer>
            <RSVPDateSubText>Days until the wedding!</RSVPDateSubText>
          </RSVPInnerSection>
          <RSVPInnerSectionTwo>
            <RSVPTitle>Shaadi Mein Zaroor Aana!</RSVPTitle>
            <RSVPInvitationText>
              Celebrate with Richa and Kathan as they take on a new chapter of
              their lives!
            </RSVPInvitationText>
            <StyledLink to="/rsvp">
              <RSVPSectionButton>RSVP</RSVPSectionButton>
            </StyledLink>
          </RSVPInnerSectionTwo>
        </RSVPSection>
      </RSVPContainer>
      <EventsContainer id="eventsContainer">
        <EventsTitle>Band Baaja Baaraat</EventsTitle>
        <EventsGrid>
          <StyledLink to="/garba">
            <EventSquare>
              <EventImg src={Garba} />
              <EventOverlay
                onMouseEnter={() => {
                  hoverEvent(1)
                }}
                onMouseLeave={() => {
                  hoverEventRev(1)
                }}
                id="eventOverlay1"
              >
                <EventSquareStartTitle id="eventStartTitle1">
                  Garba and Sangeet
                </EventSquareStartTitle>
                <EventSquareTitle className="eventText1">
                  Garba and Sangeet
                </EventSquareTitle>
                <EventSquareSubtitle className="eventText1">
                  Thursday, June 25, 2020
                </EventSquareSubtitle>
                <EventSquareSubtitle className="eventText1">
                  Grand Galaxy Convention Centre
                </EventSquareSubtitle>
                <EventSquareSubtitle className="eventText1">
                  . . .
                </EventSquareSubtitle>
                <EventSquareDesc className="eventText1">
                  Ae halo! It’s an evening of hatke dance performances, tasty
                  street food and classic garba! Bhai Bhai!
                </EventSquareDesc>
                <EventSquarePrompt className="eventText1">
                  Click for more information!
                </EventSquarePrompt>
              </EventOverlay>
            </EventSquare>
          </StyledLink>
          <StyledLink to="/brides-pithi">
            <EventSquare>
              <EventImg src={BridesPithi} />
              <EventOverlay
                onMouseEnter={() => {
                  hoverEvent(2)
                }}
                onMouseLeave={() => {
                  hoverEventRev(2)
                }}
                id="eventOverlay2"
              >
                <EventSquareStartTitle id="eventStartTitle2">
                  Bride's Ganesh Puja, Pithi, and Grah Shanti
                </EventSquareStartTitle>
                <EventSquareTitle className="eventText2">
                  Bride's Ganesh Puja, Grah Shanti, and Pithi
                </EventSquareTitle>
                <EventSquareSubtitle className="eventText2">
                  Friday, June 26, 2020
                </EventSquareSubtitle>
                <EventSquareSubtitle className="eventText2">
                  Bride's Residence
                </EventSquareSubtitle>
                <EventSquareSubtitle className="eventText2">
                  . . .
                </EventSquareSubtitle>
                <EventSquareDesc className="eventText2">
                  A day of bringing happiness and prosperity for the
                  soon-to-be-married couple. During the pithi, the bride will be
                  covered in haldi to make the skin glow for the big day!
                </EventSquareDesc>
                <EventSquarePrompt className="eventText2">
                  Click for more information!
                </EventSquarePrompt>
              </EventOverlay>
            </EventSquare>
          </StyledLink>
          <StyledLink to="/mehndi">
            <EventSquare>
              <EventImg src={Mehndi} />
              <EventOverlay
                onMouseEnter={() => {
                  hoverEvent(3)
                }}
                onMouseLeave={() => {
                  hoverEventRev(3)
                }}
                id="eventOverlay3"
              >
                <EventSquareStartTitle id="eventStartTitle3">
                  Bride's Mehndi Night
                </EventSquareStartTitle>
                <EventSquareTitle className="eventText3">
                  Bride's Mehndi Night
                </EventSquareTitle>
                <EventSquareSubtitle className="eventText3">
                  Friday, June 26, 2020
                </EventSquareSubtitle>
                <EventSquareSubtitle className="eventText3">
                  Bride's Residence
                </EventSquareSubtitle>
                <EventSquareSubtitle className="eventText3">
                  . . .
                </EventSquareSubtitle>
                <EventSquareDesc className="eventText3">
                  Mehndi laga ke rakhna! A musical night of singing wedding
                  songs and getting your henna on!
                </EventSquareDesc>
                <EventSquarePrompt className="eventText3">
                  Click for more information!
                </EventSquarePrompt>
              </EventOverlay>
            </EventSquare>
          </StyledLink>
          <StyledLink to="/grooms-pithi">
            <EventSquare>
              <EventImg src={GroomsPithi} />
              <EventOverlay
                onMouseEnter={() => {
                  hoverEvent(4)
                }}
                onMouseLeave={() => {
                  hoverEventRev(4)
                }}
                id="eventOverlay4"
              >
                <EventSquareStartTitle id="eventStartTitle4">
                  Groom's Pithi, Grah Shanti, and Mehndi
                </EventSquareStartTitle>
                <EventSquareTitle className="eventText4">
                  Groom's Pithi, Grah Shanti, and Mehndi
                </EventSquareTitle>
                <EventSquareSubtitle className="eventText4">
                  Friday, June 26, 2020
                </EventSquareSubtitle>
                <EventSquareSubtitle className="eventText4">
                  Groom's Residence
                </EventSquareSubtitle>
                <EventSquareSubtitle className="eventText4">
                  . . .
                </EventSquareSubtitle>
                <EventSquareDesc className="eventText4">
                  A day of pre-wedding functions to bring good luck to the
                  couple and get the groom ready for the big day.
                </EventSquareDesc>
                <EventSquarePrompt className="eventText4">
                  Click for more information!
                </EventSquarePrompt>
              </EventOverlay>
            </EventSquare>
          </StyledLink>
          <StyledLink to="/wedding">
            <EventSquare>
              <EventImg src={Wedding} />
              <EventOverlay
                onMouseEnter={() => {
                  hoverEvent(5)
                }}
                onMouseLeave={() => {
                  hoverEventRev(5)
                }}
                id="eventOverlay5"
              >
                <EventSquareStartTitle id="eventStartTitle5">
                  Wedding Ceremony
                </EventSquareStartTitle>
                <EventSquareTitle className="eventText5">
                  Wedding Ceremony
                </EventSquareTitle>
                <EventSquareSubtitle className="eventText5">
                  Saturday, June 27, 2020
                </EventSquareSubtitle>
                <EventSquareSubtitle className="eventText5">
                  Embassy Grand Convention Centre
                </EventSquareSubtitle>
                <EventSquareSubtitle className="eventText5">
                  . . .
                </EventSquareSubtitle>
                <EventSquareDesc className="eventText5">
                  Dilwale dulhaniya leh jayenge! A baraat for the groom’s
                  entrance. Hindu wedding ceremony of hasta melap, mangal phera
                  and sapta padi to tie the knot. Followed by the bride's vidai.
                </EventSquareDesc>
                <EventSquarePrompt className="eventText5">
                  Click for more information!
                </EventSquarePrompt>
              </EventOverlay>
            </EventSquare>
          </StyledLink>
          <StyledLink to="/reception">
            <EventSquare>
              <EventImg src={Reception} />
              <EventOverlay
                onMouseEnter={() => {
                  hoverEvent(6)
                }}
                onMouseLeave={() => {
                  hoverEventRev(6)
                }}
                id="eventOverlay6"
              >
                <EventSquareStartTitle id="eventStartTitle6">
                  Reception
                </EventSquareStartTitle>
                <EventSquareTitle className="eventText6">
                  Reception
                </EventSquareTitle>
                <EventSquareSubtitle className="eventText6">
                  Sunday, June 28, 2020
                </EventSquareSubtitle>
                <EventSquareSubtitle className="eventText6">
                  Embassy Grand Convention Centre
                </EventSquareSubtitle>
                <EventSquareSubtitle className="eventText6">
                  . . .
                </EventSquareSubtitle>
                <EventSquareDesc className="eventText6">
                  Let’s nacho! Abhi toh party shuru hui haii! Auntyji auntyji,
                  get up and dance! Say Shava Shava! It's the time to disco!
                </EventSquareDesc>
                <EventSquarePrompt className="eventText6">
                  Click for more information!
                </EventSquarePrompt>
              </EventOverlay>
            </EventSquare>
          </StyledLink>
        </EventsGrid>
      </EventsContainer>
      <StoryContainer>
        <StoryTitle>Hum Tum</StoryTitle>
        <StorySection>
          <StoryImg1Left top={0} right={50} src={RichaBaby}></StoryImg1Left>
          <StoryImg2Right
            top={300}
            right={50}
            src={KathanBaby}
          ></StoryImg2Right>
          <StoryImg3Left top={500} right={50} src={KathanKid}></StoryImg3Left>
          <StoryImg4Right top={800} right={50} src={RichaKid}></StoryImg4Right>
          <StoryImg2Left
            top={1050}
            right={50}
            src={KathanRichaHalloween}
          ></StoryImg2Left>
          <StoryImg1Right
            top={1250}
            right={50}
            src={KathanGrad}
          ></StoryImg1Right>
          <StoryImg4Left top={1500} right={50} src={RichaGrad}></StoryImg4Left>
          <StoryImg3Right
            top={1750}
            right={50}
            src={KathanRichaChandla}
          ></StoryImg3Right>
          <StoryImg1Left
            top={2000}
            right={50}
            src={RichaKathanToronto}
          ></StoryImg1Left>
        </StorySection>
        <LastStoryImg></LastStoryImg>
      </StoryContainer>
      <Footer>
        <FooterWrapper>
          <FooterTitle>
            Use #KathanGetsRich and tag us @richaagram and @hashtagkathan when
            sharing your memories!
          </FooterTitle>
          <StyledLink to="/rsvp">
            <FooterButton>RSVP</FooterButton>
          </StyledLink>
        </FooterWrapper>
      </Footer>
    </>
  )
}

export default IndexPage
