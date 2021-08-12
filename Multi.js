import React from 'react'
import {Text} from 'react-native'

import Estilo from './estilo'

export default function() {
    return <Text style={Estilo.txtG}>Comp #01 Oficial</Text>
}

export function Comp2(){
    return <Text style={Estilo.txtG}>Comp #02 Not Official</Text>
}

export function Comp3(){
    return <Text style={Estilo.txtM}>Comp #03 Not Official too</Text>
}