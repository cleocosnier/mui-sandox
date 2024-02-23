// import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import theme from "../theme";
import { Button } from "@mui/material";
import LogoVIP from "../assets/images/kS9uMnFeVp2u8nzwbscSNl3wFE.webp";
import imgProfils from "../assets/images/Yf8P767uUDO2G2FeS50vhNz0MI.webp";

const TwoCols = ({ imageSrc }) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={0}
      alignItems="between"
      sx={{
        color: "#fff",
        background: theme.palette.secondary.main,
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
      {/* Première colonne avec du texte */}
      <div className="w-100 w-md-50 vpd">
        <div className="hpd d-flex column just-between h-100">
          <div className="imgWrap" style={{ width: "130px" }}>
            <img src={LogoVIP} alt="" />
          </div>
          <div className="">
            <Typography variant="h1">
              Unlock{" "}
              <span className="italic">
                Sucess <br /> with
              </span>{" "}
              Vivian VIP
            </Typography>
            <Typography variant="h2" sx={{ marginTop: "30px" }}>
              Elevate your job search with boosted credibility, priority job
              alerts and cash rewards!
            </Typography>
            <Button variant="purple">Become a VIP today</Button>
          </div>
          <div className="d-flex align-center" style={{ marginTop: "30px" }}>
            <div
              className="imgWrap"
              style={{ width: "130px", marginRight: "15px" }}
            >
              <img src={imgProfils} alt="" />
            </div>
            <Typography variant="smallText">
              Over 1 million healthcare professionals trust Vivian to find their
              next job opportunity.
            </Typography>
          </div>
        </div>
      </div>

      <Box className="w-100 w-md-50">
        <img src={imageSrc} alt="Image" className="aspect-1" />
      </Box>
    </Stack>
  );
};

export default TwoCols;
