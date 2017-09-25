import { createElement, Component } from 'rax';
import Image from 'rax-image';

class ImageDemo extends Component {
    state = {
    };

    constructor(props, ctx) {
        super(props, ctx);
    }

    render() {
        return (
            <Image source={{
                uri: 'https://gw.alicdn.com/tfs/TB1g6AvPVXXXXa7XpXXXXXXXXXX-215-215.png'
                }}
                style={{
                    width: 100,
                    height: 100,
                }}
                resizeMode="cover"
            />
        );
    }
}
export default ImageDemo;