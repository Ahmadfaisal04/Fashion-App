import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json))
  }, [])
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10
    }}>
      <Text>Daftar User</Text>
      {users.map((user) => (
        <View
          style={{
            borderWidth: 1,
            borderColor: 'black',
            padding: 20,
            margin: 5
          }}
          key={user.id}>
          <Text>Nama: {user.name}</Text>
          <Text>Username: {user.username}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Street :{user?.address?.street}</Text>
        </View>
      ))}
    </View>
  )
}
export default App