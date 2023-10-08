import { useState } from 'react';

import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
    margin-top: 5px;
`;

const LogoutContainer = styled(Box)`
    display: flex;
    align-items: center;
`;

const LogoutText = styled(Typography)`
    font-size: 14px;
    margin-left: 5px;
    font-weight: 600;
`;

const Profile = ({ account, setAccount }) => {

    const [open, setOpen] = useState(null);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(null);
    }

    const logoutUser = () => {
        setAccount('');
        handleClose();
    }

    return (
        <>
            <Box onClick={handleClick}>
                <Typography style={{ marginTop: 2, cursor: 'pointer' }}>{account}</Typography>
            </Box>
            <Component
                id="basic-menu"
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={logoutUser}>
                    <LogoutContainer>
                        <PowerSettingsNewIcon color='primary' fontSize='small' />
                        <LogoutText>Logout</LogoutText>
                    </LogoutContainer>
                </MenuItem>
            </Component>
        </>
    )
}

export default Profile;
