import React from 'react'
import { View } from 'react-native'
import { COLORS } from '../constants'

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 2 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.darkGray, borderLeftWidth: 1 }}></View>
        </View>
    )
}

export default LineDivider
