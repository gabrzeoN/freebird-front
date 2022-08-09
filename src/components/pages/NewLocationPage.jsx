import axios from 'axios';
import * as React from 'react';
import styled from "styled-components";
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

import CountrySelect from "../CountrySelect";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { UserContext } from '../../contexts/UserContext';
import * as locationApi from "../../services/locations.js"
import Header from '../Header';
import Footer from '../Footer';

export default function NewLocationPage() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const [disabled, setDisabled] = useState(false);
    // const [newLocationData, setNewLocationData] = useState({
    //     pricePerNight: 0,
    //     bedrooms: 0,
    //     description: "",
    //     country: "",
    //     state: "",
    //     city: "",
    //     isAvailable: true
    // });

    // TODO: change me
    const [newLocationData, setNewLocationData] = useState({
        pricePerNight: 50000,
        bedrooms: 5,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo at quia aliquam quos, libero mollitia sunt reprehenderit porro, nostrum possimus eum, tempora vel optio inventore! Voluptatum rerum minus blanditiis in.",
        country: "Brazil",
        state: "Parana",
        city: "Maringa",
        isAvailable: true
    });
    async function handleSubmit(e) {
        e.preventDefault();
        setDisabled(true);
        try {
            const { data } = await locationApi.newLocation();
            window.location.reload();
        } catch (error) {
            console.log(error.response.data);
            setDisabled(false);
        }
    }

    return (
        <>
            <Header></Header>
            <NewLocationPageContent>
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
                        data={newLocationData}
                        setData={setNewLocationData}
                    />


                    <TextField
                        id="outlined-search"
                        label="State"
                        type="text"
                        disabled={disabled}
                        value={newLocationData.state}
                        onChange={e => setNewLocationData({ ...newLocationData, state: e.target.value })}
                        required
                    />
                    <TextField
                        id="outlined-search"
                        label="City"
                        type="text"
                        disabled={disabled}
                        value={newLocationData.city}
                        onChange={e => setNewLocationData({ ...newLocationData, city: e.target.value })}
                        required
                    />

                    <TextField
                        id="outlined-search"
                        label="Bedrooms available"
                        type="number"
                        maxLength={2}
                        disabled={disabled}
                        value={newLocationData.bedrooms}
                        onChange={e => setNewLocationData({ ...newLocationData, bedrooms: e.target.value })}
                        required
                    />

                    <TextField
                        id="outlined-search"
                        label="Description"
                        type="text"
                        disabled={disabled}
                        value={newLocationData.description}
                        onChange={e => setNewLocationData({ ...newLocationData, description: e.target.value })}
                        required
                    />

                    <Stack direction="row" spacing={2} marginLeft={1} marginTop={2}>
                        <Button variant="contained" color="success" type='submit' disabled={disabled}>
                            SIGN UP
                        </Button>
                    </Stack>
                </Box>
            </NewLocationPageContent>
            <Footer></Footer>
        </>
    );
}

const NewLocationPageContent = styled.div`
display: flex;
justify-content: center;
    margin-top: 120px;
    margin-bottom: 80px;
`;