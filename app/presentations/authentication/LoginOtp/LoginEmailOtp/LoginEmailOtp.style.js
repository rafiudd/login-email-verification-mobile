import { BACKGROUND_GREY, BORDER_GREY, BORDER_HGHLIGHT, BUTTON_GREY_DISABLE, BUTTON_RED_ACTIVE, FONT_GREY_CODE_ID, FONT_GREY_PRIMARY, FONT_GREY_SECONDARY, FONT_RED_PRIMARY } from "../../../../styles/index";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textDescription: {
        fontWeight: 'bold'
    },
    layout: {
        flex: 1,
        paddingVertical: 20,
        backgroundColor: 'white',
        paddingHorizontal: 20
    },
    titleStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textKodeOTP: { 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    textTitle: {
        fontSize: 18,
        color: FONT_GREY_SECONDARY,
        marginBottom: 10,
        fontFamily: 'Inter-Bold'
    },
    textSubTitle: {
        width: '90%',
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: 10,
        lineHeight: 24,
        color: FONT_GREY_SECONDARY,
        fontFamily: 'Inter-Regular',
        fontSize: 14
    },
    viewOtp: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    codeInputHightlightStyle: { borderColor: BORDER_HGHLIGHT },
    codeInputFieldStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: BORDER_GREY,
        borderWidth: 1,
        padding: 0,
    },
    textCell: {
        color: FONT_GREY_SECONDARY,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Inter-Regular'
    },
    digitStyle: {
        backgroundColor: '#fff',
        width: 24,
        height: 24,
        padding: 0,
        margin: 0,
    },
    digitTxtStyle: {
        color: FONT_GREY_SECONDARY,
        fontFamily: 'Inter-Regular',
        fontWeight: 'normal',
        fontSize: 16
    },
    separatorStyle: {
        color: FONT_GREY_SECONDARY,
        margin: 0
    },
    viewError: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    textError: {
        color: FONT_RED_PRIMARY,
        fontSize: 14,
        fontFamily: 'Inter-Regular'
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    labelOtp: { alignSelf: 'center', fontFamily: 'Inter-Regular', fontSize: 14, color: FONT_GREY_SECONDARY },
    btnResendOtp: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    textResendOtp: {
        fontSize: 14,
        color: FONT_RED_PRIMARY,
        fontFamily: 'Inter-Regular'
    },
    btnStyle: {
        backgroundColor: BUTTON_RED_ACTIVE,
        width: '100%',
        padding: 16,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        alignSelf: 'flex-end'
    },
    textButton: { color: 'white', fontFamily: 'Inter-Bold' },
});

export default styles;