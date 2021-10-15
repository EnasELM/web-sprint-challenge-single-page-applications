
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("name must be at least 2 characters")
        .min(2, "name must be at least 2 characters"),
    special: yup
        .string(),
        
    size: yup
        .string()
        .oneOf(['s', 'm', 'l', 'xl'], 'Size is required!'),
    
    topping1: yup.boolean(),
    topping2: yup.boolean(),
    topping3: yup.boolean(),
    topping4: yup.boolean()
});

export default formSchema;