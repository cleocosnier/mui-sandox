import { Box, Link } from "@mui/material";
import theme from "../theme";

export default function Footer() {
  return (
    <Box className="vpd hpd d-flex al-center just-center">
      <div className="">
        <div className="d-flex al-center">
          <Link
            href="#"
            color={theme.palette.primary.main}
            underline="none"
            sx={{ padding: "0 10px" }}
          >
            Private Policy
          </Link>
          <Link
            href="#"
            color={theme.palette.primary.main}
            underline="none"
            sx={{ padding: "0 10px" }}
          >
            Terms of service
          </Link>
        </div>
        <p style={{ textAlign: "center" }}>All rights reserved. Vivian 2023.</p>
      </div>
    </Box>
  );
}
