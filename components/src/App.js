import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from './App.css';

import ImageDemo from './ImageDemo';
import LinkDemo from './LinkDemo';
import IconDemo from './IconDemo';
import ButtonDemo from './ButtonDemo';
import TouchableDemo from './TouchableDemo';
import VideoDemo from './VideoDemo';

class App extends Component {
  render() {
    return (
      <View style={{width: '100%'}}>
        <Text style={styles.demoTitle}>image demo</Text>
        <ImageDemo />

        <Text style={styles.demoTitle}>link demo</Text>
        <LinkDemo />

        <Text style={styles.demoTitle}>icon demo</Text>
        <IconDemo />

        <Text style={styles.demoTitle}>button demo</Text>
        <ButtonDemo />

        <Text style={styles.demoTitle}>touchable demo</Text>
        <TouchableDemo />

        <Text style={styles.demoTitle}>video demo</Text>
        <VideoDemo />
      </View>
    );
  }
}

export default App;
