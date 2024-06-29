import { Alert, Button, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CheckBox from '@react-native-community/checkbox';

const BottomSheet = (props: any) => {

    let arrayUpdateLoop: {
        leftImageUrl: string; 
        leftImageBackgroundColor: string; 
        itemTitle: string; 
        itemDescription: string;
        // itemColorCircle: ['#EAEAEA', 'black', 'blue'],
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

    const [rightSideText, setRightSideText] = useState(props.dataList[0].rightSideText)
    const [rightSideTextColor, setRightSideTextColor] = useState(props.dataList[0].rightSideTextColor)

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <ScrollView>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.inputContainer}>

                                <Text style={styles.element}>Parent Props</Text>

                                <View style={styles.checkboxStyle}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setHeading}
                                        value={heading}
                                        placeholder={heading}
                                    />
                                    <Text>
                                        heading
                                    </Text>
                                </View>

                                <View style={styles.checkboxStyle}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setHeadingColor}
                                        value={headingColor}
                                        placeholder={headingColor}
                                    />
                                    <Text>
                                        headingColor
                                    </Text>
                                </View>

                                <View style={styles.checkboxStyle}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setHeadingSize}
                                        value={headingSize}
                                        keyboardType="numeric"
                                    />
                                    <Text>
                                        headingSize
                                    </Text>
                                </View>

                                <View style={styles.checkboxStyle}>
                                    <CheckBox
                                        disabled={false}
                                        value={leftImageUrlFlag}
                                        onValueChange={() => {
                                            setleftImageUrlFlag(!leftImageUrlFlag)
                                        }}
                                    />
                                    <Text onPress={() => {
                                        setleftImageUrlFlag(!leftImageUrlFlag)
                                    }}>
                                        leftImageUrlFlag
                                    </Text>
                                </View>

                                <View style={styles.checkboxStyle}>
                                    <CheckBox
                                        disabled={false}
                                        value={belowLine}
                                        onValueChange={() => {
                                            setbelowLine(!belowLine)
                                        }}
                                    />
                                    <Text onPress={() => {
                                        setbelowLine(!belowLine)
                                    }}>
                                        belowLine
                                    </Text>
                                </View>

                                <View style={styles.checkboxStyle}>
                                    <CheckBox
                                        disabled={false}
                                        value={itemBoxBorder}
                                        onValueChange={() => {
                                            setItemBoxBorder(!itemBoxBorder)
                                        }}
                                    />
                                    <Text onPress={() => {
                                        setItemBoxBorder(!itemBoxBorder)
                                    }}>
                                        itemBoxBorder
                                    </Text>
                                </View>

                                <View style={styles.checkboxStyle}>
                                    <CheckBox
                                        disabled={false}
                                        value={itemBoxBorderLeftHighlight}
                                        onValueChange={() => {
                                            setItemBoxBorderLeftHighlight(!itemBoxBorderLeftHighlight)
                                        }}
                                    />
                                    <Text onPress={() => {
                                        setItemBoxBorderLeftHighlight(!itemBoxBorderLeftHighlight)
                                    }}>
                                        itemBoxBorderLeftHighlight
                                    </Text>
                                </View>

                                <View style={styles.checkboxStyle}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setItemBoxBorderLeftHighlightColor}
                                        value={itemBoxBorderLeftHighlightColor}
                                        placeholder={itemBoxBorderLeftHighlightColor}
                                    />
                                    <Text>
                                        itemBoxBorderLeftHighlightColor
                                    </Text>
                                </View>

                                <View style={styles.checkboxStyle}>
                                    <CheckBox
                                        disabled={false}
                                        value={rightArrowVisibility}
                                        onValueChange={() => {
                                            setRightArrowVisibility(!rightArrowVisibility)
                                        }}
                                    />
                                    <Text onPress={() => {
                                        setRightArrowVisibility(!rightArrowVisibility)
                                    }}>
                                        rightArrowVisibility
                                    </Text>
                                </View>

                                <View style={styles.checkboxStyle}>
                                    <CheckBox
                                        disabled={false}
                                        value={rightSideTextFlag}
                                        onValueChange={() => {
                                            setRightSideTextFlag(!rightSideTextFlag)
                                        }}
                                    />
                                    <Text onPress={() => {
                                        setRightSideTextFlag(!rightSideTextFlag)
                                    }}>
                                        rightSideTextFlag
                                    </Text>
                                </View>

                                <View style={styles.checkboxStyle}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setRightSideIcon}
                                        value={rightSideIcon}
                                        placeholder={rightSideIcon}
                                    />
                                    <Text>
                                        rightSideIcon url
                                    </Text>
                                </View>

                                <Text style={styles.element}>Item Props</Text>

                                <View style={styles.checkboxStyle}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setLeftImageUrl}
                                        value={leftImageUrl}
                                        placeholder={leftImageUrl}
                                    />
                                    <Text>
                                        leftImageUrl url
                                    </Text>
                                </View>

                                <View style={styles.checkboxStyle}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setLeftImageBackgroundColor}
                                        value={leftImageBackgroundColor}
                                        placeholder={leftImageBackgroundColor}
                                    />
                                    <Text>
                                        leftImageBackgroundColor
                                    </Text>
                                </View>

                                <View style={styles.checkboxStyle}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setItemTitle}
                                        value={itemTitle}
                                        placeholder={itemTitle}
                                    />
                                    <Text>
                                        itemTitle
                                    </Text>
                                </View>

                                <View style={styles.checkboxStyle}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setItemDescription}
                                        value={itemDescription}
                                        placeholder={itemDescription}
                                    />
                                    <Text>
                                        itemDescription
                                    </Text>
                                </View>

                                <View style={styles.checkboxStyle}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setRightSideText}
                                        value={rightSideText}
                                        placeholder={rightSideText}
                                    />
                                    <Text>
                                        rightSideText
                                    </Text>
                                </View>

                                <View style={styles.checkboxStyle}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={setRightSideTextColor}
                                        value={rightSideTextColor}
                                        placeholder={rightSideTextColor}
                                    />
                                    <Text>
                                        rightSideTextColor
                                    </Text>
                                </View>
                            </View>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    setModalVisible(!modalVisible)

                                    {
                                        // arrayUpdateLoop
                                        props.dataList.map((el: any)=>(
                                            arrayUpdateLoop.push({
                                                leftImageUrl: leftImageUrl,
                                                leftImageBackgroundColor: leftImageBackgroundColor,
                                                itemTitle: itemTitle,
                                                itemDescription: itemDescription,
                                                // itemColorCircle: ['#EAEAEA', 'black', 'blue'],
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
        margin: 20
    },
    checkboxStyle: {
        flexDirection: 'row',
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
    element: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10
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
    }
})