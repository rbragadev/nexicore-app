import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

import { HeaderButton } from '../../components/HeaderButton';

const DrawerLayout = () => (
  <Drawer>
    <Drawer.Screen
      name="(tabs)"
      options={{
        headerTitle: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />,
        headerRight: () => (
          <Link href="/modal" asChild>
            <HeaderButton />
          </Link>
        ),
      }}
    />
    <Drawer.Screen
      name="profile"
      options={{
        headerTitle: 'Profile',
        drawerLabel: 'Profile',
        drawerIcon: ({ size, color }) => (
          <Ionicons name="person-outline" size={size} color={color} />
        ),
      }}
    />
  </Drawer>
);

export default DrawerLayout;
