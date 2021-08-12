import React, {useState} from 'react'
import {Text, View, TextInput} from 'react-native'
import Estilo from './estilo'

export default props => {
    const [nome, setNome] = useState('Teste')
    return (
        <View >
            <TextInput
                placeholder="Digite Seu Nome: "
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}