import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Landing from "../images/landing.png"
import Calendar from "../images/calendar.png"
import Letter from "../images/letter.png"
import Lock from "../images/lock.png"

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
`

const LandingGradientOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
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
`

const LandingTitle = styled.h1`
  font-family: "KaushanScript-Regular";
  font-size: 170px;
  color: white;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
`

const LandingDate = styled.h4`
  font-family: "OpenSans-Bold";
  font-size: 24px;
  color: white;
  text-align: center;
  width: 100%;
  margin: 10px 0 50px 0;
  padding: 0;
`

const RSVPContainer = styled.div`
  width: 100%;
  background: white;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const RSVPSection = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  margin: 100px 0 30px 0;
`

const LeftRSVPSection = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`

const RSVPTitle = styled.h1`
  font-family: "Pacifico-Regular";
  font-size: 32px;
  color: #474594;
  margin: 0;
`

const RSVPSubtitle = styled.h3`
  font-family: "OpenSans-Bold";
  font-size: 18px;
  color: #474594;
  margin: 30px 0 0 0;
  width: 250px;
`

const RSVPLink = styled.h3`
  font-family: "OpenSans-Bold";
  font-size: 24px;
  color: #474594;
  margin: 30px 0 0 0;
  width: 250px;
  text-decoration: underline;
`

const RightRSVPSection = styled.div`
  width: 350px;
  display: flex;
  align-items: flex-end;
`

const RSVPDate = styled.h1`
  font-family: "OpenSans-Bold";
  font-size: 300px;
  color: #474594;
  margin: -100px 0 0 0;
`

const RSVPDateSubtitle = styled.p`
  font-family: "OpenSans-Bold";
  font-size: 18px;
  color: #474594;
  margin: 0 0 80px 20px;
  width: 120px;
`

const EventsContainer = styled.div`
  width: 100%;
  background-color: #ffe3ff;
`

const EventsTitle = styled.h1`
  font-family: "Pacifico-Regular";
  font-size: 42px;
  color: #474594;
  width: 100%;
  text-align: center;
  padding: 75px 0 50px 0;
`

const EventsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 250px 250px 250px;
  grid-gap: 75px 75px;
  justify-content: center;
  padding: 0 0 100px 0;
`

const EventSquare = styled.div`
  width: 250px;
  height: 250px;
  background: grey;
`

const StoryContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  height: fit-content;
`

const StoryTitle = styled.h1`
  font-family: "Pacifico-Regular";
  font-size: 42px;
  color: #474594;
  width: 100%;
  text-align: center;
  padding: 75px 0 50px 0;
`

const StorySection = styled.div`
  width: 70%;
  height: 2450px;
  position: relative;
  margin: 0 auto 0 auto;
`

const LastStoryImg = styled.div`
  width: 600px;
  height: 600px;
  background: grey;
  border-radius: 50%;
  margin: 0 auto 100px auto;
`

const StoryImg1Left = styled.div`
  width: 400px;
  height: 400px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  right: ${props => `${props.right}%`};
`

const StoryImg1Right = styled.div`
  width: 400px;
  height: 400px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.right}%`};
`

const StoryImg2Left = styled.div`
  width: 300px;
  height: 300px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  right: ${props => `${props.right}%`};
`

const StoryImg2Right = styled.div`
  width: 300px;
  height: 300px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.right}%`};
`

const StoryImg3Left = styled.div`
  width: 450px;
  height: 450px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  right: ${props => `${props.right}%`};
`

const StoryImg3Right = styled.div`
  width: 450px;
  height: 450px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.right}%`};
`

const StoryImg4Left = styled.div`
  width: 350px;
  height: 350px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  right: ${props => `${props.right}%`};
`

const StoryImg4Right = styled.div`
  width: 350px;
  height: 350px;
  background: grey;
  border-radius: 50%;
  position: absolute;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.right}%`};
`

const Footer = styled.div`
  width: 100%;
  background: #474594;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FooterTitle = styled.h1`
  font-family: "Pacifico-Regular";
  font-size: 24px;
  color: white;
  width: 100%;
  text-align: center;
  padding: 50px 0 30px 0;
  margin: 0;
`

const FooterRSVPLink = styled.h3`
  font-family: "OpenSans-Bold";
  font-size: 14px;
  color: white;
  margin: 0 0 30px 0;
  text-align: center;
  width: 200px;
`

const IndexPage = () => {
  return (
    <>
      <LandingContainer>
        <LandingGradientOverlay>
          <LandingTitle>#KathanGetsRich</LandingTitle>
          <LandingDate>June 25 - June 28, 2020</LandingDate>
        </LandingGradientOverlay>
      </LandingContainer>
      <RSVPContainer>
        <RSVPSection>
          <LeftRSVPSection>
            <RSVPTitle>It's Desaided!</RSVPTitle>
            <RSVPSubtitle>
              Join the celebration as Richa and Kathan get married.
            </RSVPSubtitle>
            <RSVPLink>RSVP</RSVPLink>
          </LeftRSVPSection>
          <RightRSVPSection>
            <RSVPDate>5</RSVPDate>
            <RSVPDateSubtitle>Months till the wedding</RSVPDateSubtitle>
          </RightRSVPSection>
        </RSVPSection>
      </RSVPContainer>
      <EventsContainer>
        <EventsTitle>Band Baaja Baaraat</EventsTitle>
        <EventsGrid>
          <EventSquare></EventSquare>
          <EventSquare></EventSquare>
          <EventSquare></EventSquare>
          <EventSquare></EventSquare>
          <EventSquare></EventSquare>
          <EventSquare></EventSquare>
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
        <FooterTitle>#KathanGetsRich</FooterTitle>
        <FooterRSVPLink>
          Remember to RSVP for the wedding by clicking here.
        </FooterRSVPLink>
      </Footer>
    </>
  )
}

export default IndexPage
