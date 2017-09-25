import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import TextInput from 'rax-textinput';

class TextInputDemo extends Component {
    state = {
    };

    constructor(props, ctx) {
        super(props, ctx);
    }

    render() {
        return (
            <View>
                <TextInput
                placeholder={'Enter text to see events'}
                autoFocus multiline
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                onInput={() => console.log('onInput')}
                style={{
                    width: 750,
                    height: 100,
                    borderColor: '#000',
                    borderWidth: 1,
                    paddingTop: 10,
                    paddingLeft: 0
                }}
                />
            </View>
        );
    }
}
export default TextInputDemo;