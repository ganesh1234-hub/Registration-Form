import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

export default function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

  const handleRegister = () => {
    let valid = true;
    let tempErrors = {};

    // Validate Full Name
    if (!fullName.trim()) {
      tempErrors.fullName = 'Full Name is required';
      valid = false;
    }

    // Validate Email
    if (!email.trim()) {
      tempErrors.email = 'Email is required';
      valid = false;
    } else if (!validateEmail(email)) {
      tempErrors.email = 'Invalid email address';
      valid = false;
    }

    // Validate Phone Number
    if (!phoneNumber.trim()) {
      tempErrors.phoneNumber = 'Phone Number is required';
      valid = false;
    } else if (!validatePhoneNumber(phoneNumber)) {
      tempErrors.phoneNumber = 'Phone Number must be 10 digits';
      valid = false;
    }

    // Validate Password
    if (!password.trim()) {
      tempErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    // Validate Confirm Password
    if (!confirmPassword.trim()) {
      tempErrors.confirmPassword = 'Confirm Password is required';
      valid = false;
    } else if (password !== confirmPassword) {
      tempErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(tempErrors);

    if (valid) {
      // Simulate a registration API call
      Alert.alert('Success', 'Registration completed!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <Image 
        source={{uri: 'https://play-lh.googleusercontent.com/toFAvLyhvQCBPhvxMuRrayuVEn4anbNKUqUJvJ-iam7AHnaNybQId60DPCvKvv-y4Q=w600-h300-pc0xffffff-pd'}} // Replace with your logo URL or local path
        style={styles.logo}
      />
      
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={[styles.input, errors.fullName && styles.errorInput]}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        autoCapitalize="words"
      />
      {errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}

      <TextInput
        style={[styles.input, errors.email && styles.errorInput]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <TextInput
        style={[styles.input, errors.phoneNumber && styles.errorInput]}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="number-pad"
      />
      {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}

      <TextInput
        style={[styles.input, errors.password && styles.errorInput]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <TextInput
        style={[styles.input, errors.confirmPassword && styles.errorInput]}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: '100%',  // Full width of the screen
    height: '30%',  // Adjust the height of the logo (30% of the screen height)
    resizeMode: 'contain', // Maintain the aspect ratio of the logo
    marginBottom: 20, // Space below the logo
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
});
