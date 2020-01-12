import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Garba from "../images/garba.jpg"

const StyledLink = styled(Link)`
  text-decoration: none;
`

const EventsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #bbdefb;

  @media (max-height: 675px) {
    justify-content: flex-start;
  }

  @media (max-width: 1100px) {
    min-height: 100%;
  }
`

const StartContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0 20px 0;

  @media (max-width: 1100px) {
    width: 90%;
  }
`

const BackLink = styled.p`
  font-family: "Judson-Bold";
  font-size: 14px;
  color: black;
  text-decoration: underline;
  margin: 0;

  @media (max-width: 1100px) {
    margin: 50px 0 0 0;
  }

  @media (max-height: 675px) {
    margin: 50px 0 0 0;
  }
`

const EventTitle = styled.h1`
  font-family: "Judson-Bold";
  font-size: 64px;
  color: black;
  margin: 20px 0 0 0;
`

const ContentContainer = styled.div`
  display: flex;
  width: 80%;
  height: 500px;
  margin: 0 0 0 0;

  @media (max-height: 675px) {
    margin: 0 0 50px 0;
  }

  @media (max-width: 1100px) {
    width: 90%;
    height: fit-content;
    flex-direction: column;
    margin: 0 0 50px 0;
  }
`

const BannerContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 1100px) {
    width: 100%;
    justify-content: flex-start;
  }
`
const DateContainer = styled.div`
  width: 100%;
  height: 70px;
  background: #474594;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1100px) {
    margin: 0 0 20px 0;
  }
`

const DateWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

const MidDateWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 40%;

  @media (max-width: 1100px) {
    width: 40%;
  }
`

const DateBigText = styled.h1`
  font-family: "Judson-Bold";
  font-size: 54px;
  color: white;
  margin: 0;

  @media (max-width: 1100px) {
    font-size: 40px;
  }
`

const DateSmallText = styled.p`
  font-family: "Judson-Bold";
  font-size: 14px;
  width: 50px;
  color: white;
  margin: 0 0 10px 5px;

  @media (max-width: 1100px) {
    font-size: 12px;
    margin: 0 0 8px 5px;
    width: 35px;
  }
`

const DateMediumText = styled.p`
  font-family: "Judson-Bold";
  font-size: 14px;
  width: 90px;
  color: white;
  margin: 0 0 -10px 0;

  @media (max-width: 1100px) {
    font-size: 12px;
    width: 80px;
  }
`

const BannerImage = styled.img`
  width: calc(100% - 10px);
  height: 400px;
  object-fit: cover;
  border: 5px solid #474594;

  @media (max-width: 1100px) {
    height: 250px;
  }
`

const ScheduleContainer = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  border: 5px solid #474594;
  margin: 0 2% 0 2%;
  box-sizing: border-box;
  padding: 30px;
  background: white;

  @media (max-width: 1200px) {
    padding: 25px;
  }

  @media (max-width: 1100px) {
    width: 100%;
    margin: 20px 0 0 0;
  }
`

const ScheduleTitle = styled.h1`
  font-family: "Judson-Bold";
  font-size: 32px;
  color: black;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 28px;
  }

  @media (max-width: 1100px) {
    font-size: 24px;
  }
`

const ScheduleWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 20px 0 0 0;
`

const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 10px 0;

  @media (max-width: 1100px) {
    margin: 0;
  }
`

const ScheduleTime = styled.p`
  font-family: "Judson-Regular";
  font-size: 16px;
  color: black;

  @media (max-width: 1200px) {
    font-size: 14px;
  }

  @media (max-width: 1100px) {
    font-size: 14px;
    margin: 10px 0 10px 0;
  }
`

const ScheduleDesc = styled.p`
  font-family: "Judson-Regular";
  font-size: 16px;
  color: black;
  width: 180px;
  text-align: left;

  @media (max-width: 1200px) {
    font-size: 14px;
    width: 150px;
  }

  @media (max-width: 1100px) {
    font-size: 14px;
    margin: 10px 0 10px 0;
  }
`

const LastColumn = styled.div`
  width: 24%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    width: 100%;
    margin: 20px 0 0 0;
  }
`

const LocationContainer = styled.div`
  width: 100%;
  height: 48%;
  display: flex;
  flex-direction: column;
  border: 5px solid #474594;
  box-sizing: border-box;
  padding: 30px;
  margin: 0 0 20px 0;
  background: white;

  @media (max-width: 1200px) {
    padding: 25px;
  }
`

const LocationTitle = styled.h1`
  font-family: "Judson-Bold";
  font-size: 32px;
  color: black;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 28px;
  }

  @media (max-width: 1100px) {
    font-size: 24px;
  }
`

const LocationTextBold = styled.p`
  font-family: "Judson-Bold";
  font-size: 16px;
  color: black;
  margin: 10px 0 10px 0;

  @media (max-width: 1200px) {
    font-size: 14px;
  }

  @media (max-width: 1100px) {
    font-size: 14px;
  }
`

const LocationText = styled.p`
  font-family: "Judson-Regular";
  font-size: 16px;
  color: black;
  margin: 0 0 10px 0;

  @media (max-width: 1200px) {
    font-size: 14px;
  }

  @media (max-width: 1100px) {
    font-size: 14px;
  }
`

const LocationLink = styled.a`
  text-decoration: none;
  font-family: "Judson-Regular";
  font-size: 16px;
  color: black;
  margin: 0 0 0 0;
  text-decoration: underline;

  @media (max-width: 1200px) {
    font-size: 14px;
  }

  @media (max-width: 1100px) {
    font-size: 14px;
  }
`

const AttireContainer = styled.div`
  width: 100%;
  height: 48%;
  display: flex;
  flex-direction: column;
  border: 5px solid #474594;
  box-sizing: border-box;
  padding: 30px;
  background: white;

  @media (max-width: 1200px) {
    padding: 25px;
  }
`

const AttireTitle = styled.h1`
  font-family: "Judson-Bold";
  font-size: 32px;
  color: black;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 28px;
  }

  @media (max-width: 1100px) {
    font-size: 24px;
  }
`

const AttireText = styled.p`
  font-family: "Judson-Regular";
  font-size: 16px;
  color: black;
  margin: 10px 0 10px 0;

  @media (max-width: 1200px) {
    font-size: 14px;
  }

  @media (max-width: 1100px) {
    font-size: 14px;
  }
`

const MehndiPage = () => {
  const [currentUrl, setCurrentUrl] = useState("")

  useEffect(() => {
    if (typeof window == "undefined") return
    setCurrentUrl(window.location.href)
  }, [])
  return (
    <>
      <EventsContainer>
        <StartContainer>
          <StyledLink to="/" state={{ currentUrl: currentUrl }}>
            <BackLink>Back to the Wedding</BackLink>
          </StyledLink>
          <EventTitle>Mehndi</EventTitle>
        </StartContainer>
        <ContentContainer>
          <BannerContainer>
            <DateContainer>
              <DateWrapper>
                <DateBigText>26</DateBigText>
                <DateSmallText>June 2020</DateSmallText>
              </DateWrapper>
              <MidDateWrapper>
                <DateBigText>6:00</DateBigText>
                <DateSmallText>PM</DateSmallText>
              </MidDateWrapper>
              <DateWrapper>
                <DateMediumText>Bride's Family Residence</DateMediumText>
              </DateWrapper>
            </DateContainer>
            <BannerImage src={Garba} />
          </BannerContainer>
          <ScheduleContainer>
            <ScheduleTitle>Schedule</ScheduleTitle>
            <ScheduleWrapper>
              <TimeWrapper>
                <ScheduleTime>6:30pm</ScheduleTime>
                <ScheduleDesc>Guests start arriving</ScheduleDesc>
              </TimeWrapper>
              <TimeWrapper>
                <ScheduleTime>7:00pm</ScheduleTime>
                <ScheduleDesc>Food is ready to be taken</ScheduleDesc>
              </TimeWrapper>
              <TimeWrapper>
                <ScheduleTime>7:30pm</ScheduleTime>
                <ScheduleDesc>Program begins with performances</ScheduleDesc>
              </TimeWrapper>
              <TimeWrapper>
                <ScheduleTime>8:30pm</ScheduleTime>
                <ScheduleDesc>Garba starts now</ScheduleDesc>
              </TimeWrapper>
              <TimeWrapper>
                <ScheduleTime>9:30pm</ScheduleTime>
                <ScheduleDesc>
                  Open dance floor begins. Be ready to party!
                </ScheduleDesc>
              </TimeWrapper>
            </ScheduleWrapper>
          </ScheduleContainer>
          <LastColumn>
            <LocationContainer>
              <LocationTitle>Location</LocationTitle>
              <LocationTextBold>
                Galaxy Grand Convention Centre
              </LocationTextBold>
              <LocationText>
                200 Advance Blvd, Brampton, ON L6T 4V5
              </LocationText>
              <LocationLink href="https://www.google.ca/maps" target="_blank">
                See on Google Maps
              </LocationLink>
            </LocationContainer>
            <AttireContainer>
              <AttireTitle>Attire</AttireTitle>
              <AttireText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quis volutpat mauris. Cras volutpat finibus dui, at congue sem.
              </AttireText>
            </AttireContainer>
          </LastColumn>
        </ContentContainer>
      </EventsContainer>
    </>
  )
}

export default MehndiPage
