
const ButtonComponent = ({backgroundColor, text}) => {
    return (
        <View style={{
            backgroundColor: backgroundColor,
            borderRadius: 10,
            marginLeft: 10
        }}>

        <Text style={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: 70
        }}>
            {text}
        </Text>
    </View>
    )
}