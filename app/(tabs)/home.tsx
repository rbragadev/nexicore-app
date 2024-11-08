import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="w-80 rounded-lg bg-blue-500 p-4 shadow-md">
        <Text className="text-lg font-bold text-white">Hey, Dr. Harbor!</Text>
        <Text className="mt-2 text-base text-white">Today is a busy day</Text>
      </View>
    </View>
  );
}
