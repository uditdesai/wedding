import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { TweenMax, Power0 } from "gsap"
import CSSPlugin from "gsap/CSSPlugin"
const C = CSSPlugin
import useWindowSize from "../hooks/useWindowSize"

import Landing from "../images/landing.png"
import LandingMobile from "../images/landingMobile.png"
import Calendar from "../images/calendar.png"
import Letter from "../images/letter.png"
import Lock from "../images/lock.png"
import RSVPIcon from "../images/rsvpIcon.png"

import Down from "../images/down.png"

import Garba from "../images/garba.jpg"
import Haldi from "../images/haldi.jpg"
import Mehndi from "../images/mehndi.jpg"
import Wedding from "../images/wedding.jpg"
import Reception from "../images/reception.jpg"

const StyledLink = styled(Link)`
  text-decoration: none;
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
  background: linear-gradient(
    0deg,
    rgba(103, 77, 0, 1) 0%,
    rgba(252, 196, 147, 0) 100%
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
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 70px 0 0 0;

  @media (max-width: 800px) {
    width: 90%;
    flex-direction: column;
  }
`

const RSVPInnerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 230px;

  @media (max-width: 800px) {
    height: 160px;
    margin: 0 0 20px 0;
  }
`

const RSVPTitle = styled.h1`
  font-family: "Judson-Bold";
  color: #474594;
  font-size: 50px;
  margin: 0 0 10px 0;

  @media (max-width: 800px) {
    font-size: 36px;
  }
`

const RSVPDateContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin: -45px 0 0 0;
`

const RSVPDate = styled.h1`
  font-family: "Judson-Bold";
  color: #474594;
  font-size: 150px;
  margin: 0;

  @media (max-width: 800px) {
    font-size: 100px;
  }
`

const RSVPDateSubText = styled.p`
  font-family: "Judson-Bold";
  color: #474594;
  font-size: 18px;
  margin: 0 0 35px 10px;
  width: 110px;

  @media (max-width: 800px) {
    font-size: 14px;
    margin: 0 0 22px 10px;
  }
`

const RSVPSectionButton = styled.button`
  width: 280px;
  height: 60px;
  font-family: "Judson-Bold";
  color: #474594;
  background: white;
  font-size: 32px;
  border: 2px solid #474594;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 30px 0;
  outline: none;
  cursor: pointer;
  border-radius: 5px;

  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 1px 3px 11px rgba(33, 33, 33, 0.3);
  }

  @media (max-width: 800px) {
    width: 203px;
    height: 35px;
    font-size: 18px;
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
  background-color: #ffe3ff;
`

const EventsTitle = styled.h1`
  font-family: "Judson-Bold";
  font-size: 64px;
  color: #474594;
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
  width: 80%;
  font-family: "Judson-Bold";
  font-size: 20px;
  color: white;
  text-align: center;
  margin: 0 0 15px 0;
  opacity: 0;

  @media (max-width: 800px) {
    opacity: 1;
  }
`

const EventSquareSubtitle = styled.p`
  width: 80%;
  font-family: "Judson-Regular";
  font-size: 14px;
  color: white;
  text-align: center;
  margin: 0 0 5px 0;
  opacity: 0;

  @media (max-width: 800px) {
    opacity: 1;
  }
`

const EventSquareDesc = styled.p`
  width: 80%;
  font-family: "Judson-Regular";
  font-size: 12px;
  color: white;
  text-align: center;
  margin: 5px 0 0 0;
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
  color: #474594;
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
  width: 600px;
  height: 600px;
  background: grey;
  border-radius: 50%;
  margin: 0 auto 100px auto;

  @media (max-width: 800px) {
    width: 330px;
    height: 330px;
    margin: 0 auto 50px auto;
  }
`

const StoryImg1Left = styled.div`
  width: 400px;
  height: 400px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  right: ${props => `${props.right}%`};

  @media (max-width: 800px) {
    width: 165px;
    height: 165px;
    top: ${props => `${props.top / 2.1}px`};
    right: ${props => `${props.right - 3}%`};
  }
`

const StoryImg1Right = styled.div`
  width: 400px;
  height: 400px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.right}%`};

  @media (max-width: 800px) {
    width: 165px;
    height: 165px;
    top: ${props => `${props.top / 2.1}px`};
    left: ${props => `${props.right - 3}%`};
  }
`

const StoryImg2Left = styled.div`
  width: 300px;
  height: 300px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  right: ${props => `${props.right}%`};

  @media (max-width: 800px) {
    width: 145px;
    height: 145px;
    top: ${props => `${props.top / 2.1}px`};
    right: ${props => `${props.right - 3}%`};
  }
`

const StoryImg2Right = styled.div`
  width: 300px;
  height: 300px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.right}%`};

  @media (max-width: 800px) {
    width: 145px;
    height: 145px;
    top: ${props => `${props.top / 2.1}px`};
    left: ${props => `${props.right - 3}%`};
  }
`

const StoryImg3Left = styled.div`
  width: 450px;
  height: 450px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  right: ${props => `${props.right}%`};

  @media (max-width: 800px) {
    width: 185px;
    height: 185px;
    top: ${props => `${props.top / 2.1}px`};
    right: ${props => `${props.right - 3}%`};
  }
`

const StoryImg3Right = styled.div`
  width: 450px;
  height: 450px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.right}%`};
  left: ${props => `${props.right - 3}%`};

  @media (max-width: 800px) {
    width: 185px;
    height: 185px;
    top: ${props => `${props.top / 2.1}px`};
    left: ${props => `${props.right - 3}%`};
  }
`

const StoryImg4Left = styled.div`
  width: 350px;
  height: 350px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  right: ${props => `${props.right}%`};

  @media (max-width: 800px) {
    width: 165px;
    height: 165px;
    top: ${props => `${props.top / 2.1}px`};
    right: ${props => `${props.right - 3}%`};
  }
`

const StoryImg4Right = styled.div`
  width: 350px;
  height: 350px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.right}%`};

  @media (max-width: 800px) {
    width: 165px;
    height: 165px;
    top: ${props => `${props.top / 2.1}px`};
    left: ${props => `${props.right - 3}%`};
  }
`

const Footer = styled.div`
  width: 100%;
  background: #474594;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;

  @media (max-width: 800px) {
    width: 90%;
  }
`

const FooterButton = styled.button`
  width: 150px;
  height: 35px;
  border-radius: 5px;
  background: #474594;
  color: white;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Judson-Bold";
  font-size: 18px;
  color: white;
  cursor: pointer;
  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 1px 3px 11px rgba(33, 33, 33, 0.3);
  }

  @media (max-width: 800px) {
    font-size: 14px;
    width: 100px;
  }
`

const FooterTitle = styled.h1`
  font-family: "Judson-Bold";
  font-size: 24px;
  color: white;
  padding: 30px 0 30px 0;
  margin: 0;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`

const IndexPage = () => {
  // width and height of screen
  const { width } = useWindowSize()

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
              <RSVPDate>05</RSVPDate>
              <RSVPDateSubText>Months till the wedding</RSVPDateSubText>
            </RSVPDateContainer>
          </RSVPInnerSection>
          <RSVPInnerSection>
            <StyledLink to="/rsvp">
              <RSVPSectionButton>RSVP</RSVPSectionButton>
            </StyledLink>
            <RSVPEnding>Shaadi Mein Zaroor Aana!</RSVPEnding>
          </RSVPInnerSection>
        </RSVPSection>
      </RSVPContainer>
      <EventsContainer>
        <EventsTitle>Band Baaja Baaraat</EventsTitle>
        <EventsGrid>
          <StyledLink to="/rsvp">
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
                  Grand Galaxy Banquet Hall
                </EventSquareSubtitle>
                <EventSquareSubtitle className="eventText1">
                  . . .
                </EventSquareSubtitle>
                <EventSquareDesc className="eventText1">
                  Celebrate before the wedding with us during the Garba and
                  Sangeet where we'll have great dance perfomrances, classic
                  garba, and bollywood music!
                </EventSquareDesc>
              </EventOverlay>
            </EventSquare>
          </StyledLink>
          <StyledLink to="/rsvp">
            <EventSquare>
              <EventImg src={Haldi} />
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
                  Bride's Ganesh Puja, Grah Shanti, and Pithi
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
                  Celebrate before the wedding with us during the Garba and
                  Sangeet where we'll have great dance perfomrances, classic
                  garba, and bollywood music!
                </EventSquareDesc>
              </EventOverlay>
            </EventSquare>
          </StyledLink>
          <StyledLink to="/rsvp">
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
                  Bride's Mehndi
                </EventSquareStartTitle>
                <EventSquareTitle className="eventText3">
                  Bride's Mehndi
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
                  Celebrate before the wedding with us during the Garba and
                  Sangeet where we'll have great dance perfomrances, classic
                  garba, and bollywood music!
                </EventSquareDesc>
              </EventOverlay>
            </EventSquare>
          </StyledLink>
          <StyledLink to="/rsvp">
            <EventSquare>
              <EventImg src={Haldi} />
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
                  Groom's Ganesh Puja, Grah Shanti, and Pithi
                </EventSquareStartTitle>
                <EventSquareTitle className="eventText4">
                  Groom's Ganesh Puja, Grah Shanti, and Pithi
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
                  Celebrate before the wedding with us during the Garba and
                  Sangeet where we'll have great dance perfomrances, classic
                  garba, and bollywood music!
                </EventSquareDesc>
              </EventOverlay>
            </EventSquare>
          </StyledLink>
          <StyledLink to="/rsvp">
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
                  Wedding
                </EventSquareStartTitle>
                <EventSquareTitle className="eventText5">
                  Wedding
                </EventSquareTitle>
                <EventSquareSubtitle className="eventText5">
                  Saturday, June 27, 2020
                </EventSquareSubtitle>
                <EventSquareSubtitle className="eventText5">
                  Grand Galaxy Banquet Hall
                </EventSquareSubtitle>
                <EventSquareSubtitle className="eventText5">
                  . . .
                </EventSquareSubtitle>
                <EventSquareDesc className="eventText5">
                  Celebrate before the wedding with us during the Garba and
                  Sangeet where we'll have great dance perfomrances, classic
                  garba, and bollywood music!
                </EventSquareDesc>
              </EventOverlay>
            </EventSquare>
          </StyledLink>
          <StyledLink to="/rsvp">
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
                  Grand Galaxy Banquet Hall
                </EventSquareSubtitle>
                <EventSquareSubtitle className="eventText6">
                  . . .
                </EventSquareSubtitle>
                <EventSquareDesc className="eventText6">
                  Celebrate before the wedding with us during the Garba and
                  Sangeet where we'll have great dance perfomrances, classic
                  garba, and bollywood music!
                </EventSquareDesc>
              </EventOverlay>
            </EventSquare>
          </StyledLink>
        </EventsGrid>
      </EventsContainer>
      <StoryContainer>
        <StoryTitle>Hum Tum</StoryTitle>
        <StorySection>
          <StoryImg1Left top={0} right={50}></StoryImg1Left>
          <StoryImg2Right top={300} right={50}></StoryImg2Right>
          <StoryImg3Left top={500} right={50}></StoryImg3Left>
          <StoryImg4Right top={800} right={50}></StoryImg4Right>
          <StoryImg2Left top={1050} right={50}></StoryImg2Left>
          <StoryImg1Right top={1250} right={50}></StoryImg1Right>
          <StoryImg4Left top={1500} right={50}></StoryImg4Left>
          <StoryImg3Right top={1750} right={50}></StoryImg3Right>
          <StoryImg1Left top={2000} right={50}></StoryImg1Left>
        </StorySection>
        <LastStoryImg></LastStoryImg>
      </StoryContainer>
      <Footer>
        <FooterWrapper>
          <FooterTitle>#KathanGetsRich</FooterTitle>
          <FooterButton>RSVP</FooterButton>
        </FooterWrapper>
      </Footer>
    </>
  )
}

export default IndexPage
