
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Username is required ya chump!')
        .min(2, "name must be at least 2 characters"),
    special: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!'),
    size: yup
        .string()
        .oneOf(['s', 'm', 'l', 'xl'], 'Size is required!'),
    
    topping1: yup.boolean(),
    topping2: yup.boolean(),
    topping3: yup.boolean(),
    topping4: yup.boolean()
});

export default formSchema;