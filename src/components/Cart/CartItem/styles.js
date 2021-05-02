import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    borderRadius: 15,
  },
  media: {
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
