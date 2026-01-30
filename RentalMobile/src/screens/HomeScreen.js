import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import API from '../services/api'; 

export default function HomeScreen() {
    const [apartments, setApartments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchApartments();
    }, []);

    const fetchApartments = async () => {
        try {
            console.log("Attempting to fetch...");
            const response = await API.get('/apartments');
            console.log("Data received:", response.data); // Look for this in your terminal!
            setApartments(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Fetch Error:", error);
            setLoading(false);
            Alert.alert("Error", "Could not connect. Check terminal logs.");
        }
    };

    // 1. Loading State
    if (loading) {
        return (
            <View style={[styles.center, { backgroundColor: '#e0e0e0' }]}>
                <ActivityIndicator size="large" color="#ff0000" />
                <Text>Connecting to Database...</Text>
            </View>
        );
    }

    // 2. Empty State (This is likely what you are seeing!)
    if (apartments.length === 0) {
        return (
            <View style={styles.center}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>No Apartments Found!</Text>
                <Text style={{ marginTop: 10 }}>Did you run the seeder?</Text>
            </View>
        );
    }

    // 3. List State
    return (
        <View style={styles.container}>
            <FlatList 
                data={apartments}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.title}>Unit: {item.unit}</Text>
                        <Text style={styles.price}>${item.price} / month</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#81d4fa' }, // Blue background to prove it's working
    center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' },
    card: { backgroundColor: 'white', padding: 20, marginBottom: 15, borderRadius: 10 },
    title: { fontSize: 20, fontWeight: 'bold' },
    price: { color: 'green', fontSize: 18 }
});