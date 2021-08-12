import React, { Fragment, useState } from 'react'
import {Text, Button} from 'react-native'
import Estilo from './estilo'

export default props => {
    
    const [numero, SetNumero] = useState(props.inicial)

    const incrementar = () => SetNumero(numero++)
    const decrementar = () => SetNumero(numero--)

    return(
        <Fragment>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="Somar" onPress={incrementar}/>
            <Button title="Diminuir" onPress={decrementar}/>
        </Fragment>
    )
}

