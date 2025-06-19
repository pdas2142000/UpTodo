import { StyleSheet } from "react-native";
import { ms } from "../../utils/helpers/metrics";
import { Color } from "../../utils/constant";

export const ModalStyles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '90%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalCloseButton: {
        marginTop: 20,
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    ut_close_button:{
        width:ms(45),
        height:ms(45),
        borderRadius:ms(25),
        backgroundColor:Color.ut_black + '80',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:ms(15)
    },
    textArea: {
    width: '100%',
    height: 100,
    borderColor: Color.ut_black,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    color: Color.ut_black,
    fontWeight: '600',
},

submitButton: {
    backgroundColor: Color.ut_primary,
    width:"100%",
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:ms(20)
},
ut_error:{
    color: Color.ut_error,
    fontSize: 12,
    fontWeight: '600',
    marginVertical:5,
    textAlign:"left"
},
submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
},

})
