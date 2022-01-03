import { Container, Grid, makeStyles } from "@material-ui/core"
import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";
const useStyle=makeStyles((theme)=>({
    FooterCon:{
        backgroundColor:"#05192d",
        color:"white",
        paddingTop:"20px"
    },
    FooterInfo:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        alignContent:"space-between",
        padding:"10px",
        [theme.breakpoints.down('sm')]:{
           width:"100%",
        }
    },
    FooterInfo1:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        alignContent:"space-between",
        padding:"10px",
        [theme.breakpoints.down('sm')]:{
            display:"None",
        }
    },
    MediaIcon:{
        display:"flex",
        flexDirection:"row",
        alignContent:"space-between"

    }
}));
const Footer=()=>{
    const classes=useStyle();
    return(
        <Container className={classes.FooterCon}>
            <Grid container>
                <Grid item xs={3} className={classes.FooterInfo}>
                    <h2>CCI</h2>
                    <p>
                    Based on your learnings from this tutorial, you are ready to make some simple GUI apps. You have to learn more methods for styling and interaction with the objects in a GUI
                    </p>
                    <div className={classes.MediaIcon}>
                        <Facebook></Facebook>
                        <Twitter></Twitter>
                        <Instagram></Instagram>
                        <YouTube></YouTube>
                    </div>
                </Grid>
                <Grid item xs={3} className={classes.FooterInfo1}>
                    Product
                </Grid>
                <Grid item xs={3} className={classes.FooterInfo1}>
                    About
                </Grid>
                <Grid item xs={3} className={classes.FooterInfo1}>
                    Address
                </Grid>
            </Grid>
        </Container>
    )
}
export default Footer;