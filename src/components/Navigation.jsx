import * as React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';

import { PageNavigationContext } from '../contexts/PageNavigationContext';

export default function Navigation() {
    const navigate = useNavigate();
    function navigateTo(url) {
        navigate(url);
    }

    const { page: value, setPage: setValue } = useContext(PageNavigationContext);
    return (
        <BoxStyled sx={{ width: "100%", fontSize: "100px" }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => navigateTo("/")} />
                <BottomNavigationAction label="Be a host" icon={<AddBoxIcon />} onClick={() => navigateTo("/new-location")} />
                <BottomNavigationAction label="My locations" icon={<LocationOnIcon />} onClick={() => navigateTo("/my-locations")} />
            </BottomNavigation>
        </BoxStyled>
    );
}

const BoxStyled = styled(Box)`
    &&{
        @media (min-width: 1200px) {
            width: 650px;
            margin-right: 200px;
        }
    }
`;