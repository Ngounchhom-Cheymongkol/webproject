import HomepageNavbar from '../../component/HomepageNavbar';
import { Grid, makeStyles, Paper } from "@material-ui/core";
import Footer from "../../component/Footer"
import Feed from "../../component/Feed"
const Homepage=()=>{
    return(
       <div>
            <div style={{background:"#05192d"}}>
                <HomepageNavbar></HomepageNavbar>
                <Grid container style={{
                    padding:"50px",
                    paddingTop:"100px",
                }}>
                    <Grid item sm={2}>
                        
                    </Grid>
                    <Grid item sm={8}>
                        <Paper>
                            <img width={"100%"} src="https://res.cloudinary.com/highereducation/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1200,h_630/v1566232749/BestColleges.com/BC-Career-Mechanical_engineering_vu3sha.jpg">
                            </img>
                        </Paper>
                    </Grid>
                    <Grid item sm={2}> 
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid style={{backgroundColor:"#06bdfc",height:"50px"}} item sm={4}>
                        
                    </Grid>
                    <Grid style={{backgroundColor:"#06bdfc",height:"50px"}} item sm={4}>
                        
                    </Grid>
                    <Grid style={{backgroundColor:"",height:"50px"}} item sm={4}>
                        
                    </Grid>


                            <Grid style={{backgroundColor:"#06bdfc",height:"50px"}} item sm={4}>
                                
                            </Grid>
                            <Grid style={{backgroundColor:"",height:"50px"}} item sm={4}>
                                
                            </Grid>
                            <Grid style={{backgroundColor:"#7933ff",height:"50px"}} item sm={4}>
                                
                            </Grid>


                    <Grid style={{backgroundColor:"white",height:"50px"}} item sm={4}>
                        
                    </Grid>
                    <Grid style={{backgroundColor:"#7933ff",height:"50px"}} item sm={4}>
                        
                    </Grid>
                    <Grid style={{backgroundColor:"#7933ff",height:"50px"}} item sm={4}>
                        
                    </Grid>

                </Grid>
            </div>
            <Feed></Feed>
            <Footer></Footer>
       </div>
    );
}
export default Homepage;