import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Camera from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { FontAwesome } from '@expo/vector-icons';

const CameraScreen = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const mediaLibraryStatus = await MediaLibrary.requestPermissionsAsync();
      setHasMediaLibraryPermission(mediaLibraryStatus.status === 'granted');
    })();
  }, []);

  const handleCaptureImage = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setCapturedImage(photo.uri);
      await MediaLibrary.saveToLibraryAsync(photo.uri);
    }
  };

  if (hasCameraPermission === null || hasMediaLibraryPermission === null) {
    return <View />;
  }

  if (hasCameraPermission === false || hasMediaLibraryPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>We need your permission to show the camera and save photos</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={(ref) => setCameraRef(ref)}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.flipButton]} onPress={() => {
            setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
          }}>
            <FontAwesome name="camera-retro" size={24} color="white" />
            <Text style={styles.buttonText}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.captureButton]} onPress={handleCaptureImage}>
            <FontAwesome name="camera" size={24} color="white" />
            <Text style={styles.buttonText}>Capture</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      {capturedImage && (
        <View style={styles.previewContainer}>
          <Image source={{ uri: capturedImage }} style={styles.preview} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 18,
      marginBottom: 12,
    },
    camera: {
      flex: 1,
      width: '100%',
    },
    buttonContainer: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 24,
    },
    button: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 12,
      borderRadius: 24,
      marginHorizontal: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    flipButton: {
      backgroundColor: 'rgba(0, 0, 255, 0.5)',
    },
    captureButton: {
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
    },
    buttonText: {
      color: 'white',
      fontSize: 14,
      marginTop: 4,
    },
    previewContainer: {
      position: 'absolute',
      bottom: 100,
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 8,
      padding: 8,
    },
    preview: {
      width: 200,
      height: 300,
    },
  }); 

export default CameraScreen;