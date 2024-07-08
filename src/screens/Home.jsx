import {StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const cakeData = [
  {
    id: '1',
    name: 'Chocolate Cake',
    harga: 'Rp 10,000',
    image:
      'https://cdn.idntimes.com/content-images/post/20171013/gu-3c773f4e2febe261ffdd9b5b7cfd7a81_600x400.jpg',
  },
  {
    id: '2',
    name: 'choco drink',
    harga: 'Rp 10,000',
    image:
      'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//87/MTA-4770221/dapur_cokelat_dapur_cokelat_iced_chocolate_full01_gr3acmdi.jpg',
  },
  {
    id: '3',
    name: 'puding coklat',
    harga: 'Rp 10,000',
    image:
      'https://awsimages.detik.net.id/community/media/visual/2023/05/16/resep-puding-cokelat-saus-vanili.jpeg?w=600&q=90',
  },
  {
    id: '4',
    name: 'coklat lava',
    harga: 'Rp 10,000',
    image:
      'https://www.dapurkobe.co.id/wp-content/uploads/chocolate-lava-cake.jpg',
  },
  {
    id: '5',
    name: 'choco hazelnut',
    harga: 'Rp 10,000',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUNcX0Q_eE12J6GbF4I64cGewPSB1qhqJPSg&s',
  },
  {
    id: '6',
    name: 'cromboloni coklat',
    harga: 'Rp 10,000',
    image: 'https://imgcdn.solopos.com/@space/2023/12/cromboloni-.jpg',
  },
  // Tambahkan lebih banyak kue sesuai kebutuhan
];

const Home = () => {
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.harga}>{item.harga}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          source={{
            uri: 'https://png.pngtree.com/background/20230412/original/pngtree-chocolate-food-poster-picture-image_2401719.jpg',
          }}
          style={styles.image1}
        />
      </View>
      <FlatList
        data={cakeData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container1:{
    width:'100%',
    height:150,
    backgroundColor:'red',
    borderRadius:10
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  harga:{
    paddingBottom:10,
    color:'red'
  },
  image1:{
    width:'100%',
    height:150
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
