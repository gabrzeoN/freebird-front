import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import Header from '../Header';
import Footer from '../Footer';
import Location from '../Location';
import { UserContext } from '../../contexts/UserContext';
import * as locationApi from "../../services/locations.js";
import { PageNavigationContext } from '../../contexts/PageNavigationContext';

export default function HomePage() {
    const { setPage } = useContext(PageNavigationContext);
    const { user } = useContext(UserContext);
    const [locations, setLocations] = useState(null);

    async function loadAllLocations(){
        try{
            const { data } = await locationApi.getAll();
            setLocations([...data]);
        }catch (error) {
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        setPage(0);
        loadAllLocations();
    }, []);

    return (
        <>
            <Header></Header>
            <HomePageContent>
                {
                    locations?.length === 0 || locations === null ?
                        <p>There is no locations yet</p>
                    :
                    locations.map((location) => {
                        return(
                            <Link key={location.id} to={`location/${location.id}`}>
                                <Location key={location.id} location={location}></Location>
                            </Link>
                        )
                    })
                }
            </HomePageContent>
            <Footer></Footer>
        </>
    );
}

const HomePageContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 120px;
    margin-bottom: 80px;
`;

