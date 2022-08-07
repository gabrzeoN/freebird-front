import styled from "styled-components";
import AuthBox from "./AuthBox";
import Navigation from "./Navigation";
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import { pink, lightBlue } from '@mui/material/colors';

export default function Footer() {
    return (
        <FooterContent>
            <Navigation ></Navigation>
        </FooterContent>
    );
}

const FooterContent = styled.footer`
    /* background-color: var(--header-background); */
    /* height: 80px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    @media(min-width: 1200px) {
        display: none;
    }
`;