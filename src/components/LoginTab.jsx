import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CountrySelect from "./CountrySelect";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../contexts/UserContext';
export default function LoginTab() {
    const [disabled, setDisabled] = useState(false);
    // const [signInData, setSignInData] = useState({
    //     email: "",
    //     password: "",
    // });
    const {setUser} = useContext(UserContext);
    const [signInData, setSignInData] = useState({
        email: "a@ab.com",
        password: "1122334455",
    });

    async function handleSubmit(e) {
        e.preventDefault();
        setDisabled(true);
        try {
            const { data } = await axios.post("http://localhost:5000/sign-in", signInData);
            localStorage.setItem("freebirdwebsite_user", JSON.stringify(data));
            setUser(data);
            console.log(data)
            window.location.reload();
        } catch (error) {
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
            <TextField
                id="outlined-search"
                label="Email"
                type="email"
                disabled={disabled}
                value={signInData.email}
                onChange={e => setSignInData({ ...signInData, email: e.target.value })}
                required
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                disabled={disabled}
                autoComplete="current-password"
                value={signInData.password}
                onChange={e => setSignInData({ ...signInData, password: e.target.value })}
                required
            />
            <Stack direction="row" spacing={2} marginLeft={1} marginTop={2}>
                <Button variant="contained" color="success" type='submit' disabled={disabled}>
                    SIGN IN
                </Button>
            </Stack>
        </Box>
    );
}