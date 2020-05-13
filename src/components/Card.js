import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

const Card = ({img, text}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={img} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3F4869',
    marginBottom: 15,
    marginLeft: '3%',
    width: '94%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  text: {
    padding: 10,
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    height: 200,
  },
});
