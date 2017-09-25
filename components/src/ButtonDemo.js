import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Button from 'rax-button';

class ButtonDemo extends Component {
    state = {
    };

    constructor(props, ctx) {
        super(props, ctx);
    }

    onPress(e) {
        console.log(e);
        alert('button');
    }

    render() {
        return (
            <View>
                <Button onPress={this.onPress}>button</Button>
            </View>
        );
    }
}
export default ButtonDemo;