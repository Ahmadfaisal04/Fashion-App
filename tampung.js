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