import * as React from 'react'

import { StepperWrapper, StepperFill } from './style'

interface Props {
    currentStep: number
    maxSteps: number
}

export const Stepper: React.SFC<Props> = ({ currentStep, maxSteps }) => (
    <StepperWrapper>
        <StepperFill currentStep={currentStep} maxSteps={maxSteps} />
    </StepperWrapper>
)
