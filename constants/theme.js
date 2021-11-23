import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary: '#09090F',
    secondary: '#FF3B30',
    white: '#FFFFFF',
    gray: '#A0A0A0',
    yellow: '#FFC837',
    darkGray: '#51535D',
}

export const SIZES = {
    base: 8,
    radius: 12,
    radius2: 24,
    padding: 48,
    padding2: 36,

    h1: 24,
    h2: 18,
    h3: 16,
    h4: 14,
    body1: 24,
    body2: 18,
    body3: 16,
    body4: 14,

    width,
    height,
}

export const FONTS = {
    largeTitle: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h1, lineHeight: 32 },
    h1: { fontFamily: "Poppins-Medium", fontSize: SIZES.h1, lineHeight: 32 },
    h2: { fontFamily: "Poppins-Medium", fontSize: SIZES.h2, lineHeight: 24 },
    h3: { fontFamily: "Poppins-Medium", fontSize: SIZES.h3, lineHeight: 18 },
    h4: { fontFamily: "Poppins-Medium", fontSize: SIZES.h4, lineHeight: 16 },

    body1: { fontFamily: "Poppins-Light", fontSize: SIZES.h1, lineHeight: 32 },
    body2: { fontFamily: "Poppins-Light", fontSize: SIZES.h2, lineHeight: 24 },
    body3: { fontFamily: "Poppins-Light", fontSize: SIZES.h3, lineHeight: 18 },
    body4: { fontFamily: "Poppins-Light", fontSize: SIZES.h4, lineHeight: 16 },

}

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;