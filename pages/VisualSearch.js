import React from 'react';
import { ImageBackground, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import Headline from '../component/Headline';
import ButtonComponent from '../component/Button';

const VisualSearch = () => {
    const navigation = useNavigation();

    const uploadImage = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: 'image/*',
                copyToCacheDirectory: true,
            });
            if (result.type === 'success') {
                Alert.alert("Image Selected", result.uri);
                console.log(result.uri);
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "An error occurred while selecting the image.");
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={require('../assets/banner/visual_banner.png')}
                style={styles.backgroundImage}
            >
                <View style={styles.headlineContainer}>
                    <Headline text="Search for an outfit by taking a photo or uploading an image" color="#fff" fontSize={23} />
                </View>

                <View style={styles.takePhotoButton}>
                    <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                        <ButtonComponent backgroundColor="#FF0000" text="TAKE A PHOTO" />
                    </TouchableOpacity>
                </View>

                <View style={styles.uploadImageButton}>
                    <TouchableOpacity onPress={uploadImage}>
                        <ButtonComponent text="UPLOAD AN IMAGE" borderColor="#FFFF" borderWidth={1} />
                    </TouchableOpacity>
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
    },
    headlineContainer: {
        marginBottom: 360,
        textAlign: 'left',
    },
    takePhotoButton: {
        marginTop: -350,
    },
    uploadImageButton: {
        marginTop: -110,
    },
});

export default VisualSearch;
