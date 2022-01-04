import { Grid, makeStyles } from "@material-ui/core";
import Feed from "../../component/Feed";
import Leftbar from "../../component/Leftbar";
import Navbar from "../../component/Navbar";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const MajorDetail = () => {
  const classes = useStyles();
  return (
    <div style={{backgroundColor:"rgb(225,225,225)"}}>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={8} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={2} xs={10}>
          
        </Grid>
      </Grid>
    </div>
  );
};

export default MajorDetail;
