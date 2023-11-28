import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const TextAction = styled(Button)<ButtonProps>(() => ({
  color: "#fff",
  backgroundColor: "#552583",
  // fontFamily: "inherit",
  textTransform: "capitalize",
  padding: "15px 32px",
  borderRadius: "12px",
  fontSize: "18px",
  lineHeight: "21px",
  fontWeight: "700",
  "&:hover": {
    backgroundColor: "#5b21b6",
  },
}));

export default TextAction;
