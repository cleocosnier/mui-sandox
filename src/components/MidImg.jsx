import Box from "@mui/material/Box";

export default function MidImg({ image }) {
  return (
    <Box className="rounded-big aspect-1">
      <img src={image} alt="Image" className="" />
    </Box>
  );
}
