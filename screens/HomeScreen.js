import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import LineDivider from '../components/LineDivider';
import { useNavigation } from '@react-navigation/native'
import { ThemeContext, themes } from '../context/ThemeProvider';
//constans 
import { COLORS, icons, FONTS, SIZES, dummyData, images } from '../constants'

const HomeScreen = () => {

    const { theme } = useContext(ThemeContext);
    const navigation = useNavigation();

    function renderHeader() {
        return (
            <View style={{
                marginHorizontal: SIZES.padding,
                marginTop: SIZES.padding,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <View>
                    <Text style={{ color: theme == "dark" ? themes.dark.white : themes.dark.primary, ...FONTS.h1 }}>Hello <Text style={{ color: theme == "dark" ? themes.dark.white : themes.dark.primary, ...FONTS.body1 }}>Daizy!</Text></Text>
                    <Text style={{ color: theme == "dark" ? themes.dark.white : COLORS.gray, ...FONTS.h4, marginTop: SIZES.base / 2 }}>Check for latest addition.</Text>
                </View>
                <TouchableOpacity
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => console.log("Profile Picture Pressed")}
                >
                    <Image
                        source={images.profile}
                        resizeMode="contain"
                        style={{
                            width: 50,
                            height: 50
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderSearch() {
        return (
            <View
                style={{
                    marginHorizontal: SIZES.padding,
                    backgroundColor: '#191923',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    alignItems: 'center'
                }}
            >
                {/* Icon and Search Text */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.white
                        }}
                    />
                    <Text style={{ marginLeft: SIZES.base * 2, color: COLORS.gray, ...FONTS.h4 }}>Search</Text>
                </View>
                {/* Divider and Mic */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <LineDivider />
                    <Image
                        source={icons.mic}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray,
                            marginLeft: SIZES.radius
                        }}
                    />
                </View>
            </View>
        )
    }

    function renderFilters() {

        const renderItem = ({ item, index }) => {
            return (
                <View style={{
                    marginLeft: index == 0 ? 0 : SIZES.radius,
                    marginRight: index == dummyData.categories.length - 1 ? SIZES.base : 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("Filter item pressed")}
                        style={{
                            width: 45,
                            height: 45,
                            borderRadius: SIZES.base * 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: theme == "dark" ? themes.dark.white : themes.dark.primary,
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: theme == "dark" ? themes.dark.primary : themes.dark.white,
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: theme == "dark" ? themes.dark.white : COLORS.primary, ...FONTS.body4, marginTop: SIZES.base / 2 }}>{item.name}</Text>
                </View>
            )
        }

        return (
            <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}>
                <Text style={{ color: theme == "dark" ? themes.dark.white : themes.dark.primary, ...FONTS.h2 }}>Filters</Text>
                <FlatList
                    data={dummyData.categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ marginTop: SIZES.base * 2 }}
                    listKey="Filters"
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                />
            </View>
        )
    }

    function renderFeaturedSeries() {

        const renderItem = ({ item, index }) => {
            return (
                <TouchableOpacity
                    style={{
                        marginLeft: index == 0 ? 0 : SIZES.padding,
                    }}
                    onPress={() => navigation.navigate("Detail", { selectedMovie: item })}
                >
                    <Image
                        source={item.image}
                        resizeMode="cover"
                        style={{
                            width: 200,
                            height: 300
                        }}
                    />
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ marginHorizontal: SIZES.padding, marginTop: SIZES.padding }}>
                <Text style={{ color: theme == "dark" ? themes.dark.white : themes.dark.primary, ...FONTS.h1 }}>Featured <Text style={{ color: theme == "dark" ? themes.dark.white : themes.dark.primary, ...FONTS.body1 }}>Series</Text></Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ marginTop: SIZES.padding }}
                    data={dummyData.featured}
                    listKey="Featured"
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                />
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: theme == "dark" ? themes.dark.primary : themes.dark.white }}>
            {/* Header Section */}
            {renderHeader()}

            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                {/* Search Section */}
                {renderSearch()}

                {/* Filters Section */}
                {renderFilters()}

                {/* Featured Series Section */}
                {renderFeaturedSeries()}
            </ScrollView>
        </View>
    )
}


export default HomeScreen
