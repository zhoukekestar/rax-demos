import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Switch from 'rax-switch';

class SwitchDemo extends Component {
    state = {
        swtich: true,
    };

    constructor(props, ctx) {
        super(props, ctx);
    }

    render() {
        return (
            <View>
                <Switch
                    onValueChange={v => this.setState({
                        swtich: v,
                    })}
                    value={this.state.swtich}
                />
            </View>
        );
    }
}
export default SwitchDemo;