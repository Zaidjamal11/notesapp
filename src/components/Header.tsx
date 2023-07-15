import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import { logo } from './constants/constants';


const Header : React.FC = () => {
  return (
    <div>
        <AppBar color="transparent" position='static'>
            <Toolbar >
                <img src={logo} alt="logo"style={{ width: '30px', marginRight: '10px'}} />
                <Typography>EverNote</Typography>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header;