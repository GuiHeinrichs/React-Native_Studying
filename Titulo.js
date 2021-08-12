import React, {Fragment} from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default (props) => (
    <Fragment>
        <Text style={Estilo.txtG}>{props.principal}</Text>
        <Text style={Estilo.txtM}>{props.secundario}</Text>
    </Fragment>
)    
