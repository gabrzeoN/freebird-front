import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CountrySelect from "./CountrySelect";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import * as userApi from "../services/auth.js";

export default function RegisterTab() {
    const [disabled, setDisabled] = useState(false);
    const [signUpData, setSignUpData] = useState({
        country: "",
        fullName: "",
        email: "",
        foneNumber: "",
        password: "",
        repeatPassword: "",
    });

    async function handleSubmit(e) {
        e.preventDefault();
        setDisabled(true);
        console.log(signUpData.country)
        try {
            const { data } = await userApi.signUp(signUpData);
            window.location.reload();
        } catch (error) {
            alert(error.response.data);
            console.log(error.response.data);
            setDisabled(false);
        }
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '250px' },
                width: '270px',
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <CountrySelect
                id="country-select"
                disabled={disabled}
                data={signUpData}
                setData={setSignUpData}
            />
            <TextField
                id="outlined-search"
                label="Full name"
                type="text"
                disabled={disabled}
                value={signUpData.fullName}
                onChange={e => setSignUpData({...signUpData, fullName: e.target.value})}
                required
            />
            <TextField
                id="outlined-search"
                label="Email"
                type="email"
                disabled={disabled}
                value={signUpData.email}
                onChange={e => setSignUpData({...signUpData, email: e.target.value})}
                required
            />
            <TextField
                id="outlined-search"
                label="Fone"
                type="text"
                disabled={disabled}
                value={signUpData.foneNumber}
                onChange={e => setSignUpData({...signUpData, foneNumber: e.target.value})}
                required
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                disabled={disabled}
                autoComplete="current-password"
                value={signUpData.password}
                onChange={e => setSignUpData({...signUpData, password: e.target.value})}
                required
            />
            <TextField
                id="outlined-password-input"
                label="Repeat password"
                type="password"
                disabled={disabled}
                autoComplete="current-password"
                value={signUpData.repeatPassword}
                onChange={e => setSignUpData({...signUpData, repeatPassword: e.target.value})}
                required
            />
            <Stack direction="row" spacing={2} marginLeft={1} marginTop={2}>
                <Button variant="contained" type='submit' disabled={disabled} sx={{width: 250}}>
                    SIGN UP
                </Button>
            </Stack>
        </Box>
    );
}