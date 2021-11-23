import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES, } from '../constants/theme';
import { ThemeContext, themes } from '../context/ThemeProvider';

const ProfileScreen = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    function renderProfileHeader() {
        return (
            <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.radius2 }}>
                <Text style={{ color: theme == "dark" ? themes.dark.white : themes.dark.primary, ...FONTS.largeTitle }}>Profile</Text>
                <View style={{ borderWidth: 1, borderColor: COLORS.darkGray, marginTop: SIZES.radius }}></View>
            </View>
        )
    }

    function switchTheme() {
        setTheme(theme === "dark" ? 'light' : 'dark')
    }

    function renderUserInfo() {
        return (
            <View style={{
                marginHorizontal: SIZES.padding,
                marginTop: SIZES.radius2
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ color: theme == "dark" ? themes.dark.white : themes.dark.primary, ...FONTS.h1 }}>Username</Text>
                    <Text style={{ color: theme == "dark" ? COLORS.gray : COLORS.darkGray, ...FONTS.h2 }}>Daizy</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: SIZES.radius2 }}>
                    <Text style={{ color: theme == "dark" ? themes.dark.white : themes.dark.primary, ...FONTS.h1 }}>Age</Text>
                    <Text style={{ color: theme == "dark" ? COLORS.gray : COLORS.darkGray, ...FONTS.h2 }}>24</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: SIZES.radius2 }}>
                    <Text style={{ color: theme == "dark" ? themes.dark.white : themes.dark.primary, ...FONTS.h1 }}>Account Type</Text>
                    <Text style={{ color: theme == "dark" ? COLORS.gray : COLORS.darkGray, ...FONTS.h2 }}>Premium</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: SIZES.radius2 }}>
                    <Text style={{ color: theme == "dark" ? themes.dark.white : themes.dark.primary, ...FONTS.h1 }}>Theme</Text>

                    <Text style={{ color: theme == "dark" ? COLORS.gray : COLORS.darkGray, ...FONTS.body4, marginLeft: SIZES.base / 2 }}>(Tap button to change)</Text>
                    <TouchableOpacity
                        style={{
                            width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: theme == "dark" ? themes.dark.white : themes.dark.primary, marginLeft: SIZES.base
                        }}
                        onPress={() => { switchTheme() }}
                    >
                        <Text style={{ color: theme == "dark" ? themes.dark.primary : themes.dark.white, ...FONTS.h2 }}>{theme === "dark" ? "Dark" : "Light"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: theme == "dark" ? themes.dark.primary : themes.dark.white }}>
            {/* Profile Header */}
            {renderProfileHeader()}

            {/* User Info */}
            {renderUserInfo()}
        </View>
    )
}

export default ProfileScreen
