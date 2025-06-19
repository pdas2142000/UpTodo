import { StyleSheet } from "react-native";
import { Color } from "../../utils/constant";
import { ms } from "../../utils/helpers/metrics";

export const SplashStyles = StyleSheet.create({
    ut_container: { flex: 1, backgroundColor: Color.ut_black, justifyContent: 'center', alignItems: 'center' },
    ut_logo_box: {
        width: ms(200),
        height: ms(250),
    }
})
