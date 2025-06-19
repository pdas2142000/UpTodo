import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ProfileStyles as styles } from './styles'
import EditIcon from '../../../assets/svgs/edit.svg'
import RightIcon from '../../../assets/svgs/right.svg'
import PolicyIcon from '../../../assets/svgs/policy.svg'
import TermsIcon from '../../../assets/svgs/terms.svg'
import { IconProps } from '../../utils/helpers/Iconprops'
import { ms } from '../../utils/helpers/metrics'
import { Color } from '../../utils/constant'
import { useProfile } from '../../utils/context/ProfileProvider'
import { launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-toast-message'

const ProfileScreen = () => {
    const { profileImage, updateProfileImage } = useProfile();

    const handleImagePick = async () => {
        const result = await launchImageLibrary({
            mediaType: 'photo',
            quality: 0.5,
        });

        if (!result.didCancel && result.assets && result.assets[0]) {
            updateProfileImage(result.assets[0].uri);
            Toast.show({
                type: 'success',
                text1: 'Profile Updated',
                text2: 'Your profile image has been successfully updated.',
                position: 'top',
                visibilityTime: 3000,
            });
        }
    };

    return (
        <View style={styles.ut_container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.ut_profile_container}>
                    <View style={styles.ut_profile_wrapper}>
                        <View style={styles.ut_profile_box}>
                            <Image
                                source={
                                    profileImage
                                        ? { uri: profileImage }
                                        : require('../../../assets/images/user.png')
                                }
                                style={styles.ut_profile_image}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.ut_profile_info_box}
                            activeOpacity={0.7}
                            onPress={handleImagePick}
                        >
                            <View style={styles.ut_profile_info_wrapper}>
                                <EditIcon {...IconProps(ms(18))} fill={Color.ut_black} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ut_profile_name_box}>
                        <Text style={styles.ut_profile_name_text}>Pratik kumar das</Text>
                        <Text style={styles.ut_profile_email_text}>pdas2142000@gmail.com</Text>
                        <Text style={styles.ut_profile_phone_text}>+91 7207055501</Text>
                    </View>
                </View>
                <View style={styles.ut_button_box}>
                    <RenderMenuList Icon={EditIcon} title={'Edit Profile'} />
                    <RenderMenuList Icon={PolicyIcon} title={'Privacy Policy'} />
                    <RenderMenuList Icon={TermsIcon} title={'Terms and Conditions'} />
                </View>
                <View style={{ flex: 1, position: 'relative' }}>
                    <Text style={styles.ut_version_text}>Version 1.0</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ProfileScreen

const RenderMenuList = ({ Icon, title }) => {
    return (
        <TouchableOpacity style={styles.ut_logout_box}>
            <View style={styles.ut_logout_wrapper}>
                <View style={styles.ut_icon_box}>
                    <Icon {...IconProps(ms(18))} fill={Color.ut_black} />
                </View>
                <Text style={styles.ut_logout_text}>{title}</Text>
            </View>
            <View style={styles.ut_right_box}>
                <RightIcon {...IconProps(ms(25))} fill={Color.ut_black} />
            </View>
        </TouchableOpacity>
    )
}