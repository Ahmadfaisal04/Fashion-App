import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Headline from '../component/Headline';
import ButtonComponent from '../component/Button';


const VisualSearch = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={require('../assets/banner/visual_banner.png')}
                style={styles.backgroundImage}
            >
                <View style={{
                    marginBottom: 360,
                    textAlign: 'left',
                }}>
                    <Headline text="Search for an outfit by taking a photo or uploading an image" color="#fff" fontSize={23} />
                </View>

                <View style={{
                    marginTop: -350,
                }}>
                    <ButtonComponent backgroundColor="#FF0000" text="TAKE A PHOTO" />
                </View>

                <View style={{
                    marginTop: -110,
                }}>
                    <ButtonComponent text="UPLOAD AN IMAGE" borderColor="#FFFF" borderWidth={1} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    }
});

export default VisualSearch;
