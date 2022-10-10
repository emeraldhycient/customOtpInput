import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'

const OtpBoxes = ({ onCodeFilled, autoFocusOnLoad }) => {

    const [inputbox1, setinputbox1] = useState("")
    const [inputbox2, setinputbox2] = useState("")
    const [inputbox3, setinputbox3] = useState("")
    const [inputbox4, setinputbox4] = useState("")
    const [inputbox5, setinputbox5] = useState("")
    const [inputbox6, setinputbox6] = useState("")

    const input2ref = useRef();
    const input3ref = useRef();
    const input4ref = useRef();
    const input5ref = useRef();
    const input6ref = useRef();

    useEffect(() => {
        if (inputbox1.length === 1) {
            input2ref.current.focus()
        }

    }, [inputbox1])

    useEffect(() => {

        if (inputbox2.length === 1 && inputbox1.length === 1) {
            input3ref.current.focus()
        }

    }, [inputbox2])

    useEffect(() => {

        if (inputbox3.length === 1 && inputbox1.length === 1 && inputbox2.length === 1) {
            input4ref.current.focus()
        }

    }, [inputbox3])

    useEffect(() => {

        if (inputbox4.length === 1 && inputbox1.length === 1 && inputbox2.length === 1 && inputbox3.length === 1) {
            input5ref.current.focus()
        }

    }, [inputbox4])


    useEffect(() => {

        if (inputbox5.length === 1 && inputbox1.length === 1 && inputbox2.length === 1 && inputbox3.length === 1 && inputbox4.length === 1) {
            input6ref.current.focus()
        }

    }, [inputbox5])

    useEffect(() => {

        if (inputbox6.length === 1 && inputbox1.length === 1 && inputbox2.length === 1 && inputbox3.length === 1 && inputbox4.length === 1 && inputbox5.length === 1) {
            const totalInput = `${inputbox1}${inputbox2}${inputbox3}${inputbox4}${inputbox5}${inputbox6}`
            onCodeFilled(totalInput)
        }
    }, [inputbox6])



    return (
        <View style={styles.container}>
            <Text>OtpBoxes</Text>
            <TextInput style={styles.inputStyles} autoFocus={autoFocusOnLoad} blurOnSubmit={false} value={inputbox1} onChangeText={(text) => setinputbox1(text)} onSubmitEditing={() => input2ref.current.focus()} />
            <TextInput style={styles.inputStyles} blurOnSubmit={false} ref={input2ref} value={inputbox2} onChangeText={(text) => setinputbox2(text)} onSubmitEditing={() => input3ref.current.focus()} />
            <TextInput style={styles.inputStyles} blurOnSubmit={false} ref={input3ref} value={inputbox3} onChangeText={(text) => setinputbox3(text)} onSubmitEditing={() => input4ref.current.focus()} />
            <TextInput style={styles.inputStyles} blurOnSubmit={false} ref={input4ref} value={inputbox4} onChangeText={(text) => setinputbox4(text)} onSubmitEditing={() => input5ref.current.focus()} />
            <TextInput style={styles.inputStyles} blurOnSubmit={false} ref={input5ref} value={inputbox5} onChangeText={(text) => setinputbox5(text)} onSubmitEditing={() => input6ref.current.focus()} />
            <TextInput style={styles.inputStyles} blurOnSubmit={false} ref={input6ref} value={inputbox6} onChangeText={(text) => setinputbox6(text)} />
        </View>
    )
}

export default OtpBoxes

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
        justifyContent: 'center'

    }
    ,
    inputStyles: {
        borderBottomColor: "gray",
        borderBottomWidth: 2,
        marginHorizontal: 5,
        width: 25,
        color: 'gray'
    }
})