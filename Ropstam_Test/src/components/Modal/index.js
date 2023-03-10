import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {AppBorderColor, AppTextColor, cardColor} from '../../constants/colors';
import {fontFamily} from '../../constants/fonts';
import {ApptextInput} from '../textInput';
import RNPickerSelect from 'react-native-picker-select';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, FormProvider, useForm} from 'react-hook-form';

const AppModal = () => {
  const [modalVisible, setModalVisible] = useState(true);

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
  });
  return (
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
                name="Registration"
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
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: cardColor.primary,
    borderRadius: 20,
    width: responsiveWidth(90),
    paddingVertical: responsiveHeight(3),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontFamily: fontFamily.appTextExtraBold,
    fontSize: responsiveFontSize(2.5),
    marginVertical: responsiveHeight(1),
    color: AppTextColor.primary,
  },
  textInput: {
    width: responsiveWidth(80),
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(2),
    marginTop: responsiveHeight(1),
    paddingLeft: responsiveWidth(3),
    color: AppTextColor.primary,
    borderColor: AppTextColor.primary,
  },
  btn: {
    backgroundColor: AppTextColor.golden,
    width: responsiveWidth(80),
    height: responsiveHeight(6),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveWidth(2),
    marginTop: responsiveHeight(2),
  },
  btnText: {
    color: AppTextColor.primary,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(2.5),
  },
  picker: {
    width: responsiveWidth(80),
    alignSelf: 'center',
    borderWidth: responsiveWidth(1),
    borderColor: AppBorderColor.primary,
    color: AppTextColor.primary,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
  },
  pickerView: {
    borderWidth: responsiveWidth(0.3),
    marginTop: responsiveHeight(0.3),
    borderRadius: responsiveWidth(2),
    borderColor: AppBorderColor.primary,
    width: responsiveWidth(80),
  },
});

export default AppModal;
