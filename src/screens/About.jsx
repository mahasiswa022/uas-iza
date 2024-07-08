import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
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
    name: 'coklat panas',
    harga: 'Rp 10,000',
    image:
      'https://asset.kompas.com/crops/8QavkBFD7hkNpBEzsIhJ8DNWlqQ=/64x40:944x627/750x500/data/photo/2022/12/14/6399d50f0bf8b.jpg',
  },
  {
    id: '7',
    name: 'choco black forest',
    harga: 'Rp 15,000',
    image:
      'https://www.dbdpowder.com/wp-content/uploads/2019/09/Catalog-Regular-Choco-Choco-Blackforest-min.png',
  },
  {
    id: '8',
    name: 'choco coffe',
    harga: 'Rp 20,000',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvmZoIGZymq-IV8nqnKlp2YvStiP9qzETRGA&s',
  },
  {
    id: '9',
    name: 'choco macaron',
    harga: 'Rp 30,000',
    image:
      'https://t-2.tstatic.net/palu/foto/bank/images/macaron-chocolate.jpg',
  },
  {
    id: '10',
    name: 'choco creps',
    harga: 'Rp 10,000',
    image:
      'https://cdn.idntimes.com/content-images/community/2021/01/chocolate-crepes-2-2c9b537b96a53d9f542ccb5df6318193-b23ff57aefd8d877f1874eccbe26fcc8.jpg',
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
  container1: {
    width: '100%',
    height: 150,
    backgroundColor: 'red',
    borderRadius: 10,
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
  harga: {
    paddingBottom: 10,
    color: 'red',
  },
  image1: {
    width: '100%',
    height: 150,
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
