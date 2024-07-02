import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Modal,
  View,
} from 'react-native';
import PropsTypes from 'prop-types';

const ModalOverlay = (props) => {

  return (
    <View>
      <Modal
        visible={props.visible}
        transparent={props.transparent}
        onRequestClose={props.dismiss}
        animationType={props.animationType}
      >
        <TouchableWithoutFeedback onPress={props.dismiss}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContent}>
          {props.children}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    margin: '5%',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.8)'
  },
});

export default ModalOverlay;

ModalOverlay.PropsTypes = {
  children: PropsTypes.node.isRequired,
  visible: PropsTypes.bool.isRequired,
  dismiss: PropsTypes.func.isRequired,
  transparent: PropsTypes.bool,
  animationType: PropsTypes.string,
};