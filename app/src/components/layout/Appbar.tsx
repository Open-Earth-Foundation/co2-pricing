import {
    AppBar as AppBarComponent,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


export default function AppBar() {
    const handleMenu = () => {
        console.log('menu');
    }

    return (
        <Box>
            <AppBarComponent position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        CO2 Pricing
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBarComponent>
        </Box>
    );
}
