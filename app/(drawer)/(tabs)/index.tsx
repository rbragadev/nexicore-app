import { Stack } from 'expo-router';
import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.9;

export default function Home() {
  // Dados de usuário (mockados para teste)
  const user = {
    name: 'Dr. Harbor',
    email: 'dr.harbor@example.com',
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View className="flex-1 items-center justify-center bg-gray-100">
        <View style={{ width: CARD_WIDTH }} className="bg-primary rounded-lg p-4 shadow-lg">
          <Text className="text-xl font-bold text-white">User Info</Text>
          <Text className="mt-2 text-lg text-white">Name: {user.name}</Text>
          <Text className="mt-1 text-lg text-white">Email: {user.email}</Text>
        </View>
      </View>
    </>
  );
}
