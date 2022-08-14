import styled from "styled-components";
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Header from '../Header';
import Footer from '../Footer';
import { supabase, supabaseUrl } from '../../services/supabaseClient.js';
import CountrySelect from "../CountrySelect";
import { UserContext } from '../../contexts/UserContext';
import * as locationApi from "../../services/locations.js";

export default function NewLocationPage() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [imageUpload, setImageUpload] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const [newLocationData, setNewLocationData] = useState({
        pricePerNight: null,
        bedrooms: null,
        description: "",
        country: "",
        state: "",
        city: "",
        picture: "",
        isAvailable: true
    });

    async function handleSubmit(e) {
        e.preventDefault();
        if (!imageUpload) {
            alert('Please, fill all fields correctly and select an image to upload.');
            throw new Error('You must select an image to upload.');
        }
        setDisabled(true);
        try {
            const file = imageUpload;
            const fileExt = file.name.split('.').pop()
            const fileName = `${Math.random()}.${fileExt}`
            const filePath = `${fileName}`
            let { data: uploadData, error: uploadError } = await supabase.storage.from('images').upload(filePath, file)
            if (uploadError) {
                throw uploadError;
            }
            const imageUrl = `${supabaseUrl}/storage/v1/object/public/${uploadData.Key}`
            const { data } = await locationApi.newLocation({
                ...newLocationData,
                picture: imageUrl,
                pricePerNight: parseInt(newLocationData.pricePerNight),
                bedrooms: parseInt(newLocationData.bedrooms),
            }, user);
            navigate("/");
        } catch (error) {
            alert('Please, fill all fields correctly and select an image to upload.');
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
                        disabled={disabled}
                        value={newLocationData.bedrooms}
                        onChange={e => setNewLocationData({ ...newLocationData, bedrooms: e.target.value })}
                        required
                        InputProps={{
                            inputProps: {
                                type: 'number',
                                min: 1, max: 25,
                            }
                        }}
                    />
                    <TextField
                        id="outlined-search"
                        label="U$D per night"
                        type="number"
                        disabled={disabled}
                        value={newLocationData.pricePerNight}
                        onChange={e => setNewLocationData({ ...newLocationData, pricePerNight: e.target.value })}
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
                    <Button variant="contained" component="label" sx={{width: 250, marginLeft: "10px"}}>
                        Upload image
                        <input
                            hidden
                            accept="image/*"
                            multiple
                            type="file"
                            disabled={disabled}
                            onChange={e => setImageUpload(e.target.files[0])}
                        />
                    </Button>
                    <Stack direction="row" spacing={2} marginLeft={1} marginTop={2}>
                        <Button variant="contained" type='submit' disabled={disabled} sx={{width: 250}}>
                            Be a host
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