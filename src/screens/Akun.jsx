import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

const Account = () => {
  const handleLogout = () => {
    // Logika untuk logout pengguna
    // Misalnya, reset state global atau navigasi kembali ke halaman login
    alert('Logout berhasil');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://awsimages.detik.net.id/community/media/visual/2024/06/13/syifa-hadju-memakai-kaftan-dan-hijab-syari-1.png?w=600&q=90',
        }} // Ganti dengan URL gambar profil pengguna
        style={styles.profileImage}
      />
      <Text style={styles.title}>profile</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nama Pengguna:</Text>
        <Text style={styles.text}>aizzatul adawiyah</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>aizzatuladawiyah722@gmail.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nomor Telepon:</Text>
        <Text style={styles.text}>087998441222</Text>
      </View>
      <Button title="Logout" onPress={handleLogout} color={'black'} />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'pink',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});
