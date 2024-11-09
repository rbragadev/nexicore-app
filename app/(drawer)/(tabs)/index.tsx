import { Stack } from 'expo-router';

import AppointmentCard from '~/components/AppointmentCard';
import HeaderProfileCard from '~/components/HeaderProfileCard';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <HeaderProfileCard
        avatarUri="https://via.placeholder.com/50"
        userName="José Geraldo Moura Braga"
        userLocation="São Paulo, Brasil"
        notificationCount={3}
      />
      <AppointmentCard />
    </>
  );
}
