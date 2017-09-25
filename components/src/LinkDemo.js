import { createElement, Component } from 'rax';
import View from 'rax-view';
import Link from 'rax-link';

class LinkDemo extends Component {
    state = {
    };

    constructor(props, ctx) {
        super(props, ctx);
    }

    render() {
        const url = 'https://www.taobao.com';
        return (
            <View>
                <Link href={url}>Link</Link>
            </View>
        );
    }
}
export default LinkDemo;