import * as React from 'react';
import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import * as userApi from "../services/auth.js"
import { UserContext } from '../contexts/UserContext';
export default function LoginTab() {
    const [disabled, setDisabled] = useState(false);
    const {setUser} = useContext(UserContext);
    // const [signInData, setSignInData] = useState({
    //     email: "",
    //     password: "",
    // }); 
    // TODO: change me
    const [signInData, setSignInData] = useState({
        email: "admin@gmail.com",
        password: "adminadmin",
    });

    async function handleSubmit(e) {
        e.preventDefault();
        setDisabled(true);
        try {
            const { data } = await userApi.signIn(signInData);
            localStorage.setItem("freebirdwebsite_user", JSON.stringify(data));
            setUser(data);
            console.log(data);
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
                <Button variant="contained" sx={{width: 250}} type='submit' disabled={disabled}>
                    SIGN IN
                </Button>
            </Stack>
        </Box>
    );
}