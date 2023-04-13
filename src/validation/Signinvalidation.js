import * as yup from 'yup';

let singinValidation=yup.object().shape({
    fname:yup.string()
    .min(3,'firs name  must be 3 character')
    .max(15,'first name must be less than 15 character')
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required('please enter your first name'),

    lname:yup.string()
    .min(3,'last name  must be 3 character')
    .max(15,'last name must be less than 15 character')
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .required('please enter your last name'),

    contactNumber:yup.number()
    .positive("A phone number can't start with a -")
    .integer("A phone number can't include a decimal point")
    .min(10,'phone number must have  10 number')
    // .max(11,'phone number have  10 number')
    .required('please enter your contact number'),

    email:yup.string()
    .email('please enter valid email')
    .required('please enter your email id'),
    password:yup.string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol')
    .required('please enter strong password'),

    conformPassword:yup.string() 
    .oneOf([yup.ref('password'), null], 'Must match "password" field value')
    .required('please enter conform password')
})
export{singinValidation};