import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Container, Content, CloseIcon } from './style'

let modalRoot = document.getElementById('modal-root')
if (!modalRoot) {
    modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', 'modal-root')
    document.body.appendChild(modalRoot)
}

interface Props {
    handleClose: () => void
}

export class Modal extends React.Component<Props> {
    public el = document.createElement('div')

    public componentDidMount() {
        if (modalRoot) {
            modalRoot.appendChild(this.el)
        }
    }
    public componentWillUnmount() {
        if (modalRoot) {
            modalRoot.removeChild(this.el)
        }
    }

    public render() {
        const { children, handleClose } = this.props
        return (
            this.el &&
            ReactDOM.createPortal(
                <Container>
                    <Content>
                        <CloseIcon
                            onClick={handleClose}
                            data-testid="modal-close-button"
                        />
                        {children}
                    </Content>
                </Container>,
                this.el
            )
        )
    }
}
