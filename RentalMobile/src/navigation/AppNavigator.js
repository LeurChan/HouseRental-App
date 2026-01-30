import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import API from '../services/api';
import ImageGallery from '../components/ImageGallery';

const HomeScreen = ({ navigation }) => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    API.get('/apartments').then(res => setApartments(res.data));
  }, []);

  return (
    <FlatList
      data={apartments}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <ImageGallery images={item.photos} />
          <View style={styles.info}>
            <Text style={styles.unit}>Unit {item.unit}</Text>
            <Text style={styles.price}>${item.price}</Text>
            
            <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('Booking', { 
                apartmentId: item.id, 
                unitNumber: item.unit 
              })}
            >
              <Text style={styles.buttonText}>Book Viewing</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: { marginBottom: 20, backgroundColor: '#fff' },
  info: { padding: 15 },
  unit: { fontSize: 20, fontWeight: 'bold' },
  price: { color: 'green', fontSize: 18, marginVertical: 5 },
  button: { backgroundColor: '#27ae60', padding: 10, borderRadius: 5, marginTop: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' }
});

export default HomeScreen;