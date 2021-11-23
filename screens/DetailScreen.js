import React, { useContext } from 'react'
import { View, Text, ImageBackground, Image, ScrollView, FlatList, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeProvider';

//constants && components
import LineDivider from '../components/LineDivider';
import { SIZES, COLORS, FONTS, icons } from '../constants'

const DetailScreen = ({ route }) => {

    const { theme } = useContext(ThemeContext);
    const navigation = useNavigation();
    const { selectedMovie } = route.params;

    const StarReview = ({ rate }) => {

        let starComps = [];
        let fullStar = Math.floor(rate)
        let noStar = Math.floor(5 - rate)
        let halfStar = 5 - fullStar - noStar

        //full
        for (let i = 0; i < fullStar; i++) {
            starComps.push(
                <Image
                    key={`full-${i}`}
                    source={icons.star}
                    resizeMode="cover"
                    style={{
                        width: 20,
                        height: 20,
                        marginRight: SIZES.base
                    }}
                />
            )
        }

        //half
        for (let i = 0; i < halfStar; i++) {
            starComps.push(
                <Image
                    key={`half-${i}`}
                    source={icons.starHalf}
                    resizeMode="cover"
                    style={{
                        width: 20,
                        height: 20,
                        marginRight: SIZES.base
                    }}
                />
            )
        }

        //None
        for (let i = 0; i < noStar; i++) {
            starComps.push(
                <Image
                    key={`empty-${i}`}
                    source={icons.starEmpty}
                    resizeMode="cover"
                    style={{
                        width: 20,
                        height: 20,
                    }}
                />
            )
        }

        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {starComps}
            </View>
        )
    }

    function renderBackground() {
        return (
            <ImageBackground
                source={selectedMovie?.imageDetail}
                resizeMode="stretch"
                style={{
                    width: '100%',
                    height: SIZES.height < 700 ? SIZES.height * 0.5 : SIZES.height * 0.6,
                }}
            >
                {/* Header */}
                <View style={{
                    marginHorizontal: SIZES.padding2,
                    marginTop: Platform.OS === 'ios' ? 40 : 20,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',

                }}>
                    <TouchableOpacity
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 5,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={icons.back}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 5,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => console.log("Movie Fav Pressed")}
                    >
                        <Image
                            source={icons.fav}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', position: 'absolute', left: 0, right: 0, top: 240 }}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={theme == "dark" ? ['transparent', COLORS.primary] : ['transparent', COLORS.white]}
                        style={{
                            width: '100%',
                            height: 150,
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <View style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            backgroundColor: COLORS.secondary,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image
                                source={icons.play3}
                                resizeMode="contain"
                                style={{
                                    width: 23,
                                    height: 23,
                                    tintColor: COLORS.white
                                }}
                            />
                        </View>
                        <Text style={{ marginTop: SIZES.radius, color: COLORS.white, ...FONTS.largeTitle }}>{selectedMovie?.name}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: SIZES.base, paddingBottom: SIZES.base }}>
                            <Text style={{ color: theme == "dark" ? COLORS.gray : COLORS.primary, ...FONTS.body4, marginRight: SIZES.base }}>{selectedMovie?.year}</Text>
                            <LineDivider />
                            <View style={{ flexDirection: 'row', marginRight: SIZES.base, }}>
                                <Text style={{ marginLeft: SIZES.base, color: theme == "dark" ? COLORS.gray : COLORS.primary, ...FONTS.body4 }}>{selectedMovie?.genre1},</Text>
                                <Text style={{ marginLeft: SIZES.base, color: theme == "dark" ? COLORS.gray : COLORS.primary, ...FONTS.body4 }}>{selectedMovie?.genre2},</Text>
                                <Text style={{ marginLeft: SIZES.base, color: theme == "dark" ? COLORS.gray : COLORS.primary, ...FONTS.body4 }}>{selectedMovie?.genre3}</Text>
                            </View>
                            <LineDivider />
                            <Text style={{ marginLeft: SIZES.base, color: theme == "dark" ? COLORS.gray : COLORS.primary, ...FONTS.body4 }}>Episode - {selectedMovie?.totalEpisode}</Text>
                        </View>
                        <StarReview rate={selectedMovie?.rate} />
                    </LinearGradient>
                </View>
            </ImageBackground>
        )
    }

    function renderEpisodes() {

        const renderItem = ({ item, index }) => {
            return (
                <TouchableOpacity
                    style={{
                        width: 110,
                        height: 160,
                        marginLeft: index == 0 ? 0 : SIZES.radius2,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => console.log("Episode item pressed")}
                >
                    <ImageBackground
                        source={item.image}
                        resizeMode="cover"
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}
                        imageStyle={{ borderRadius: SIZES.radius }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h4, textAlign: 'center' }}>{item.name}</Text>
                        <Text style={{ color: theme == "dark" ? COLORS.darkGray : COLORS.gray, ...FONTS.h4, textAlign: 'center', marginTop: SIZES.base / 2 }}>{item.description}</Text>
                    </ImageBackground>

                </TouchableOpacity>
            )
        }

        return (
            <View
                style={{
                    marginHorizontal: SIZES.padding,
                    marginTop: SIZES.padding * 2
                }}
            >
                <Text style={{ color: theme == "dark" ? COLORS.white : COLORS.primary, ...FONTS.h2 }}>Episodes</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ marginTop: SIZES.base }}
                    listKey="Episodes"
                    data={selectedMovie?.episodes}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                />
            </View>
        )
    }

    function renderPlotSection() {
        return (
            <View style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}>
                <Text style={{ color: theme == "dark" ? COLORS.white : COLORS.primary, ...FONTS.h1 }}>Plot</Text>
                <Text style={{ color: theme == "dark" ? COLORS.gray : COLORS.primary, ...FONTS.body4, marginTop: SIZES.base / 2 }}>{selectedMovie?.description}</Text>
            </View>
        )
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: theme == "dark" ? COLORS.primary : COLORS.white }} contentContainerStyle={{ paddingBottom: 25 }}>

            {/* Render Image, Header && Movie Info*/}
            {renderBackground()}

            {/* Episodes Section */}
            {renderEpisodes()}

            {/* Plot Section */}
            {renderPlotSection()}

        </ScrollView>
    )
}


export default DetailScreen
