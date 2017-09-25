import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Touchable from 'rax-touchable';

class TouchableDemo extends Component {
    state = {
    };

    constructor(props, ctx) {
        super(props, ctx);
    }

    onPress() {
        alert('touchable');
    }

    render() {
        return (
            <View>
                <Touchable onPress={this.onPress}>Touchable</Touchable>
            </View>
        );
    }
}
export default TouchableDemo;