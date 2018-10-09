import * as React from 'react'

interface WizardChildrenProps {
    nextStep: () => void
    prevStep: () => void
    step: number
}

interface Props {
    children: (values: WizardChildrenProps) => React.ReactNode
}

interface State {
    step: number
}

export class Wizard extends React.Component<Props, State> {
    public readonly state = {
        step: 0
    }

    public nextStep = () => this.setState(({ step }) => ({ step: step + 1 }))

    public prevStep = () => {
        if (this.state.step === 0) {
            return
        }

        this.setState(({ step }) => ({ step: step - 1 }))
    }
    public render() {
        const { step } = this.state

        return this.props.children({
            nextStep: this.nextStep,
            prevStep: this.prevStep,
            step
        })
    }
}
