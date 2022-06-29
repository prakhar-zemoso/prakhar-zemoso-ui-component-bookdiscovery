import './App.css';
import OrganismsheaderInactive1920 from '../../bookdiscovery/src/ui-components/OrganismsheaderInactive1920.jsx';
import Organismscardbanner from '../../bookdiscovery/src/ui-components/Organismscardbanner.jsx'
import { styled } from "@mui/styles";
import React, { Children, useState } from 'react';
import {Typography } from '@mui/material';
import Organismscardreport from '../../bookdiscovery/src/ui-components/Organismscardreport.jsx';
import Organismscardbooksreading from "../../bookdiscovery/src/ui-components/Organismscardbooksreading.jsx";
import Bannernew from "../../bookdiscovery/src/ui-components/Bannernew.jsx";
import Organismscardrecommendations  from "../../bookdiscovery/src/ui-components/Organismscardrecommendations.jsx";
import Organismscardtopics from "../../bookdiscovery/src/ui-components/Organismscardtopics.jsx";
import Organismsalltopics from "../../bookdiscovery/src/ui-components/Organismsalltopics.jsx";
import CardCollection from "../../bookdiscovery/src/ui-components/CardCollection.jsx";
import Header from "../../bookdiscovery/src/ui-components/Header.jsx"
import OrganismsheaderFocused192 from "../../bookdiscovery/src/ui-components/OrganismsheaderFocused192";

import { a } from 'aws-amplify';

const BodyContainer = styled("div")({
  marginTop: 56,
})

const HeaderContainer = styled("div")({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center',
  // zIndex: 1010,

})
const CardBody = styled("div")({
  // position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  marginTop: 64
})

const BooksCurrentlyReading = styled("div")({
  display: "flex",
  flexDirection: 'column',
  marginTop: 128,
  gap: 16,
})

const BooksCurrentlyReadingText = styled("div")({
  display: "flex",
  justifyContent: 'space-between',
})

const BooksCurrentlyReadingSection = styled("div")({
  display: "flex",
  gap: 25,
})

const BooksCurrentlyReadingSectionArrowSection = styled("div")({
  '&:hover': {
    cursor: 'pointer',
    'box-shadow': '5px 5px #e5ede4',
  },
})


function App() {
  // const [updateHome, setUpdateHome] = useState();
  //  const HeaderComponent = () => {
    let [explore, setExplore] = useState();
    const expandExploreDropdown = () => {
      explore ? setExplore(false) : setExplore(true);
    }
  
  
  return (
    <>
    
      <HeaderContainer>
        <Header
          overrides={{ "Button11423814": { onClick: () => { explore ? setExplore(false) : setExplore(true); } } }}
        />
        </HeaderContainer>

        {explore ? <Organismsalltopics /> : null}

        <BodyContainer>
          <OrganismsheaderFocused192 />
          <Bannernew  overrides={{"Button":{Children:"Book Discovery"}}}/>
        </BodyContainer>

        <CardBody>
          <Organismscardreport />
          <Organismscardreport />
          <Organismscardreport />
          <Organismscardreport />
        </CardBody>

        <BooksCurrentlyReading>
          <BooksCurrentlyReadingText>
            <Typography variant='h6'>
              Books you are Reading
            </Typography>
            <Typography variant='h6'>
              See more
            </Typography>
          </BooksCurrentlyReadingText>
          <BooksCurrentlyReadingSection>
            <BooksCurrentlyReadingSectionArrowSection>
              <Organismscardbooksreading overrides={{ "Rectangle 7": { src: "https://www.bootdey.com/app/webroot/img/Content/avatar/avatar1.png" }, "Three Men in a Boat": { children: "Inorganic Chemistry" } }} />
            </BooksCurrentlyReadingSectionArrowSection>
            <BooksCurrentlyReadingSectionArrowSection>
              <Organismscardbooksreading />
            </BooksCurrentlyReadingSectionArrowSection>
            <BooksCurrentlyReadingSectionArrowSection>
              <Organismscardbooksreading />
            </BooksCurrentlyReadingSectionArrowSection>
            <BooksCurrentlyReadingSectionArrowSection>
              <Organismscardbooksreading />
            </BooksCurrentlyReadingSectionArrowSection>
          </BooksCurrentlyReadingSection>
        </BooksCurrentlyReading>

        {/* recommendation */}
        <BooksCurrentlyReading>
          <BooksCurrentlyReadingText>
            <Typography variant='h6'>
              Recommendation
            </Typography>
            <Typography variant='h6'>
              See more
            </Typography>
          </BooksCurrentlyReadingText>
          <BooksCurrentlyReadingSection>
            <Organismscardrecommendations />
            <Organismscardrecommendations />
            <Organismscardrecommendations />
            <Organismscardrecommendations />
          </BooksCurrentlyReadingSection>
        </BooksCurrentlyReading>

        {/* People you follow also read */}
        <BooksCurrentlyReading>
          <BooksCurrentlyReadingText>
            <Typography variant='h6'>
              People you follow also read
            </Typography>
            <Typography variant='h6'>
              See more
            </Typography>
          </BooksCurrentlyReadingText>
          <BooksCurrentlyReadingSection>
            <Organismscardrecommendations />
            <Organismscardrecommendations />
            <Organismscardrecommendations />
            <Organismscardrecommendations />
          </BooksCurrentlyReadingSection>
        </BooksCurrentlyReading>

        {/* Topics you follow */}
        <BooksCurrentlyReading>
          <BooksCurrentlyReadingText>
            <Typography variant='h6'>
              Topics you follow
            </Typography>
            <Typography variant='h6'>
              See more
            </Typography>
          </BooksCurrentlyReadingText>
          <BooksCurrentlyReadingSection>
            <Organismscardtopics />
            <Organismscardtopics />
            <Organismscardtopics />
            <Organismscardtopics />
            <Organismscardtopics />
            <Organismscardtopics />
          </BooksCurrentlyReadingSection>
        </BooksCurrentlyReading>

        {/* Top Rating */}
        <BooksCurrentlyReading>
          <BooksCurrentlyReadingText>
            <Typography variant='h6'>
              Top Rated
            </Typography>
            <Typography variant='h6'>
              See more
            </Typography>
          </BooksCurrentlyReadingText>
          <BooksCurrentlyReadingSection>
            <Organismscardrecommendations />
            <Organismscardrecommendations />
            <Organismscardrecommendations />
            <Organismscardrecommendations />
          </BooksCurrentlyReadingSection>
        </BooksCurrentlyReading>

     

      <CardCollection/>
   </>
  );
}

export default App;
