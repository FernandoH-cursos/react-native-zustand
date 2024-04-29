import React from 'react'
import { View, Text, Pressable } from 'react-native';
import { styles } from '../../../config';
import { useProfileStore } from '../../store/profile-store';

export const ProfileScreen = () => {
  //* Obtenemos los datos del store de perfil creado con Zustand usando
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>

      <Pressable
        style={styles.primaryButton}
        //* 'setState()' es una función que nos permite cambiar el estado del store
        onPress={() => useProfileStore.setState({name: 'Moises prado'})}>
        <Text>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({email: 'moi.prado@gmail.com'})}>
        <Text>Cambiar email</Text>
      </Pressable>


      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile('John Doe','john.doe@google.com')}>
        <Text>Regresar a 'John'</Text>
      </Pressable>
    </View>
  );
}
