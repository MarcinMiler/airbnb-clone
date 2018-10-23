import * as React from 'react'

import { Input } from 'src/Components/Input'
import { Container, FilterItem, PopOver, Relative } from './style'

interface Props {
    show: string
    guests: number
    priceMin: number
    priceMax: number
    toggle: (toShow: string) => void
    updateState: (newState: object) => Promise<void>
}

export const FiltersUI: React.SFC<Props> = ({
    show,
    guests,
    priceMin,
    priceMax,
    toggle,
    updateState
}) => (
    <Container>
        <Relative>
            <FilterItem onClick={() => toggle('date')} focus={show === 'date'}>
                Data
            </FilterItem>
            {show === 'date' && <PopOver />}
        </Relative>

        <Relative>
            <FilterItem
                onClick={() => toggle('guests')}
                focus={guests > 1 || show === 'guests'}
            >
                {guests > 1 && guests} Goscie
            </FilterItem>

            {show === 'guests' && (
                <PopOver>
                    <Input
                        onChange={(value: string) =>
                            updateState({
                                guests: parseInt(value, 10)
                            })
                        }
                        value={guests}
                        label="Ilosc gosci"
                        placeholder="Ilosc gosci"
                        type="number"
                        min={0}
                    />
                </PopOver>
            )}
        </Relative>

        <Relative>
            <FilterItem
                onClick={() => toggle('price')}
                focus={!!priceMin || !!priceMax || show === 'price'}
            >
                {priceMin > 0 && `${priceMin} zł `}
                {priceMin > 0 && priceMax > 0 && '-'}
                {priceMax > 0 && `${priceMax} zł `}
                Cena
            </FilterItem>

            {show === 'price' && (
                <PopOver>
                    <Input
                        onChange={(value: string) =>
                            updateState({
                                priceMin: parseInt(value, 10)
                            })
                        }
                        value={priceMin}
                        label="Minimalna cena"
                        placeholder="Minimalna cena"
                        type="number"
                        min={0}
                    />

                    <Input
                        onChange={(value: string) =>
                            updateState({
                                priceMax: priceMin + parseInt(value, 10)
                            })
                        }
                        value={priceMax}
                        label="Maksymlna cena"
                        placeholder="Maksymlna cena"
                        type="number"
                        min={0}
                    />
                </PopOver>
            )}
        </Relative>
    </Container>
)
