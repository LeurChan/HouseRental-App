import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import API from '../services/api';

const BookingScreen = ({ route, navigation }) => {
  const { apartmentId, unitNumber } = route.params;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const submitBooking = async () => {
    try {
      await API.post('/appointments', {
        apartment_id: apartmentId,
        tenant_name: name,
        tenant_phone: phone,
        appointment_date: new Date().toISOString().split('T')[0] // Simple today's date
      });
      Alert.alert("Success", "Your viewing is booked!");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "Could not send booking.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Viewing: {unitNumber}</Text>
      <TextInput placeholder="Your Name" style={styles.input} onChangeText={setName} />
      <TextInput placeholder="Phone Number" style={styles.input} onChangeText={setPhone} keyboardType="phone-pad" />
      <Button title="Confirm Appointment" onPress={submitBooking} color="#27ae60" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderBottomWidth: 1, marginBottom: 20, padding: 10, fontSize: 16 }
});

export default BookingScreen;