import { FONT_GREY_DISABLE,BACKGROUND_GREY, BORDER_GREY, BORDER_HGHLIGHT, BUTTON_GREY_DISABLE, BUTTON_RED_ACTIVE, ERROR_RED_PRIMARY, FONT_GREEN_PRIMARY, FONT_GREY_CODE_ID, FONT_GREY_PRIMARY, FONT_GREY_SECONDARY, FONT_RED_PRIMARY } from "../../../styles/index";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    layout: {
        flex: 1, 
        backgroundColor: 'white', 
        paddingHorizontal: 24,
    },
    viewImage: {
        flex : 5,
        marginLeft: -250,
        marginTop : 20,
        height: 130,
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom:10,
      },
      viewImageUnblock: {
        flex : 5,
        
        marginTop : 20,
        height: 130,
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom:10,
      },
    scrollStyle: {
        flexGrow: 1, 
        marginTop: 20,
    },
    titleStyle: {
        fontSize: 16, 
        color: FONT_GREY_SECONDARY, 
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    viewGrip: {width: '100%', justifyContent: 'center', alignItems: 'center', marginVertical: 10},
    textStyle: {
        
        fontSize : 12,
        color: '#202939'
      
      },
      hyperlinkStyle: {
        color: '#BC1B06',
        fontSize: 12,
        
        
      },
    labelInput: {
        fontSize: 14, 
        color: FONT_GREY_SECONDARY, 
        marginVertical: 10,
        fontFamily: 'Inter-Bold'
    },
    inputContainerStyle: {
        width: '100%',
        marginTop: 16,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 6,
        paddingHorizontal: 16,
        marginHorizontal: 0,
        color: FONT_GREY_SECONDARY,
        fontFamily: 'NunitoSans-Regular',
        fontSize: 14,
    },
    inputStyle: {
        width: '100%',
        height: 48,
        paddingHorizontal: 0,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: 'white'
    },
    textInputStyle: {
        color: FONT_GREY_SECONDARY,
        fontFamily: 'NunitoSans-Regular',
        fontSize: 14,
    },
    alertStyle: {
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        flexDirection: 'row',
        marginTop: 10
    },
    viewError: {
        backgroundColor : 'red',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    textError: {
        
        fontSize: 12,
        fontFamily: 'Inter-Regular'
    },

    errorStyle: {
        marginTop: 10
    },
    textAlert: {
        color: FONT_RED_PRIMARY, 
        fontSize: 12, 
        fontFamily: 'Inter-Regular', 
        marginLeft: 8
    },
    viewPasswordRules: {
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        marginVertical: 10
    },
    textTitleRules: {
        fontSize: 12,
        color: FONT_GREY_SECONDARY,
        fontFamily: 'Inter-Regular'
    },
    listRulesStyle: {
        justifyContent: 'center', 
        alignItems: 'flex-start'
    },
    viewRules: {
        marginTop: 5, 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center'
    },
    textRulesStyle: {
        marginLeft: 10, 
        fontSize: 12,
        color: FONT_GREY_SECONDARY,
        fontFamily: 'Inter-Regular'
    },
    textRulesStyle2: {
        marginLeft: 10, 
        fontSize: 12,
        color: FONT_GREEN_PRIMARY,
        fontFamily: 'Inter-Regular'
    },
    footer: {
        flex: 1,
        marginTop: 30, 
        marginBottom: 40,
        justifyContent: 'flex-end', 
        alignContent: 'flex-end', 
        alignItems: 'center'
    },
    btnNextStyle: {
        width: '100%', 
        padding: 16, 
        borderRadius: 8,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: BUTTON_RED_ACTIVE 
    },
    btnNextStyle2: {
        width: '100%', 
        padding: 16, 
        borderRadius: 8,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: BUTTON_GREY_DISABLE 
    },

    setError1: {
        backgroundColor: 'white' 
    },
    setError2: {
        width: '100%', 
        marginTop: 20,
        padding: 16, 
        borderRadius: 8,
        borderColor: '#FDA29B',
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#FEF3F2' 
    },
    textNext: {
        color: 'white', 
        fontFamily: 'Inter-Bold',
        fontWeight: 'bold'
    },
    textNext2: {
        color: 'white', 
        fontFamily: 'Inter-Bold'
    },
    modalStyle: {flex: 1, margin: 0},
    viewModal: {
        width: '100%', 
        // height: 250,
        height: Platform.OS === 'ios' ? 300 : 250,
        backgroundColor: 'white',
        borderTopRightRadius: 28,
        borderTopLeftRadius: 28,
        padding: 22,
        position: 'absolute',
        bottom: 0,
    },
    viewModalUnblock: {
        width: '100%', 
        height: 400,
        backgroundColor: 'white',
        borderTopRightRadius: 28,
        borderTopLeftRadius: 28,
        padding: 22,
        position: 'absolute',
        bottom: 0,
    },
    viewTop: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 20
    },
    viewTopUnblockAkun: {
        flex: 3,
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 20,
        marginTop: 16,
    },
    subTitleStyle: {
        fontSize: 16, 
        color: FONT_GREY_PRIMARY, 
        fontFamily: 'NunitoSans-Regular', 
        marginHorizontal: 5,
        marginTop:10
    },
    subTitleStyle: {
        fontSize: 16, 
        color: FONT_GREY_PRIMARY, 
        fontFamily: 'NunitoSans-Regular', 
        marginHorizontal: 5,
        marginTop:10
    },
    subTitleStyle3: {
        fontSize: 16, 
        color: FONT_GREY_PRIMARY, 
        fontFamily: 'NunitoSans-Regular', 
        marginTop:10
    },
    subTitleStyle2: {
        fontSize: 15, 
        color: FONT_GREY_PRIMARY, 
        fontFamily: 'NunitoSans-Regular', 
        marginHorizontal: 3,
        marginTop:10
    },
    titleModalStyle: {
        fontSize: 21.81, 
        fontFamily: 'Inter-Bold',
        color: FONT_GREY_PRIMARY,
        
    },
    viewBtn: {flex: 2,
       flexDirection: 'row',
       marginHorizontal: 13,
    },
    btnStyle3: {
        backgroundColor: BUTTON_RED_ACTIVE, 
        width: '50%', 
        marginLeft :20,
        padding: 16, 
        alignContent: 'center', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 8,
        alignSelf: 'flex-end'
    },
    btnStyle5: {
        backgroundColor: BUTTON_RED_ACTIVE, 
        width: '100%', 
        padding: 16, 
        alignItems: 'center', 
        borderRadius: 8,
        alignSelf: 'flex-end'
    },
    btnStyle4: {
        backgroundColor: BUTTON_RED_ACTIVE, 
        width: '50%',
         
        padding: 16, 
        alignContent: 'center', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 8,
        alignSelf: 'flex-end'
    },
    btnStyle: {
        backgroundColor: 'white', 
        width: '50%', 
        padding: 14,
        marginStart:-13, 
        borderColor:'red',
        borderWidth:1,
        alignItems: 'center', 
         
        borderRadius: 8,
        
        alignSelf: 'flex-end'
    },
    btnStyle2: {
        backgroundColor: BUTTON_RED_ACTIVE, 
        marginLeft: 22,
        width: '50%', 
        padding: 14, 
        alignContent: 'center', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 8,
        alignSelf: 'flex-end'
    },
    modalStylee: {flex: 1, margin: 0},
    viewModall: {
        width: '100%', 
        height: 500,
        backgroundColor: 'white',
        borderTopRightRadius: 28,
        borderTopLeftRadius: 28,
        padding: 24,
        position: 'absolute',
        bottom: 0,
    },
    viewModal3: {
        width: '100%', 
        height: 380,
        backgroundColor: 'white',
        borderTopRightRadius: 28,
        borderTopLeftRadius: 28,
        padding: 24,
        position: 'absolute',
        bottom: 0,
    },
    textChangeNumber: {
        marginTop: 10, 
        color: FONT_GREY_SECONDARY,
        fontFamily: 'Inter-Regular'
    },
    textClick: { color: FONT_RED_PRIMARY, fontFamily: 'Inter-Regular' },
    footerStyle: { flex: 4, justifyContent: 'flex-end',marginBottom:20 },
    textButton: { color: 'white', fontFamily: 'Inter-Bold' },
    textButton2: { color: 'red', fontFamily: 'Inter-Bold' },
    btnEmailStyle: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    textBtnEmail: { fontSize: 14, color: FONT_RED_PRIMARY, fontFamily: 'Inter-Regular' },
});

export default styles;