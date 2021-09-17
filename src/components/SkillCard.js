import React from "react"
import { 
    TouchableOpacity,
    Text,
    StyleSheet 
} from 'react-native';

export function SkillCard({ skill }){
    return(
       
        <TouchableOpacity style={ styles.buttonSkill }>
        <Text style={styles.textSkill}>

            {skill}

        </Text>
        </TouchableOpacity>
        
    )
}
const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1e25',
        padding: 15,
        marginVertical: 10,
        borderRadius: 50,
        alignItems: 'center'
       
    },
    textSkill: {
        color: '#fff',
        fontSize: 22,
        fontWeight:'bold'
    }

})