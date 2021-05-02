import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    borderRadius: 15,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "flex-end",
  },
  productTitle: {
    fontWeight: 600,
  },
  button: {
    backgroundColor: "#222",
    color: "#fff",
    borderRadius: 10,
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(1),
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#000",
    },
  },
}));
