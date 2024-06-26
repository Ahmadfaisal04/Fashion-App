import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

const data = [
    { id: '1', title: 'My orders', subtitle: 'Already have 12 orders' },
    { id: '2', title: 'Shipping addresses', subtitle: '3 addresses' },
    { id: '3', title: 'Payment methods', subtitle: 'Visa **34' },
    { id: '4', title: 'Promocodes', subtitle: 'You have special promocodes' },
    { id: '5', title: 'My reviews', subtitle: 'Reviews for 4 items' },
    { id: '6', title: 'Settings', subtitle: 'Notifications, password' }
];

const ProfileItem = ({ title, subtitle }) => (
    <TouchableOpacity style={styles.item}>
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Text style={styles.arrow}>></Text>
    </TouchableOpacity>
);

const ProfileScreen = () => {
    const [fontsLoaded] = useFonts({
        'Bold': require('../assets/fonts/Metropolis-Bold.otf'),
        'Medium': require('../assets/fonts/Metropolis-Medium.otf'),
        'SemiBold': require('../assets/fonts/Metropolis-SemiBold.otf'),
        'Black': require('../assets/fonts/Metropolis-Black.otf'),
    });

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Font tidak ditemukan!!!</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/icon/search.png')} style={styles.searchIcon} />
            </View>
            <View style={styles.profileHeader}>
                <Text style={styles.profileTitle}>My profile</Text>
                <View style={styles.profileInfo}>
                    <Image source={require('../assets/Faisal.jpeg')} style={styles.profileImage} />
                    <View>
                        <Text style={styles.profileName}>Ahmad Faisal</Text>
                        <Text style={styles.profileEmail}>Ahmadfaisal@gmail.com</Text>
                    </View>
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => <ProfileItem title={item.title} subtitle={item.subtitle} />}
                keyExtractor={item => item.id}
                style={styles.list}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,

    },
    time: {
        fontSize: 18,
    },
    searchIcon: {
        width: 24,
        height: 24,
    },
    profileHeader: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    profileTitle: {
        fontSize: 28,
        fontFamily: 'Bold',
    },
    profileInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 20,
    },
    profileName: {
        fontSize: 18,
        fontFamily: 'Bold',
    },
    profileEmail: {
        fontSize: 16,
        color: '#888',
        fontFamily: 'Medium',
    },
    list: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontSize: 18,
        fontFamily: 'Bold',
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'Medium',
    },
    arrow: {
        fontSize: 18,
        color: '#888',
    },
});

export default ProfileScreen;
