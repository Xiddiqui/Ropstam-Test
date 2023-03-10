import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {CarListingDataSource} from '../../dataSource';
import {ListingsCard} from '../../components/cards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {AppTextColor} from '../../constants/colors';
import RNPickerSelect from 'react-native-picker-select';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, FormProvider, useForm} from 'react-hook-form';

const Home = () => {
  const [dataSource, setDataSource] = useState(CarListingDataSource);
  const [modalVisible, setModalVisible] = useState(false);

  // This schema is for validation
  const schema = yup.object().shape({
    model: yup.string().required('Model is required'),
    color: yup.string().required('Color is required'),
    reg: yup.string().required("Color can't be blank"),
    cat: yup.mixed().required("Category can't be blank"),
  });
  const methods = useForm({
    defaultValues: {
      model: '',
      color: '',
      reg: '',
      cat: '',
    },
    mode: 'all',
    resolver: yupResolver(schema),
  });
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
    getValues,
    reset,
  } = methods;

  const onSubmit = handleSubmit(async values => {
    console.log(values);
    let arr = [...dataSource];
    arr.push({
      RegNo: values.reg,
      Model: values.model,
      Category: values.cat,
      Color: values.color,
    });
    setDataSource(arr);
    reset();
    setModalVisible(false);
  });
  const onDel = index => {
    let arr = [...dataSource];
    arr.splice(index, 1);
    setDataSource(arr);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Total Cars : {dataSource.length}</Text>
      <FlatList
        data={dataSource}
        ListFooterComponent={<View style={styles.footer} />}
        renderItem={({item, index}) => (
          <ListingsCard
            name={item.Category + ' ' + item.Model}
            color={item.Color}
            reg={item.RegNo}
            delPress={() => onDel(index)}
          />
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Ionicons name={'add'} color={'#000000'} size={responsiveFontSize(3)} />
      </TouchableOpacity>
      {/* Modal code */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <FormProvider {...methods}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Add car</Text>
                <Controller
                  render={({field: {value, onChange}}) => (
                    <View>
                      <View style={styles.pickerView}>
                        <RNPickerSelect
                          value={value}
                          onValueChange={value => onChange(value)}
                          style={{
                            inputAndroid: styles.picker,
                          }}
                          items={[
                            {label: 'BMW', value: 'BMW'},
                            {label: 'Honda', value: 'Honda'},
                            {label: 'Corola', value: 'Corola'},
                            {label: 'Faw', value: 'Faw'},
                          ]}
                        />
                      </View>
                      {errors.cat && (
                        <Text style={[styles.errorMessageText]}>
                          {errors.cat.message}
                        </Text>
                      )}
                    </View>
                  )}
                  name="cat"
                />

                <Controller
                  render={({field: {value, onChange}}) => (
                    <View>
                      <TextInput
                        placeholder="Model"
                        value={value}
                        style={styles.textInput}
                        onChangeText={val => {
                          onChange(val);
                        }}
                        placeholderTextColor={AppTextColor.primary}
                      />
                      {errors.model && (
                        <Text style={[styles.errorMessageText]}>
                          {errors.model.message}
                        </Text>
                      )}
                    </View>
                  )}
                  name="model"
                />
                <Controller
                  render={({field: {value, onChange}}) => (
                    <View>
                      <TextInput
                        placeholder="Registration"
                        value={value}
                        style={styles.textInput}
                        onChangeText={val => {
                          onChange(val);
                        }}
                        placeholderTextColor={AppTextColor.primary}
                      />
                      {errors.reg && (
                        <Text style={[styles.errorMessageText]}>
                          {errors.reg.message}
                        </Text>
                      )}
                    </View>
                  )}
                  name="reg"
                />
                <Controller
                  render={({field: {value, onChange}}) => (
                    <View>
                      <TextInput
                        placeholder="Color"
                        value={value}
                        style={styles.textInput}
                        onChangeText={val => {
                          onChange(val);
                        }}
                        placeholderTextColor={AppTextColor.primary}
                      />
                      {errors.color && (
                        <Text style={[styles.errorMessageText]}>
                          {errors.color.message}
                        </Text>
                      )}
                    </View>
                  )}
                  name="color"
                />
                <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                  <Text style={styles.btnText}>Save</Text>
                </TouchableOpacity>
              </View>
            </FormProvider>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Home;
