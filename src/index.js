
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ListView
} from 'react-native';

import api from './services/api';

export default class App extends Component {
  constructor (props) {

    super (props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2 });

      this.state = {
        messages: [],
        dataSource: ds.cloneWithRows([]),
      }

  }

  createMessage = async () =>{
      try {

          const response = await api.post('' , {
            to: 'Diego Fernandes',
            message: 'Ei me da uma ceneca da RocketSeat?',
          },
          {headers: {'Content-Type': 'application/json'}}
          );

          console.log(response.data);
      } catch (response) {
          console.log(response);
      }

  }

  listMessages = async () =>{
    try {
        const response = await api.get('',{});

        this.setState( { messages: response.data });
        console.log(response.data);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(response.data)
          });
    } catch (e) {
        console.log(err);
    }

  }

  render() {
    return (
      <View style={styles.container}>
          <Button onPress={this.createMessage} title="Criar" />
          <Button onPress={this.listMessages} title="Listar" />

          <Text>Para         -          Message </Text>
          <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <Text>{rowData.to} -- {rowData.message}</Text> }
            />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
