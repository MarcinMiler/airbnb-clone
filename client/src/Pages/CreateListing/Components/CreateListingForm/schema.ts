import * as yup from 'yup'

export const ListingSchema = yup.object().shape({
    name: yup.string().required(),
    category: yup.string().required(),
    picture: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required(),
    guests: yup.number().required(),
    beds: yup.number().required(),
    amenities: yup.string().required()
})
