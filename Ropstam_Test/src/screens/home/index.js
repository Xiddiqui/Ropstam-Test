import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {CarListingDataSource} from '../../dataSource';
import {ListingsCard} from '../../components/cards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {AppTextColor} from '../../constants/colors';
import AppModal from '../../components/Modal';

const Home = () => {
  const [dataSource, setDataSource] = useState(CarListingDataSource);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Total Cars : {dataSource.length}</Text>
      <FlatList data={dataSource} renderItem={({item}) => <ListingsCard />} />
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name={'add'} color={'#000000'} size={responsiveFontSize(3)} />
      </TouchableOpacity>
      <AppModal />
    </View>
  );
};

export default Home;
