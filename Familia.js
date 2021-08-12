import React from 'react'
import react, { Text } from 'react-native'
import Estilo from './estilo'
import Membro from './Membro'

export default props => {
    return (
    <>
    <Text>Membro(s) da familia: </Text>
       {props.children}
    </>
    )
}