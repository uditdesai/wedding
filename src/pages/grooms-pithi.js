import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import GroomsPithi from "../images/grooms-pithi.jpg"

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
  background: #ad95a2;

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

  @media (max-width: 1300px) {
    width: 90%;
  }
`

const LinkContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  @media (max-width: 1100px) {
    margin: 50px 0 0 0;
  }

  @media (max-height: 675px) {
    margin: 50px 0 0 0;
  }
`

const LinkButton = styled.div`
  width: 160px;
  height: 50px;
  font-family: "Judson-Bold";
  color: white;
  background: #5e354a;
  font-size: 24px;
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

  @media (max-width: 800px) {
    width: 120px;
  }
`

const BackLink = styled.p`
  font-family: "Judson-Bold";
  font-size: 18px;
  color: black;
  text-decoration: underline;
  margin: 0;
`

const EventTitle = styled.h1`
  font-family: "Judson-Bold";
  font-size: 64px;
  color: black;
  margin: 20px 0 0 0;

  @media (max-width: 800px) {
    font-size: 48px;
  }
`

const ContentContainer = styled.div`
  display: flex;
  width: 80%;
  height: 500px;
  margin: 0 0 0 0;

  @media (max-height: 675px) {
    margin: 0 0 50px 0;
  }

  @media (max-width: 1300px) {
    width: 90%;
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
  background: #5e354a;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 3px 11px rgba(33, 33, 33, 0.3);

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
  width: 110px;
  color: white;
  margin: 0 0 -10px 0;

  @media (max-width: 1100px) {
    font-size: 11px;
    width: 80px;
  }
`

const BannerImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  /* border: 5px solid #474594; */
  box-shadow: 1px 3px 11px rgba(33, 33, 33, 0.3);

  @media (max-width: 1100px) {
    height: 700px;
  }
  @media (max-width: 800px) {
    height: 400px;
  }
`

const ScheduleContainer = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  /* border: 5px solid #474594; */
  margin: 0 2% 0 2%;
  box-sizing: border-box;
  padding: 30px;
  background: white;
  box-shadow: 1px 3px 11px rgba(33, 33, 33, 0.3);

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

const ScheduleDescription = styled.p`
  font-family: "Judson-Italic";
  font-size: 22px;
  color: black;
  margin: 0 0 30px 0;
`

const Divider = styled.div`
  height: 2px;
  width: 100%;
  background: black;
  margin: 0 0 30px 0;
`

const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 0 0;

  @media (max-width: 1100px) {
    margin: 0;
  }
`

const ScheduleTime = styled.p`
  font-family: "Judson-Regular";
  font-size: 18px;
  color: black;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 1100px) {
    font-size: 16px;
    margin: 10px 0 10px 0;
  }
`

const ScheduleDesc = styled.p`
  font-family: "Judson-Regular";
  font-size: 18px;
  color: black;
  width: 180px;
  text-align: left;

  @media (max-width: 1200px) {
    font-size: 16px;
    width: 150px;
  }

  @media (max-width: 1100px) {
    font-size: 16px;
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
  /* border: 5px solid #474594; */
  box-sizing: border-box;
  padding: 30px;
  margin: 0 0 20px 0;
  background: white;
  box-shadow: 1px 3px 11px rgba(33, 33, 33, 0.3);

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
  font-size: 18px;
  color: black;
  margin: 10px 0 10px 0;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 1100px) {
    font-size: 16px;
  }
`

const LocationText = styled.p`
  font-family: "Judson-Regular";
  font-size: 18px;
  color: black;
  margin: 0 0 10px 0;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 1100px) {
    font-size: 16px;
  }
`

const LocationLink = styled.a`
  text-decoration: none;
  font-family: "Judson-Regular";
  font-size: 18px;
  color: black;
  margin: 0 0 0 0;
  text-decoration: underline;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 1100px) {
    font-size: 16px;
  }
`

const AttireContainer = styled.div`
  width: 100%;
  height: 48%;
  display: flex;
  flex-direction: column;
  /* border: 5px solid #474594; */
  box-sizing: border-box;
  padding: 30px;
  background: white;
  box-shadow: 1px 3px 11px rgba(33, 33, 33, 0.3);

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
  font-size: 18px;
  color: black;
  margin: 10px 0 10px 0;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 1100px) {
    font-size: 16px;
  }
`

const GroomsPithiPage = () => {
  return (
    <>
      <EventsContainer>
        <StartContainer>
          <LinkContainer>
            <StyledLink to="/">
              <BackLink>Back to the Wedding</BackLink>
            </StyledLink>
            <StyledLink to="/rsvp">
              <LinkButton>RSVP</LinkButton>
            </StyledLink>
          </LinkContainer>
          <EventTitle>Groom's Pithi, Grah Shanti, and Mehndi</EventTitle>
        </StartContainer>
        <ContentContainer>
          <BannerContainer>
            <DateContainer>
              <DateWrapper>
                <DateBigText>26</DateBigText>
                <DateSmallText>June 2020</DateSmallText>
              </DateWrapper>
              <MidDateWrapper>
                <DateBigText>1:00</DateBigText>
                <DateSmallText>PM</DateSmallText>
              </MidDateWrapper>
              <DateWrapper>
                <DateMediumText>Groom's Family Residence</DateMediumText>
              </DateWrapper>
            </DateContainer>
            <BannerImage src={GroomsPithi} />
          </BannerContainer>
          <ScheduleContainer>
            <ScheduleDescription>
              A day of pre-wedding functions to bring good luck to the couple
              and get the groom ready for the big day.
            </ScheduleDescription>
            <Divider></Divider>
            <ScheduleTitle>Schedule</ScheduleTitle>
            <ScheduleWrapper>
              <TimeWrapper>
                <ScheduleTime>1:00pm</ScheduleTime>
                <ScheduleDesc>Event begins!</ScheduleDesc>
              </TimeWrapper>
            </ScheduleWrapper>
          </ScheduleContainer>
          <LastColumn>
            <LocationContainer>
              <LocationTitle>Location</LocationTitle>
              <LocationTextBold>Groom's Family Residence</LocationTextBold>
              <LocationText>Contact us for the address if needed!</LocationText>
            </LocationContainer>
            <AttireContainer>
              <AttireTitle>Attire</AttireTitle>
              <AttireText>Indian traditional</AttireText>
            </AttireContainer>
          </LastColumn>
        </ContentContainer>
      </EventsContainer>
    </>
  )
}

export default GroomsPithiPage
