import { Grid, makeStyles } from "@material-ui/core";
import Feed from "../../component/Feed";
import Leftbar from "../../component/Leftbar";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const MajorPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={9} xs={10}>
          <Feed />
          <Footer></Footer>
        </Grid>
        <Grid item sm={1} xs={10}>
          
        </Grid>
      </Grid>
    </div>
  );
};

export default MajorPage;
