import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Modal from 'rax-modal';
import Button from 'rax-button';

class ModalDemo extends Component {
    state = {
    };

    constructor(props, ctx) {
        super(props, ctx);

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal() {
        this.refs.modal.show();
    }

    hideModal() {
        this.refs.modal.hide();
    }

    render() {
        return (
            <View>
                <Button onPress={this.showModal}>Open</Button>
                <Modal ref="modal">
                    <View>
                        <Text>
                        I am a dialog
                        </Text>
                    </View>
                    <Button onPress={this.hideModal}>Close</Button>
                </Modal>
            </View>
        );
    }
}
export default ModalDemo;