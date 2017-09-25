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

import TextInputDemo from './TextInputDemo';
import SwitchDemo from './SwitchDemo';
import CalendarDemo from './CalendarDemo';
import ToastDemo from './ToastDemo';
import ModalDemo from './ModalDemo';

import SliderDemo from './SliderDemo';
import PictureDemo from './PictureDemo';
import CountDownDemo from './CountDownDemo';
import PlayerDemo from './PlayerDemo';

class App extends Component {
  render() {
    return (
      <View style={ {width: '100%'} }>
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

        <Text style={styles.demoTitle}>textinput demo</Text>
        <TextInputDemo />

        <Text style={styles.demoTitle}>switch demo</Text>
        <SwitchDemo />
        
        <Text style={styles.demoTitle}>calendar demo</Text>
        <CalendarDemo />

        <Text style={styles.demoTitle}>toast demo</Text>
        <ToastDemo />

        <Text style={styles.demoTitle}>modal demo</Text>
        <ModalDemo />

        <Text style={styles.demoTitle}>slider demo</Text>
        <SliderDemo />


        <Text style={styles.demoTitle}>Picture demo</Text>
        <PictureDemo />


        <Text style={styles.demoTitle}>CountDown demo</Text>
        <CountDownDemo />


        <Text style={styles.demoTitle}>player demo</Text>
        <PlayerDemo />
        
      </View>
    );
  }
}

export default App;
