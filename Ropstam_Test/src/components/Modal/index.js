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

const AppModal = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [Model, setModel] = useState('');
  const [reg, setReg] = useState('');
  const [color, setColor] = useState('');
  const [cati, setCati] = useState('');
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
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add car</Text>
            <View style={styles.pickerView}>
              <RNPickerSelect
                onValueChange={value => console.log(value)}
                style={{
                  inputAndroid: styles.picker,
                }}
                items={[
                  {label: 'Football', value: 'football'},
                  {label: 'Baseball', value: 'baseball'},
                  {label: 'Hockey', value: 'hockey'},
                ]}
              />
            </View>
            <TextInput
              placeholder="Model"
              style={styles.textInput}
              placeholderTextColor={AppTextColor.primary}
            />
            <TextInput
              placeholder="Registration"
              style={styles.textInput}
              placeholderTextColor={AppTextColor.primary}
            />
            <TextInput
              placeholder="Color"
              style={styles.textInput}
              placeholderTextColor={AppTextColor.primary}
            />
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>
          </View>
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
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
