import{Box,Button,makeStyles,Typography,Badge} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {Link} from 'react-router-dom'


const useStyle=makeStyles({
    login:{
        background:'#ffffff',
        color:'#2874F0',
        textTransform:'none',
        fontWeight:600,
        borderRadius:2,
        padding:'5px 40px',
        boxShadow:'none'
    },
    wrapper:{
        margin:'0 7% 0 auto',
        display:'flex',
        '&>*':{
            marginRight:50,
            fontSize:12,
            textDecoration:'none',
            color:'#fefffc'
        }
        },
        container:{
            display:'flex'
        }
})

const HeaderButtons = ()=>{
    const classes = useStyle();
       
    return(
   <Box className={classes.wrapper}>
   <Link><Button variant="contained" className={classes.login}>Login</Button></Link>
   <Link><Typography style={{marginTop:5}}>More</Typography></Link>
   <Link to='/cart' className={classes.container}>
       <Badge badgeContent={4} color="Secondary">
                <ShoppingCart/>
            
                     </Badge>
      
      <Typography style={{marginLeft:10}}>Cart</Typography>
   </Link>




</Box>
    )
}
export default HeaderButtons;




