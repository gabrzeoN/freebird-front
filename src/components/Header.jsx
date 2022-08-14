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
    box-shadow: -1px 11px 21px -1px rgba(0,0,0,0.75);
    -webkit-box-shadow: -1px 11px 21px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 11px 21px -1px rgba(0,0,0,0.75);
    background-color: white;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 5;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-family: var(--logo-font);
    font-size: 50px;
    color: #0c8d98;
    color: #1565C0;
`;

const PageNavigation = styled.div`
    @media(max-width: 1200px) {
        display: none;
    }
`;