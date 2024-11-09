import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

const RatingBadge = ({ rating }: { rating: number }) => {
  return (
    <View className="inline-flex h-6 px-2 py-1 bg-[#ffeae5] rounded-lg flex-row items-center gap-1 self-start">
      <Ionicons name="heart" size={14} color="#d42800" />
      <Text className="text-[#d42800] text-xs font-medium">
        {rating.toFixed(1)}
      </Text>
    </View>
  );
};

const ScheduleDate = ({ date }: { date: string }) => {
  return (
    <View className="m-lg flex-row items-center justify-center bg-[#DEF2FF] rounded-lg p-4">
      <Ionicons className="pl-4" name="calendar" size={16} color="#FF7900" />
      <Text className="ml-2 w-full text-sm text-gray-500">{date}</Text>
    </View>
  );
};

export const AppointmentCard = () => {
  return (
    <View className="m-md items-center justify-center bg-white rounded-lg shadow-md">
      <View className="w-full flex-row items-center justify-between mb-2 p-4">
        <Text className="text-lg font-bold text-black">Agendamentos</Text>
        <Text className="text-sm text-gray-500">Ver Todos</Text>
      </View>

      <View className="flex-row items-center pb-4 px-4">
        <Image
          source={{ uri: 'https://via.placeholder.com/80' }}
          className="w-20 h-20 rounded-full bg-gray-200"
        />

        <View className="ml-4 flex-1">
          <RatingBadge rating={4.9} />
          <Text className="text-base font-semibold mt-1 text-black">
            Dr. José Geraldo
          </Text>
          <Text className="text-sm text-gray-500">Dermatologista</Text>
        </View>
      </View>
      <ScheduleDate date="Segunda 20 Set, 2024   9:00 - 9:30" />
    </View>
  );
};

export default AppointmentCard;
