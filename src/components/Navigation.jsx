import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import styled from 'styled-components';
import { useContext } from 'react';
import { PageNavigationContext } from '../contexts/PageNavigationContext';
export default function Navigation() {
    const {page: value, setPage: setValue} = useContext(PageNavigationContext);
    return (
        <BoxStyled sx={{ width: "100%", fontSize: "100px" }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="My locations" icon={<LocationOnIcon />} />
                {/* <BottomNavigationAction label="Nearby" icon={<AccountBoxIcon />} /> */}
            </BottomNavigation>
        </BoxStyled>
    );
}

const BoxStyled = styled(Box)`
    &&{
        color: red;
        @media (min-width: 1200px) {
            width: 650px;
            margin-right: 200px;
        }
    }
`;