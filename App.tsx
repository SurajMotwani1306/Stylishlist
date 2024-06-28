import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react';
import StylishList from 'react-native-stylishlist';
import BottomSheet from './src/BottomSheet';

const StylishLst = () => {

  const pressEventTrigger = (id : number, data: any) => {
    console.warn(id);
    // console.warn(data)
  }
  
  const updateProps = (obj:any) => {
    setProps(obj);
  }
  
  let dataList = [
    {
      leftImageUrl: 'https://cdn-icons-png.flaticon.com/256/3001/3001785.png',
      leftImageBackgroundColor: '#00D8B1',
      itemTitle: 'General',
      itemDescription: 'Lorem ipsum dolor sit amet',
      // itemColorCircle: ['#EAEAEA', 'black', 'blue'],
      onPress: pressEventTrigger,
      // checkBoxStatus: true,
      rightSideText: '$26',
      rightSideTextColor: 'blue'
    },
    {
      leftImageUrl: 'https://cdn-icons-png.flaticon.com/256/3001/3001785.png',
      leftImageBackgroundColor: '#00D8B1',
      itemTitle: 'Privacy & security',
      itemDescription: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
      // itemColorCircle: ['orange', 'cyan'],
      onPress: pressEventTrigger,
      // checkBoxStatus: true,
      rightSideText: '$20',
      rightSideTextColor: 'blue'
    },
    {
      leftImageUrl: 'https://cdn-icons-png.flaticon.com/256/3001/3001785.png',
      leftImageBackgroundColor: '#00D8B1',
      itemTitle: 'Notification',
      itemDescription: 'Lorem ipsum dolor sit amet',
      // itemColorCircle: ['green', 'orange'],
      onPress: pressEventTrigger,
      // checkBoxStatus: false,
      rightSideText: '$45',
      rightSideTextColor: 'blue'
    },
    {
      leftImageUrl: 'https://cdn-icons-png.flaticon.com/256/3001/3001785.png',
      leftImageBackgroundColor: '#00D8B1',
      itemTitle: 'Account',
      itemDescription: 'Lorem ipsum dolor sit amet',
      // itemColorCircle: ['green', 'orange'],
      onPress: pressEventTrigger,
      // checkBoxStatus: false,
      rightSideText: '$45',
      rightSideTextColor: 'blue'
    }
  ];

  let [props, setProps] = useState({ 
    heading: 'Settings',
    headingColor: 'black', 
    headingSize: 14, 
    // checkboxContainsList: false,
    leftImageUrlFlag: true,
    belowLine: true,
    itemBoxBorder: false,
    itemBoxBorderLeftHighlight: false,
    itemBoxBorderLeftHighlightColor: 'blue',
    rightArrowVisibility: true,
    rightSideTextFlag: true,
    rightSideIcon: 'https://cdn-icons-png.flaticon.com/256/3001/3001785.png',
    dataList: dataList,
    updateProps: updateProps
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <StylishList {...props}/>
          <BottomSheet {...props}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default StylishLst

const styles = StyleSheet.create({
})
