import * as React from 'react'
import { Formik, Form } from 'formik'

import { Stepper } from 'src/Components/Stepper'
import { Button } from 'src/Components/Button'
import { BasicInfoForm } from '../BasicInfoForm'
import { RoomInfoForm } from '../RoomInfoForm'
import { LocationForm } from '../LocationForm'

import { Container, Wrapper, Buttons } from './style'

interface FieldValues {
    name: string
    category: string
    picture: string
    description: string
    price: number
    guests: number
    beds: number
    amenities: string
    lat: number
    lng: number
}

interface State {
    step: number
}

// tslint:disable-next-line:jsx-key
const pages = [<BasicInfoForm />, <RoomInfoForm />, <LocationForm />]

export class CreateListingForm extends React.Component<{}, State> {
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
            <Formik<FieldValues>
                initialValues={{
                    name: '',
                    category: '',
                    picture: '',
                    description: '',
                    price: 0,
                    guests: 0,
                    beds: 0,
                    amenities: '',
                    lat: 0,
                    lng: 0
                }}
                onSubmit={(values: FieldValues) => {
                    console.log(values)
                }}
            >
                {({ submitForm }) => (
                    <Form>
                        <Stepper
                            currentStep={step + 1}
                            maxSteps={pages.length}
                        />
                        <Container>
                            <Wrapper>
                                {pages[step]}
                                <Buttons>
                                    <Button
                                        disabled={step === 0}
                                        onClick={this.prevStep}
                                    >
                                        Wstecz
                                    </Button>

                                    {step === pages.length - 1 ? (
                                        <Button onClick={submitForm}>
                                            Submit
                                        </Button>
                                    ) : (
                                        <Button onClick={() => this.nextStep()}>
                                            Dalej
                                        </Button>
                                    )}
                                </Buttons>
                            </Wrapper>
                        </Container>
                    </Form>
                )}
            </Formik>
        )
    }
}
