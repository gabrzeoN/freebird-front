import styled from "styled-components";
import AuthBox from "./AuthBox";
import Navigation from "./Navigation";
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import { pink, lightBlue } from '@mui/material/colors';
export default function Header() {
    return (
        <HeaderContent>
            <Logo>
                <FlutterDashIcon sx={{ fontSize: 70 }}></FlutterDashIcon>
                <h1>Freebird</h1>
            </Logo>
            <PageNavigation>
                <Navigation ></Navigation>
            </PageNavigation>
            <AuthBox></AuthBox>
        </HeaderContent>
    );
}

const HeaderContent = styled.header`
    background-color: var(--header-background);
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media(max-width: 600px) {
        .navbostao{
            display: none;
        }
    }
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-family: var(--logo-font);
    font-size: 50px;
    color: #0c8d98
`;

const PageNavigation = styled.div`
    @media(max-width: 600px) {
        display: none;
    }
`;