import styled from "styled-components";

export default function Location({ location }) {

    return (
        <LocationContent>
            <img src={location.Picture[0].url} alt={location.city} />
            <h2>{location.state}, {location.country}</h2>
            <p>U$D {location.pricePerNight} / night</p>
        </LocationContent>
    );
}

const LocationContent = styled.div`
    padding: 10px;
    box-shadow: 1px 2px 29px 0px rgba(0,0,0,0.37);
    -webkit-box-shadow: 1px 2px 29px 0px rgba(0,0,0,0.37);
    -moz-box-shadow: 1px 2px 29px 0px rgba(0,0,0,0.37);
    border-radius: 10px;
    height: 450px;
    width: 350px;
    margin: 10px;
    h2{
        font-weight: bold;
        margin-top: 15px;
    }
    p{
        margin: 10px 0px;
    }
    img{
        width: 100%;
        height: 80%;
        border-radius: 20px;
        object-fit: cover;
    }

    @media (max-width: 1200px){
        height: 300px;
        width: 250px;
        img{
            height: 70%;
        }
    }
`;