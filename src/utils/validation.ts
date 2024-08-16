import * as Yup from "yup";

export const createDoctorsSchema = Yup.object().shape({
    firstName: Yup.string().required("Please enter the first name"),
    lastName: Yup.string().required("Please enter the last name"),
    password: Yup.string().required("Please enter your password"),
    confirmPassword: Yup.string().required("Please confirm your password"),
    gender: Yup.string().required("Please select your gender"),
    nationality: Yup.string().required("Please select your nationality"),
})