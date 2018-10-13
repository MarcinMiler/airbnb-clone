import * as React from 'react'
import { Form } from 'formik'

import { Wizard } from 'src/Components/Wizard'
import { Stepper } from 'src/Components/Stepper'
import { Button } from 'src/Components/Button'
import { BasicInfoForm } from '../BasicInfoForm'
import { RoomInfoForm } from '../RoomInfoForm'
import { LocationForm } from '../LocationForm'

import { Container, Wrapper, Buttons } from './style'

// tslint:disable-next-line:jsx-key
const pages = [<BasicInfoForm />, <RoomInfoForm />, <LocationForm />]

interface Props {
    isLoading: boolean
    submit: () => void
}

export const CreateListingFormUI: React.SFC<Props> = ({
    submit,
    isLoading
}) => (
    <Form>
        <Wizard>
            {({ nextStep, prevStep, step }) => (
                <>
                    <Stepper currentStep={step + 1} maxSteps={pages.length} />
                    <Container>
                        <Wrapper>
                            {pages[step]}
                            <Buttons>
                                <Button
                                    disabled={step === 0}
                                    onClick={prevStep}
                                >
                                    Wstecz
                                </Button>

                                {step === pages.length - 1 ? (
                                    <Button
                                        onClick={submit}
                                        loading={isLoading}
                                    >
                                        Submit
                                    </Button>
                                ) : (
                                    <Button onClick={nextStep}>Dalej</Button>
                                )}
                            </Buttons>
                        </Wrapper>
                    </Container>
                </>
            )}
        </Wizard>
    </Form>
)
