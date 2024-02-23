import Stack from "@mui/material/Stack";
import IconTextBtn from "./IconTextBtn";
import MidImg from "./MidImg";
import { Box } from "@mui/material";

export default function BoxedTwoCols({ title, content, icon, img }) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={0}
      alignItems="between"
      sx={{
        color: "#fff",
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
      {/* Première colonne avec du texte */}
      <Box className="w-100 w-md-50 vpd">
        <IconTextBtn titre={title} contenu={content} icone={icon} />
      </Box>

      <Box className="w-100 w-md-50 ">
        <MidImg image={img} />
      </Box>
    </Stack>
  );
}
