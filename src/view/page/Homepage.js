import HomepageNavbar from '../../component/HomepageNavbar';
import { Grid, makeStyles } from "@material-ui/core";

const Homepage=()=>{
    return(
       <div>
            <HomepageNavbar></HomepageNavbar>
            <Grid container>
            <Grid item sm={2} xs={2}>
                Kingdom
            </Grid>
            <Grid item sm={9} xs={10}>
                Kingdom
            </Grid>
            <Grid item sm={1} xs={10}>
            Kingdom
            </Grid>
        </Grid>
       </div>
    );
}
export default Homepage;