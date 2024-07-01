import { Alert, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
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
        // onPress: any; 
        rightSideText: string; 
        rightSideTextColor: string;
    }[] = [];

    //Manage States
    const [modalVisible, setModalVisible] = useState(false)
    const [alertState, setAlertState] = useState(true)

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
    const rightSideIconOptions = ['https://raw.githubusercontent.com/SurajMotwani1306/Stylishlist/main/assets/right-arrow.png', 'https://raw.githubusercontent.com/SurajMotwani1306/Stylishlist/main/assets/add-icon.png', 'https://raw.githubusercontent.com/SurajMotwani1306/Stylishlist/main/assets/add-icon-outline.png'];
    const leftImageUrlOptions = ['https://raw.githubusercontent.com/SurajMotwani1306/Stylishlist/main/assets/user.png', 'https://raw.githubusercontent.com/SurajMotwani1306/Stylishlist/main/assets/user-outline.png'];
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
                showsVerticalScrollIndicator={true}
                dropdownStyle={styles.dropdownMenuStyle}
            />
        )
    }

    // Methods for minimize duplication & increases re-usability
    const returnSelectBoxViewWithText = (optionsArray: any, defaultValue: string, passMethod: any, textValue: string) => {
        return (
            <View style={[styles.checkboxStyle, (landscape && !tablet) ? { width: '50%' } : {}]}>
                {returnSelectBox(optionsArray, defaultValue, passMethod)}
                <Text style={styles.inputText}>
                    {textValue}
                </Text>
            </View>
        )
    }

    const returnCheckBoxViewWithText = (defaultValue: boolean, passMethod: any, textValue: string) => {
        return (
            <View style={[styles.checkboxStyle, (landscape && !tablet) ? { width: '50%' } : {}]}>
                <CheckBox
                    disabled={false}
                    value={defaultValue}
                    onValueChange={() => {
                        passMethod(!defaultValue)
                    }}
                />
                <Text style={styles.inputText} onPress={() => {
                    passMethod(!defaultValue)
                }}>
                    { textValue }
                </Text>
            </View>
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
                    alertState ? Alert.alert('Note: Updating all list items with item props to make it in sync, & gives your better look & feel.') : null
                    setAlertState(false);
                    setModalVisible(!modalVisible);
                }}>
                <ScrollView>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <Text style={styles.element}>Parent Props</Text>
                            <View style={[styles.inputContainer, (landscape && !tablet) ? {flexDirection: 'row', flexWrap: 'wrap', alignContent: 'flex-start'} : {}]}>
                                { returnSelectBoxViewWithText(headingOptions, heading, setHeading, 'heading') }
                                { returnSelectBoxViewWithText(headingColorOptions, headingColor, setHeadingColor, 'headingColor') }
                                { returnSelectBoxViewWithText(headingSizeOptions, headingSize, setHeadingSize, 'headingSize') }

                                { returnCheckBoxViewWithText(leftImageUrlFlag, setleftImageUrlFlag, 'leftImageUrlFlag') }
                                { returnCheckBoxViewWithText(belowLine, setbelowLine, 'belowLine') }
                                { returnCheckBoxViewWithText(itemBoxBorder, setItemBoxBorder, 'itemBoxBorder') }
                                { returnCheckBoxViewWithText(itemBoxBorderLeftHighlight, setItemBoxBorderLeftHighlight, 'itemBoxBorderLeftHighlight') }

                                { returnSelectBoxViewWithText(itemBoxBorderLeftHighlightColorOptions, itemBoxBorderLeftHighlightColor, setItemBoxBorderLeftHighlightColor, 'itemBoxBorderLeftHighlightColor') }

                                { returnCheckBoxViewWithText(rightArrowVisibility, setRightArrowVisibility, 'rightArrowVisibility') }
                                { returnCheckBoxViewWithText(rightSideTextFlag, setRightSideTextFlag, 'rightSideTextFlag') }

                                { returnSelectBoxViewWithText(rightSideIconOptions, rightSideIcon, setRightSideIcon, 'rightSideIcon url') }
                            </View>

                            <Text style={styles.element}>Item Props</Text>
                            <View style={[styles.inputContainer, (landscape && !tablet) ? {flexDirection: 'row', flexWrap: 'wrap', alignContent: 'flex-start'} : {}]}>
                                { returnSelectBoxViewWithText(leftImageUrlOptions, leftImageUrl, setLeftImageUrl, 'leftImageUrl') }
                                { returnSelectBoxViewWithText(leftImageBackgroundColorOptions, leftImageBackgroundColor, setLeftImageBackgroundColor, 'leftImageBackgroundColor') }
                                { returnSelectBoxViewWithText(itemTitleOptions, itemTitle, setItemTitle, 'itemTitle') }
                                { returnSelectBoxViewWithText(itemDescriptionOptions, itemDescription, setItemDescription, 'itemDescription') }
                                { returnSelectBoxViewWithText(itemColorCircleOptions, itemColorCircle, setItemColorCircle, 'itemColorCircle') }
                                { returnSelectBoxViewWithText(rightSideTextOptions, rightSideText, setRightSideText, 'rightSideText') }
                                { returnSelectBoxViewWithText(rightSideTextColorOptions, rightSideTextColor, setRightSideTextColor, 'rightSideTextColor') }
                            </View>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    alertState ? Alert.alert('Note: Updating all list items with item props to make it in sync, & gives your better look & feel.') : null
                                    setAlertState(false);
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
                                                // onPress: el.pressEventTrigger,
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
                                <Text style={styles.textStyle}>Update Props</Text>
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
                    <Text style={styles.textBtnStyle}>Modify Props</Text>
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