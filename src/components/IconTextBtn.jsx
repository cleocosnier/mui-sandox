import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function IconTextBtn({ titre, contenu, icone }) {
  return (
    <Box>
      <div className="hpd d-flex column just-between h-100">
        <div className="imgWrap aspect-1" style={{ width: "50px" }}>
          <img src={icone} alt="" />
        </div>
        <div className="">
          <Typography variant="h3" sx={{ color: "black", marginTop: "30px" }}>
            {titre}
          </Typography>
          <Typography
            sx={{ color: "black", fontSize: ".875rem", marginTop: "5px" }}
          >
            {contenu}
          </Typography>
          <Button variant="black">Become a VIP today</Button>
        </div>
      </div>
    </Box>
  );
}
