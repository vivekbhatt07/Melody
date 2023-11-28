import { IconButton, IconButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const IconAction = styled(IconButton)<IconButtonProps>(() => ({
  color: "#fff",
  backgroundColor: "#FDB927",
  fontWeight: "400",
  textTransform: "capitalize",
  height: "40px",
  width: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "#FDB92780",
  },
}));

export default IconAction;
