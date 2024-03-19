import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [userId, setUserId] = useState(0)
  const [usuario, setUsuario] = useState('')
  const [cidade, setCidade] = useState('')
  const [errou, setErro] = useState('')
  const [userAdd, setUserAdd] = useState('')
  const [cityAdd, setCityAdd] = useState('')

  const buscar = ()=>{
    axios.get('http://127.0.0.1:8000/api/usuario/'+userId)
    .then((response)=>{
      setUsuario(response.data.nome)
      setCidade(response.data.cidade)
    })
    .catch((erro)=>{
      console.log(erro.response.statusText)
    })
    
  }

  const adicionar = ()=>{
    axios.post('http://127.0.0.1:8000/api/usuarios',
    {
      nome: userAdd,
      cidade: cityAdd
    })
    .then((res)=>{
      console.log(res)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto2}>ID:</Text>
      <TextInput
        style={styles.ID}
        onChangeText={(e) => setUserId(e)}
      />
      <View style={styles.btn}>
        <Button
          title='Buscar'
          color='red'
          onPress={buscar}
        />
      </View>
      <Text style={styles.texto2}>Nome:</Text>
      <Text style={styles.texto}>{usuario}</Text>
      <Text style={styles.texto2}>Cidade:</Text>
      <Text style={styles.texto}>{cidade}</Text>

      <Text style={styles.texto2}>Usuário:</Text>
      <TextInput
        style={styles.addNew}
        onChangeText={(e) => setUserAdd(e)}
      />
      <Text style={styles.texto2}>Cidade:</Text>
      <TextInput
        style={styles.addNew}
        onChangeText={(e) => setCityAdd(e)}
      />

      <View style={styles.btn}>
        <Button
          title='Add'
          color='blue'
          onPress={adicionar}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginLeft: 30
  },
  ID: {
    width: '20%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft:10,
    fontWeight: 'bold'
  },
  addNew: {
    width: '80%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft:10,
    fontWeight: 'bold'
  },
  texto: {
    width: '80%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#bbb',
    borderWidth: 1,
    padding:10,
    fontWeight: 'bold'
  },
  texto2: {
    marginTop: 10,
    marginLeft: 10
  },
  btn: {
    width: 100,
    height: 40,
    marginTop: 10,
  }
});
