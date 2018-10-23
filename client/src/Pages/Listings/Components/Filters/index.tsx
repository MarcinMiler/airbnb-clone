import * as React from 'react'
import { Subscribe } from 'unstated'

import { Filter } from 'src/Containers/Filter'
import { FiltersUI } from './Filters'

interface State {
    show: string
}

export class Filters extends React.PureComponent<{}, State> {
    public readonly state = {
        show: ''
    }

    public toggle = (toShow: string) =>
        this.setState(({ show }) => ({ show: toShow === show ? '' : toShow }))

    public render() {
        const { show } = this.state

        return (
            <Subscribe to={[Filter]}>
                {({ state, updateState }: Filter) => (
                    <FiltersUI
                        toggle={this.toggle}
                        updateState={updateState}
                        show={show}
                        {...state}
                    />
                )}
            </Subscribe>
        )
    }
}
