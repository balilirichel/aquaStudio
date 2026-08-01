import React from 'react';
import { Tabs } from 'expo-router';
import { TabBar } from '../../src/components/navigation/TabBar';

export default function TabsLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="library" />
      <Tabs.Screen name="projects" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
