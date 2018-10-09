import * as React from 'react'

import { Container, Wrapper, White, Gray } from './style'
import { Stepper } from '../../../../Components/Stepper'

interface State {
    step: number
}

export class Form extends React.Component<{}, State> {
    public readonly state = {
        step: 1
    }

    public render() {
        return (
            <>
                <Stepper currentStep={this.state.step} maxSteps={2} />
                <Container>
                    <White />
                    <Gray />
                    <Wrapper>
                        <p
                            onClick={() =>
                                this.setState(({ step }) => ({
                                    step: step + 1
                                }))
                            }
                        >
                            lol
                        </p>
                    </Wrapper>
                </Container>
            </>
        )
    }
}
