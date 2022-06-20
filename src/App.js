import './App.css';
import OrganismsheaderInactive1920 from '../../bookdiscovery/src/ui-components/OrganismsheaderInactive1920.jsx';
import Organismscardbanner from '../../bookdiscovery/src/ui-components/Organismscardbanner.jsx'
import { styled } from "@mui/styles";
import Organismscardreport from '../../bookdiscovery/src/ui-components/Organismscardreport.jsx';
import Organismscardbooksreading from "../../bookdiscovery/src/ui-components/Organismscardbooksreading.jsx";
import OrganismsheaderFocused1920 from "../../bookdiscovery/src/ui-components/OrganismsheaderFocused1920.jsx";
import OrganismsheaderFocused3 from "../../bookdiscovery/src/ui-components/OrganismsheaderFocused3.jsx";
import Organismsalltopics from "../../bookdiscovery/src/ui-components/Organismsalltopics.jsx";
import Organismscardbyauthor from "../../bookdiscovery/src/ui-components/Organismscardbyauthor.jsx";
import Organismscardrecommendation from "../../bookdiscovery/src/ui-components/Organismscardrecommendations.jsx"

const BodyContainer = styled("div")({
  width: "auto",
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  alignContent:'center',
  alignItems:'center',
  top: 38
})
const HeaderContainer = styled("div")({
  width: "auto",
  backgroundImage:"linear-gradient(-90deg, rgba(141,82,199,2), rgba(104,55,153,1))",
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  alignContent:'center',
  alignItems:'center',
  zIndex: 1010
  
})
const CardBody = styled("div")({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  // justifyContent:'space-around',
  gap: '30px',
  top: 64
})


function App() {
  return (
    <>
  {/* <HeaderComponent/> */}
  <HeaderContainer>
  <OrganismsheaderInactive1920 />
  </HeaderContainer>


   <OrganismsheaderFocused1920 />
      <OrganismsheaderFocused3 />
      <OrganismsheaderInactive1920 />
      <Organismscardbanner />
      <Organismscardbooksreading />
      <Organismscardbooksreading />
      <Organismscardbooksreading />
      
      

   </>
  );
}

export default App;
