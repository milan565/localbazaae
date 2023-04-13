import * as yup from 'yup';

let loginValidation=yup.object().shape({
    email:yup.string()
    .email('please enter valid email')
    .required('please enter email id'),

    password:yup.string()
    .required('please enter password')
})

export {loginValidation}