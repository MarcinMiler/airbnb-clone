import * as React from 'react'
import { Subscribe } from 'unstated'

import { Filter } from 'src/Containers/Filter'
import { FormUI } from './Form'

export const Form: React.SFC<{}> = () => (
    <Subscribe to={[Filter]}>
        {({ updateState }: Filter) => <FormUI updateState={updateState} />}
    </Subscribe>
)
