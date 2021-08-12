import React from 'react'
import {Button} from 'react-native'

export default props => {

    function executa(){
        console.warn("Executando!")
    }
    return(
        <Button title="Executar" onPress={executa}/>
    )
}