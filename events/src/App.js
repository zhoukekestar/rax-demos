import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import ScrollView from 'rax-scrollview';
import Touchable from 'rax-touchable';
import TextInput from 'rax-textinput';
import styles from './App.css';

class App extends Component {
  appear(e) {
    console.log('appear', e);
  }

  disappear(e) {
    console.log('disappear', e);
  }

  render() {
    return (
      <ScrollView loadMoreOffset={300} onLoadMore={() => {
        console.log('Let\' load more');
      }}>
        <Text>Events</Text>
        <Touchable onPress={() => console.log('pressed')}>
          <Text>Touch Me</Text>
        </Touchable>
        <Text style={{ height: 2000, backgroundColor: '#ccc' }}>Loooog text</Text>
        <View
          onAppear={this.appear}
          onDisappear={this.disappear}>
          <Text>Appear & Disappear</Text>
        </View>
        <Text style={{ height: 2000, backgroundColor: '#ccc' }}>Loooog text</Text>
        <Text>text input</Text>
        <TextInput
          placeholder='Enter text to see events'
          autoFocus multilien
          onFocus={() => console.log('focus')}
          onBlur={() => console.log('blur')}
          onInput={() => console.log('input')} />
        <Text>Can we load more?</Text>
      </ScrollView>
    );
  }
}

export default App;
