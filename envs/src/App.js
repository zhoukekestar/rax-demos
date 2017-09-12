import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './App.css';
import { isWeex, isWeb } from 'universal-env';

class App extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>navigator.platform: {navigator.platform}</Text>
        <Text style={styles.title}>navigator.product: {navigator.product}</Text>
        <Text style={styles.title}>navigator.appName: {navigator.appName}</Text>
        <Text style={styles.title}>navigator.appVersion: {navigator.appVersion}</Text>
        <Text style={styles.title}>navigator.userAgent: {navigator.userAgent}</Text>
        <Text>devicePixelRatio: { devicePixelRatio }</Text>
        <Text>screen.width: { screen.width }</Text>
        <Text>screen.height: { screen.height }</Text>
        <Text>screen.availWidth: { screen.availWidth }</Text>
        <Text>screen.availHeight: { screen.availHeight }</Text>
        <Text>screen.colorDepth: { screen.colorDepth }</Text>
        <Text>screen.pixelDepth: { screen.pixelDepth }</Text>
        <Text> isWeex: { isWeex } </Text>
        <Text> isWeb: { isWeb } </Text>
      </View>
    );
  }
}

export default App;
