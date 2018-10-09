import * as React from 'react'

import { Stepper } from 'src/Components/Stepper'
import { Button } from 'src/Components/Button'
import { BasicInfoForm } from '../BasicInfoForm'
import { RoomInfoForm } from '../RoomInfoForm'
import { LocationForm } from '../LocationForm'

import { Container, Wrapper, Buttons } from './style'

interface State {
    step: number
}

// tslint:disable-next-line:jsx-key
const pages = [<BasicInfoForm />, <RoomInfoForm />, <LocationForm />]

export class Form extends React.Component<{}, State> {
    public readonly state = {
        step: 0
    }

    private nextStep = () => this.setState(({ step }) => ({ step: step + 1 }))

    private prevStep = () => {
        if (this.state.step === 0) {
            return
        }

        this.setState(({ step }) => ({ step: step - 1 }))
    }

    public render() {
        const { step } = this.state

        return (
            <>
                <Stepper currentStep={step + 1} maxSteps={pages.length} />
                <Container>
                    <Wrapper>
                        {pages[step]}
                        <Buttons>
                            <Button onClick={this.prevStep}>Wstecz</Button>

                            {step === pages.length - 1 ? (
                                <Button>Submit</Button>
                            ) : (
                                <Button onClick={this.nextStep}>Dalej</Button>
                            )}
                        </Buttons>
                    </Wrapper>
                </Container>
            </>
        )
    }
}
