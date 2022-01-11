import {makeStyles,InputBase } from '@material-ui/core';

import {Search} from '@material-ui/icons';
const useStyle= makeStyles(theme=>({
  search: {
    borderRadius: 2,
    marginLeft: 10,
    width: '38%',
    backgroundColor: '#fff',
    display: 'flex'
  },
  
  inputRoot: {
    color:'inherit',
    width: '100%',
  },
  inputInput: {
    paddingLeft: 20,
    width: '100%',
},
list: {
  position: 'absolute',
  color: '#000',
  background: '#FFFFFF',
  marginTop: 36
},
   searchIcon: {
  marginLeft: 'auto',
  padding: 5,
  display: 'flex',
  color: '#2874F0'
},
}))


const SearchBar = ()=>{
    const classes = useStyle ();
    return(
        <div className={classes.search}>
          <InputBase
           placeholder ="Search for products, brand and more"
           classes={{
            root:classes.inputRoot,
            input:classes.inputInput,
        }}
        inputProps={{'aria-label':'search'}} 
        // onChange={(e)=>getText(e.target.value)}
        />
            <div className={classes.searchIcon}>
              <Search/>
            </div>
       

        </div>
    )
}
export default SearchBar;