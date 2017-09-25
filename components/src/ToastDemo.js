import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Button from 'rax-button';
import Toast from 'universal-toast';

class ToastDemo extends Component {
    state = {
    };

    constructor(props, ctx) {
        super(props, ctx);
    }

    toast() {
        Toast.show('toast', Toast.SHORT);
    }

    render() {
        return (
            <View>
                <Button onPress={this.toast}>toast</Button>
            </View>
        );
    }
}
export default ToastDemo;