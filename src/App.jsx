import "./App.css";
import Container from "@mui/material/Container";
import ButtonAppBar from "./components/ButtonAppBar";
import TwoCols from "./components/TwoCols";
import imageMeuf from "./assets/images/pKSfU1aVybt09VxEO7SSj8Iyw.webp";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./theme";
import BoxedTwoCols from "./components/BoxedTwoCols";
import Section1Img from "./assets/images/1.jpg";
import Section2Img from "./assets/images/2.jpg";
import Section3Img from "./assets/images/3.jpg";
import Section4Img from "./assets/images/4.jpg";
import Section1icon from "./assets/images/cadenas.webp";
import Section2icon from "./assets/images/logo-rond.webp";
import Section3icon from "./assets/images/speak.webp";
import Section4icon from "./assets/images/card.webp";
import { Fragment } from "react";
import SectionFaq from "./components/SectionFaq";
import Footer from "./components/Footer";

function App() {
  let state = {
    sections: [
      {
        title: "FIRST ACCESS",
        content: `As a VIP, you'll receive email and push notifications for new jobs that match your search criteria, giving you early access and increasing your chances of landing the job.`,
        icon: Section1icon,
        img: Section1Img,
      },
      {
        title: "BOOSTED CREDIBILITY",
        content: `With a VIP or VIP Elite designation on your profile, you signal to recruiters that you're serious about your job search — making them take you more seriously.`,
        icon: Section2icon,
        img: Section2Img,
      },
      {
        title: "FASTER RESPONSES",
        content: `As a VIP Elite, recruiters know you're qualified, actively engaged, and ready to work, which typically results in faster responses than other healthcare professionals receive.`,
        icon: Section3icon,
        img: Section3Img,
      },
      {
        title: "EARN REWARDS",
        content: `Receive up to $1,550 in financial rewards after earning VIP Elite status once you've started a contract found and applied to on Vivian.`,
        icon: Section4icon,
        img: Section4Img,
      },
    ],
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <ButtonAppBar textColor={theme.palette.primary.main} />
        <TwoCols imageSrc={imageMeuf} />
        <Container maxWidth="md">
          {state.sections.map((section, index) => {
            return (
              <Fragment key={index}>
                <BoxedTwoCols
                  title={section.title}
                  content={section.content}
                  icon={section.icon}
                  img={section.img}
                ></BoxedTwoCols>
              </Fragment>
            );
          })}
        </Container>
        <Box
          className="vpd"
          sx={{
            backgroundColor: "black",
          }}
        >
          <Container maxWidth="md">
            <SectionFaq />
          </Container>
        </Box>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
