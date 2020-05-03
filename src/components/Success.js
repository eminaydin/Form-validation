import React, { useState } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const Success = () => {
    const [modalOpen, setModalOpen] = useState(true);
    const handleClose = () => setModalOpen(false);
    return (
        <Modal
            open={modalOpen}
            onClose={handleClose}
            basic
            size='small'
        >
            <Header icon='user' content='Cookies policy' />
            <Modal.Content>
                <h3>You have successfully logged in.</h3>
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' onClick={handleClose} inverted>
                    <Icon name='checkmark' /> Got it
          </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default Success;
