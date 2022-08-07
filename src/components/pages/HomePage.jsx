import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import AuthBox from '../AuthBox';
import Header from '../Header';
import BasicTabs from '../AuthTabs';

import { useState, useContext } from 'react';
// import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';

export default function HomePage() {
const {user} = useContext(UserContext);

    console.log(user)
    return (
        <>
            <Header></Header>        
        </>
    );
}