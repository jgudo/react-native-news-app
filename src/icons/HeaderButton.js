import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons';

const IoniconsHeaderButton = (props) => (
    <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color="#fff" />
);

const HeaderButtonIcon = ({ children }) => {
    return (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}> 
            {children}
        </HeaderButtons>
    );
}

export default HeaderButtonIcon;