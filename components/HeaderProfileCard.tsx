import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

type HeaderProfileCardProps = {
  avatarUri: string;
  userName: string;
  userLocation: string;
  notificationCount?: number;
};

export const HeaderProfileCard: React.FC<HeaderProfileCardProps> = ({
  avatarUri,
  userName,
  userLocation,
  notificationCount = 0,
}) => {
  return (
    <View className={styles.container}>
      <Image className={styles.avatar} source={{ uri: avatarUri }} />

      <View className={styles.userInfo}>
        <Text className={styles.userName}>{userName}</Text>
        <View className={styles.userLocationContainer}>
          <Ionicons name="location-outline" className={styles.userLocationIcon} />
          <Text className={styles.userLocationText}>{userLocation}</Text>
        </View>
      </View>

      <View className="relative">
        <Ionicons name="notifications" size={24} color="#6B7280" />
        {notificationCount > 0 && (
          <View className="absolute right-0 top-0 h-4 w-4 items-center justify-center rounded-full bg-red-500">
            <Text className="text-xs text-white">{notificationCount}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default HeaderProfileCard;

const styles = {
  container: 'm-md flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md',
  avatar: 'w-12 h-12 rounded-full',
  userInfo: 'flex-1 ml-4',
  userName: 'text-lg font-bold text-black',
  userLocationContainer: 'flex-row items-center mt-1',
  userLocationIcon: 'text-gray-500',
  userLocationText: 'ml-1 text-sm text-gray-500',
  notificationContainer: 'relative',
  notificationIcon: 'text-gray-500',
  notificationBadge: 'absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full',
};
