import React, { useEffect } from 'react'
import { View, Text, Pressable } from 'react-native';

import { useCounterStore } from '../../store/counter-store';
import { styles } from '../../../config';
import { useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
  const count = useCounterStore(state => state.count);
  const incrementBy = useCounterStore(state => state.incrementBy);
  const decrementBy = useCounterStore(state => state.decrementBy);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Counter: ${count}`,
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: {count}</Text>

      <Pressable style={styles.primaryButton} onPress={() => incrementBy(1)}>
        <Text>+1</Text>
      </Pressable>

      <Pressable style={styles.primaryButton} onPress={() => decrementBy(1)}>
        <Text>-1</Text>
      </Pressable>
    </View>
  );
}
