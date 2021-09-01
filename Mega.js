import React, {Component, useState} from 'react'
import {Button, Text, TextInput, StyleSheet, View} from 'react-native'
import Estilo from '../estilo'

import Numero from './Numero'
export default class Mega extends Component{

    state = {
        qtdNumeros:this.props.qtdNumeros,
        numeros: []
    }

    alteraNumero = (qtde) => {
        this.setState({qtdNumeros:+qtde})
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 100) + 1

        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    // gerarNumeros = () => {
    //     const numeros = Array(this.state.qtdNumeros)
    //         .fill()
    //         .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
    //         .sort((a, b) => a - b)
    //     this.setState({numeros: numeros})
    // }

    gerarNumeros = () => {
        const { qtdNumeros } = this.state
        const numeros = []

        for(let i=0; i < qtdNumeros; i++){
            const n = this.gerarNumeroNaoContido(numeros)
            numeros.push(n)
        }
        numeros.sort((a,b) => a-b)
        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <Numero num={num}/>
        })
    }


    render(){
        return(
            <>
                <Text style={Estilo.txtM}> Gerador de números aleatórios</Text>
                <TextInput placeholder="Quantidade de numeros"
                 value={`${this.state.qtdNumeros}`} 
                 onChangeText={this.alteraNumero} 
                 style={{borderBottomWidth: 2, borderColor: "#000"}} 
                 keyboardType={'numeric'} 
                 textAlign={'center'}/>

                 <Button title='Gerar' onPress={this.gerarNumeros}>  
                 </Button>
                 <View style={{
                     marginTop: 20,
                     flexDirection: 'row',
                     flexWrap: 'wrap',
                     justifyContent: 'center'

                 }}>
                    {this.exibirNumeros()}
                 </View>
            </>
        )
    }
}
