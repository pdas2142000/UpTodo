import { StyleSheet } from "react-native";
import { Color } from "../../utils/constant";
import { ms } from "../../utils/helpers/metrics";

export const Homestyles = StyleSheet.create({
    ut_container:{
        flex: 1,
        backgroundColor: Color.ut_background,
    },
    ut_header:{
        height: ms(60),
        width: '100%',
        backgroundColor: Color.ut_white,
        elevation: 10,
        shadowColor: Color.ut_black,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal:ms(16)
    },
    ut_header_text:{
        fontSize: ms(20),
        color: Color.ut_black,
        fontWeight: 'bold',
    },
    ut_user_profile:{
        width:ms(42),
        height:ms(42),
        borderRadius:ms(25),
        backgroundColor:Color.ut_primary,
        justifyContent:'center',
        alignItems:'center',
        padding:1,
        overflow:"hidden"
    },
    ut_content:{
        paddingHorizontal:ms(16),
        flex:1
    },
    ut_toggle_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:ms(16),
        height:ms(55),
        backgroundColor:"#d0d0d030",
        borderRadius:ms(8),
        alignItems:'center',
        paddingHorizontal:ms(5)
    },
    toggle_button: {
        height:ms(45),
        width:"49%",
        backgroundColor: Color.ut_white,
        borderRadius:8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    active_toggle_button: {
        backgroundColor: Color.ut_black,
    },
    toggle_text: {
        color: Color.ut_black,
        fontSize: ms(16),
        fontWeight:"500"
    },
    active_toggle_text: {
        color: '#fff',
        fontWeight: 'bold',
    },
    ut_footer:{
        position:'absolute',
        bottom:0,
        right:15,
        bottom:15,
        width:ms(60),
        height:ms(60),
        backgroundColor:Color.ut_black,
        borderRadius:ms(18),
        justifyContent:'center',
        alignItems:'center'
    },
    ut_task_box:{
        gap:ms(15),
        marginTop:ms(15),
        flexGrow:1,
    },
    ut_task_container:{
        backgroundColor:"#d0d0d030",
        paddingVertical:ms(15),
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        paddingHorizontal:ms(10),
        borderRadius:ms(8),
        alignSelf:"center",
        width:"100%"
    },
    ut_no_task_container:{
        width:ms(180),
        height:ms(180),
    },
    ut_not_found_container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    ut_not_found_text:{
        fontSize:ms(17),
        fontWeight:"bold",
        color:Color.ut_gray,
        marginTop:ms(10)
    },
    ut_image:{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: ms(100) },
})
