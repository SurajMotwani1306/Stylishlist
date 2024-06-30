import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import DeviceInfo from 'react-native-device-info';
import SelectDropdown from 'react-native-select-dropdown';

const BottomSheet = (props: any) => {

    //Array Types with empty Initialization
    let arrayUpdateLoop: {
        leftImageUrl: string; 
        leftImageBackgroundColor: string; 
        itemTitle: string; 
        itemDescription: string;
        itemColorCircle: any,
        onPress: any; 
        rightSideText: string; 
        rightSideTextColor: string;
    }[] = [];

    //Manage States
    const [modalVisible, setModalVisible] = useState(false)

    const [heading, setHeading] = useState(props.heading)
    const [headingColor, setHeadingColor] = useState(props.headingColor)
    const [headingSize, setHeadingSize] = useState(props.headingSize)
    const [leftImageUrlFlag, setleftImageUrlFlag] = useState(props.leftImageUrlFlag)
    const [belowLine, setbelowLine] = useState(props.belowLine)
    const [itemBoxBorder, setItemBoxBorder] = useState(props.itemBoxBorder)
    const [itemBoxBorderLeftHighlight, setItemBoxBorderLeftHighlight] = useState(props.itemBoxBorderLeftHighlight)
    const [itemBoxBorderLeftHighlightColor, setItemBoxBorderLeftHighlightColor] = useState(props.itemBoxBorderLeftHighlightColor)
    const [rightArrowVisibility, setRightArrowVisibility] = useState(props.rightArrowVisibility)
    const [rightSideTextFlag, setRightSideTextFlag] = useState(props.rightSideTextFlag)
    const [rightSideIcon, setRightSideIcon] = useState(props.rightSideIcon)

    const [leftImageUrl, setLeftImageUrl] = useState(props.dataList[0].leftImageUrl)
    const [leftImageBackgroundColor, setLeftImageBackgroundColor] = useState(props.dataList[0].leftImageBackgroundColor)
    const [itemTitle, setItemTitle] = useState(props.dataList[0].itemTitle)
    const [itemDescription, setItemDescription] = useState(props.dataList[0].itemDescription)
    const [itemColorCircle, setItemColorCircle] = useState(props.dataList[0].itemColorCircle)
    const [rightSideText, setRightSideText] = useState(props.dataList[0].rightSideText)
    const [rightSideTextColor, setRightSideTextColor] = useState(props.dataList[0].rightSideTextColor)

    // States for identifying orientation & View
    let [landscape, setLandscape] = useState(false);
    let [tablet, setTablet] = useState(false);

    // Values for selectBoxes
    const headingOptions = ['Settings', 'Extras', 'Options'];
    const headingColorOptions = ['black', 'grey', 'blue', 'cyan'];
    const headingSizeOptions = [10,12,14,16,18,20,22,24,26,28,30];
    const itemBoxBorderLeftHighlightColorOptions = ['black', 'grey', 'blue', 'cyan', 'green', 'orange', 'red'];
    const rightSideIconOptions = ['https://cdn-icons-png.flaticon.com/256/3001/3001785.png', 'https://cdn-icons-png.flaticon.com/256/3001/3001785.png'];
    const leftImageUrlOptions = ['https://cdn-icons-png.flaticon.com/256/3001/3001785.png', 'https://cdn-icons-png.flaticon.com/256/3001/3001785.png'];
    const leftImageBackgroundColorOptions = ['black', 'blue', '#00D8B1', '#CFCFCF'];
    const itemTitleOptions = ['General', 'Privacy & security', 'Notification', 'Account'];
    const itemDescriptionOptions = ['Lorem ipsum', '', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'];
    const itemColorCircleOptions = [['#EAEAEA', 'black', 'blue'], ['orange', 'cyan'], [], ['green', '#EAEAEA'], ['black', 'grey', 'blue'], ['black', 'grey', 'blue', 'cyan']];
    const rightSideTextOptions = ['$20', '$25', '$50', '$80', '$100'];
    const rightSideTextColorOptions = ['black', 'grey', 'blue', 'cyan'];

    //View for Select Box
    const returnSelectBox = (optionsArray: any, defaultValue: string, passMethod: any) => {
        return (
            <SelectDropdown
                data={optionsArray}
                onSelect={(selectedItem, index) => {
                    passMethod(selectedItem)
                }}
                renderButton={(selectedItem) => {
                    return (
                        <View style={styles.dropdownButtonStyle}>
                            <Text style={styles.dropdownButtonTxtStyle}>
                                {(selectedItem) || defaultValue}
                            </Text>
                        </View>
                    );
                }}
                renderItem={(item, index, isSelected) => {
                    return (
                        <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                            <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                        </View>
                    );
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={styles.dropdownMenuStyle}
            />
        )
    }

    // Method for identifying orientation & View
    let updateStylesBasedOnDimentions = () => {
        DeviceInfo.isLandscape().then((isLandscape) => {
            setLandscape(isLandscape);
        });
        setTablet(DeviceInfo.isTablet())
    }  
    
    // Re-run
    useEffect(()=> {
        updateStylesBasedOnDimentions();
    })

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <ScrollView>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <Text style={styles.element}>Parent Props</Text>
                            <View style={[styles.inputContainer, (landscape && !tablet) ? {flexDirection: 'row', flexWrap: 'wrap', alignContent: 'flex-start'} : {}]}>
                                <View style={[styles.checkboxStyle, (landscape && !tablet) ? {width: '50%'} : {}]}>
                                    { returnSelectBox(headingOptions, heading, setHeading) }
                                    <Text style={styles.inputText}>
                                        heading
                                    </Text>
                                </View>

                                <View style={[styles.checkboxStyle, (landscape && !tablet) ? {width: '50%'} : {}]}>
                                    { returnSelectBox(headingColorOptions, headingColor, setHeadingColor) }
                                    <Text style={styles.inputText}>
                                        headingColor
                                    </Text>
                                </View>

                                <View style={[styles.checkboxStyle, (landscape && !tablet) ? {width: '50%'} : {}]}>
                                    { returnSelectBox(headingSizeOptions, headingSize, setHeadingSize) }
                                    <Text style={styles.inputText}>
                                        headingSize
                                    </Text>
                                </View>

                                <View style={[styles.checkboxStyle, (landscape && !tablet) ? {width: '50%'} : {}]}>
                                    <CheckBox
                                        disabled={false}
                                        value={leftImageUrlFlag}
                                        onValueChange={() => {
                                            setleftImageUrlFlag(!leftImageUrlFlag)
                                        }}
                                    />
                                    <Text style={styles.inputText} onPress={() => {
                                        setleftImageUrlFlag(!leftImageUrlFlag)
                                    }}>
                                        leftImageUrlFlag
                                    </Text>
                                </View>

                                <View style={[styles.checkboxStyle, (landscape && !tablet) ? {width: '50%'} : {}]}>
                                    <CheckBox
                                        disabled={false}
                                        value={belowLine}
                                        onValueChange={() => {
                                            setbelowLine(!belowLine)
                                        }}
                                    />
                                    <Text style={styles.inputText} onPress={() => {
                                        setbelowLine(!belowLine)
                                    }}>
                                        belowLine
                                    </Text>
                                </View>

                                <View style={[styles.checkboxStyle, (landscape && !tablet) ? {width: '50%'} : {}]}>
                                    <CheckBox
                                        disabled={false}
                                        value={itemBoxBorder}
                                        onValueChange={() => {
                                            setItemBoxBorder(!itemBoxBorder)
                                        }}
                                    />
                                    <Text style={styles.inputText} onPress={() => {
                                        setItemBoxBorder(!itemBoxBorder)
                                    }}>
                                        itemBoxBorder
                                    </Text>
                                </View>

                                <View style={[styles.checkboxStyle, (landscape && !tablet) ? {width: '50%'} : {}]}>
                                    <CheckBox
                                        disabled={false}
                                        value={itemBoxBorderLeftHighlight}
                                        onValueChange={() => {
                                            setItemBoxBorderLeftHighlight(!itemBoxBorderLeftHighlight)
                                        }}
                                    />
                                    <Text style={styles.inputText} onPress={() => {
                                        setItemBoxBorderLeftHighlight(!itemBoxBorderLeftHighlight)
                                    }}>
                                        itemBoxBorderLeftHighlight
                                    </Text>
                                </View>

                                <View style={[styles.checkboxStyle, (landscape && !tablet) ? {width: '50%'} : {}]}>
                                    { returnSelectBox(itemBoxBorderLeftHighlightColorOptions, itemBoxBorderLeftHighlightColor, setItemBoxBorderLeftHighlightColor) }
                                    <Text style={styles.inputText}>
                                        itemBoxBorderLeftHighlightColor
                                    </Text>
                                </View>

                                <View style={[styles.checkboxStyle, (landscape && !tablet) ? {width: '50%'} : {}]}>
                                    <CheckBox
                                        disabled={false}
                                        value={rightArrowVisibility}
                                        onValueChange={() => {
                                            setRightArrowVisibility(!rightArrowVisibility)
                                        }}
                                    />
                                    <Text style={styles.inputText} onPress={() => {
                                        setRightArrowVisibility(!rightArrowVisibility)
                                    }}>
                                        rightArrowVisibility
                                    </Text>
                                </View>

                                <View style={[styles.checkboxStyle, (landscape && !tablet) ? {width: '50%'} : {}]}>
                                    <CheckBox
                                        disabled={false}
                                        value={rightSideTextFlag}
                                        onValueChange={() => {
                                            setRightSideTextFlag(!rightSideTextFlag)
                                        }}
                                    />
                                    <Text style={styles.inputText} onPress={() => {
                                        setRightSideTextFlag(!rightSideTextFlag)
                                    }}>
                                        rightSideTextFlag
                                    </Text>
                                </View>

                                <View style={[styles.checkboxStyle, (landscape && !tablet) ? {width: '50%'} : {}]}>
                                    { returnSelectBox(rightSideIconOptions, rightSideIcon, setRightSideIcon) }
                                    <Text style={styles.inputText}>
                                        rightSideIcon url
                                    </Text>
                                </View>
                                
                            </View>

                            <Text style={styles.element}>Item Props</Text>
                            <View style={[styles.inputContainer, (landscape && !tablet) ? {flexDirection: 'row', flexWrap: 'wrap', alignContent: 'flex-start'} : {}]}>
                                <View style={[styles.checkboxStyle, (landscape && !tablet) ? {width: '50%'} : {}]}>
                                    { returnSelectBox(leftImageUrlOptions, leftImageUrl, setLeftImageUrl) }
                                    <Text style={styles.inputText}>
                                        leftImageUrl url
                                    </Text>
                                </View>

                                <View style={[styles.checkboxStyle, (landscape && !tablet) ? {width: '50%'} : {}]}>
                                    { returnSelectBox(leftImageBackgroundColorOptions, leftImageBackgroundColor, setLeftImageBackgroundColor) }
                                    <Text style={styles.inputText}>
                                        leftImageBackgroundColor
                                    </Text>
                                </View>

                                <View style={[styles.checkboxStyle, (landscape && !tablet) ? {width: '50%'} : {}]}>
                                    { returnSelectBox(itemTitleOptions, itemTitle, setItemTitle) }
                                    <Text style={styles.inputText}>
                                        itemTitle
                                    </Text>
                                </View>

                                <View style={[styles.checkboxStyle, (landscape && !tablet) ? {width: '50%'} : {}]}>
                                    { returnSelectBox(itemDescriptionOptions, itemDescription, setItemDescription) }
                                    <Text style={styles.inputText}>
                                        itemDescription
                                    </Text>
                                </View>

                                <View style={[styles.checkboxStyle, (landscape && !tablet) ? {width: '50%'} : {}]}>
                                    { returnSelectBox(itemColorCircleOptions, itemColorCircle, setItemColorCircle) }
                                    <Text style={styles.inputText}>
                                        itemColorCircle
                                    </Text>
                                </View>

                                <View style={[styles.checkboxStyle, (landscape && !tablet) ? {width: '50%'} : {}]}>
                                    { returnSelectBox(rightSideTextOptions, rightSideText, setRightSideText) }
                                    <Text style={styles.inputText}>
                                        rightSideText
                                    </Text>
                                </View>

                                <View style={[styles.checkboxStyle, (landscape && !tablet) ? {width: '50%'} : {}]}>
                                    { returnSelectBox(rightSideTextColorOptions, rightSideTextColor, setRightSideTextColor) }
                                    <Text style={styles.inputText}>
                                        rightSideTextColor
                                    </Text>
                                </View>
                            </View>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    setModalVisible(!modalVisible)
                                    updateStylesBasedOnDimentions()
                                    {
                                        // arrayUpdateLoop
                                        props.dataList.map((el: any)=>(
                                            arrayUpdateLoop.push({
                                                leftImageUrl: leftImageUrl,
                                                leftImageBackgroundColor: leftImageBackgroundColor,
                                                itemTitle: itemTitle,
                                                itemDescription: itemDescription,
                                                itemColorCircle: itemColorCircle,
                                                onPress: el.pressEventTrigger,
                                                rightSideText: rightSideText,
                                                rightSideTextColor: rightSideTextColor
                                            })
                                        ))
                                    }
                                    
                                    props.updateProps({
                                        heading: heading,
                                        headingColor: headingColor, 
                                        headingSize: headingSize, 
                                        leftImageUrlFlag: leftImageUrlFlag,
                                        belowLine: belowLine,
                                        itemBoxBorder: itemBoxBorder,
                                        itemBoxBorderLeftHighlight: itemBoxBorderLeftHighlight,
                                        itemBoxBorderLeftHighlightColor: itemBoxBorderLeftHighlightColor,
                                        rightArrowVisibility: rightArrowVisibility,
                                        rightSideTextFlag: rightSideTextFlag,
                                        rightSideIcon: rightSideIcon,
                                        dataList: arrayUpdateLoop,
                                        updateProps: props.updateProps
                                    })
                                }}>
                                <Text style={styles.textStyle}>Update</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </Modal>

            <View style={ styles.btnContainer }>
                <Pressable
                    style={styles.btnStyle}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.textBtnStyle}>Update Props</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default BottomSheet

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        margin: 20
    },
    checkboxStyle: {
        alignItems: 'center'
    },
    input: {
        height: 40,
        marginRight: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        borderColor: 'grey'
    },
    inputText:{
        marginBottom:25,
        marginLeft: -10
    },
    element: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
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
        marginBottom: 15,
        textAlign: 'center',
    },
    btnStyle:{
        width: 200,
        borderRadius: 200,
        backgroundColor: '#3c2afa',
        padding:10,
        justifyContent: 'flex-end',
        marginRight: -50
    },
    textBtnStyle: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 10
    },
    btnContainer: {
        flexDirection: 'row-reverse',
        marginBottom: 30,
        marginTop: 10
    },
    dropdownButtonStyle: {
        width: 200,
        height: 50,
        backgroundColor: '#E9ECEF',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
      },
      dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
      },
      dropdownButtonArrowStyle: {
        fontSize: 28,
      },
      dropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
      },
      dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 8,
      },
      dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
      },
      dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
      },
      dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
      },
})