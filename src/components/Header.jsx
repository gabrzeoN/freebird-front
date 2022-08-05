import styled from "styled-components";
import AuthBox from "./AuthBox";
import Navigation from "./Navigation";
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
export default function Header() {
    return (
        <HeaderContent>
            <FlutterDashIcon sx={{ fontSize: 40 }}></FlutterDashIcon>
            <Navigation></Navigation>
            <AuthBox></AuthBox>
        </HeaderContent>
    );
}

const HeaderContent = styled.header`
    background-color: var(--header-background);
    height: 40px;
    display: flex;
`;