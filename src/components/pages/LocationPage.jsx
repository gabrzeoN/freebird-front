import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import Button from '@mui/material/Button';

import Header from '../Header';
import Footer from '../Footer';

import { UserContext } from '../../contexts/UserContext';
import * as locationApi from "../../services/locations.js";
import { PageNavigationContext } from '../../contexts/PageNavigationContext';

export default function LocationPage() {
    const { id } = useParams();
    const { setPage } = useContext(PageNavigationContext);
    const { user } = useContext(UserContext);
    const [location, setLocation] = useState(null);

    async function loadOneLocation() {
        try {
            const { data } = await locationApi.getById(id);
            console.log(data)
            setLocation({ ...data });
        } catch (error) {
            console.log(error.response.data);
        }
    }

    function handleRent(){
        alert("This functionality is coming soon!");
    }

    useEffect(() => {
        setPage(99);
        loadOneLocation();
    }, []);

    return (
        <>
            <Header></Header>
            <LocationPageContent>
                <Box>

                    {
                        location === null ?
                            <p>Loading...</p>
                            :
                            <>
                                <img src={location.Picture[0].url} alt="" />
                                <div>
                                    <h1>{`${location.city}, ${location.state}, ${location.country}`}</h1>
                                    <h2>{`U$D ${location.pricePerNight} / night`}</h2>
                                </div>
                                <p>{location.description}</p>
                                <Button
                                    variant="contained"
                                    sx={{marginTop: "40px", width: "50%", height: "50px"}}
                                    onClick={() => handleRent()}
                                >
                                    Rent
                                </Button>
                            </>
                    }
                </Box>
            </LocationPageContent>
            <Footer></Footer>
        </>
    );
}


const LocationPageContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: 10px 10px 57px -17px rgba(0,0,0,0.95) inset;
    -webkit-box-shadow: 10px 10px 57px -17px rgba(0,0,0,0.95) inset;
    -moz-box-shadow: 10px 10px 57px -17px rgba(0,0,0,0.95) inset;
    background-color: #8ae7de39;  
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    background-color: white;
    box-shadow: 10px 10px 129px -42px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 129px -42px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 129px -42px rgba(0,0,0,0.75);
    max-width: 1180px;
    padding: 76px;
    margin-top: 120px;
    margin-bottom: 80px;
    border-radius: 30px;
    img{
        max-width: 1024px;
        aspect-ratio: 16 / 9;
        box-shadow: 10px 10px 57px -17px rgba(0,0,0,0.25);
        -webkit-box-shadow: 10px 10px 57px -17px rgba(0,0,0,0.25);
        -moz-box-shadow: 10px 10px 57px -17px rgba(0,0,0,0.25);
    }
    
    div{
        display: flex;
        justify-content: space-between;
        margin: 25px 0px;
        font-size: 24px;
        font-weight: bold;
        width: 100%;
    }

    p{
        font-size: 20px;
        text-align: justify;
    }

    @media (max-width: 1200px) {
        align-items: center;
        max-width: 500px;
        padding: 20px;
        img{
            border-radius: 20px;
            max-width: 400px;
        }
        div{
            flex-direction: column;
            font-size: 20px;
            h1{
                margin-bottom: 10px;
            }
        }
    }
`;
