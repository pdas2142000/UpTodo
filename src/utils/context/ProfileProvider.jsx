// context/ProfileContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profileImage, setProfileImage] = useState(null);

    useEffect(() => {
        (async () => {
            const savedImage = await AsyncStorage.getItem('PROFILE_IMAGE');
            if (savedImage) setProfileImage(savedImage);
        })();
    }, []);

    const updateProfileImage = async (uri) => {
        setProfileImage(uri);
        await AsyncStorage.setItem('PROFILE_IMAGE', uri);
    };

    return (
        <ProfileContext.Provider value={{ profileImage, updateProfileImage }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => useContext(ProfileContext);
