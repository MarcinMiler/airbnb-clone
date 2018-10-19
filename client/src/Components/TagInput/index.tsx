import * as React from 'react'
import { FieldProps } from 'formik'

import { Container, Label, StyledInput, Wrapper, Tag, CloseIcon } from './style'

interface State {
    tags: string[]
    inputValue: string
}

interface Props {
    label?: string
}

export class TagInput extends React.Component<FieldProps & Props, State> {
    public readonly state = {
        tags: [],
        inputValue: ''
    }

    private handleChange = (e: any) =>
        this.setState({ inputValue: e.target.value })

    private setField = (value: string[]) => {
        const {
            form: { setFieldValue }
        } = this.props

        setFieldValue('amenities', value, false)
    }

    private onEnterPress = (e: any) => {
        if (e.key === 'Enter' && this.state.inputValue) {
            this.setState(
                ({ tags, inputValue }) => ({
                    tags: [...tags, inputValue],
                    inputValue: ''
                }),
                () => this.setField(this.state.tags)
            )
        }
    }

    private deleteTag = (i: number) => {
        const { tags } = this.state

        const newTags = [...tags.slice(0, i), ...tags.slice(i + 1)]

        this.setState({ tags: newTags })

        this.setField(newTags)
    }

    public render() {
        const { inputValue, tags } = this.state
        const {
            field: { onChange, value, ...field },
            form: {},
            label,
            ...props
        } = this.props

        return (
            <Container>
                {label && <Label>{label}</Label>}

                <Wrapper>
                    {tags &&
                        tags.map((tag, i) => (
                            <Tag key={i}>
                                {tag}{' '}
                                <CloseIcon onClick={() => this.deleteTag(i)} />
                            </Tag>
                        ))}
                    <StyledInput
                        value={inputValue}
                        onChange={this.handleChange}
                        onKeyPress={this.onEnterPress}
                        {...field}
                        {...props}
                    />
                </Wrapper>
            </Container>
        )
    }
}
