import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VW001_login from "./views/VW001_login";
import VW002_signup from './views/VW002_signup';

function App() {
  return (
    <VW002_signup/>
  );
}

export default App;