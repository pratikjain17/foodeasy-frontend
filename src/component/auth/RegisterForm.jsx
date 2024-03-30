import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const initialValues = {
    fullName : "",
    email : "",
    password : "",
    role : "ROLE_CUSTOMER"
}

const RegisterForm = () => {
    const handleSubmit = (values) => {
        console.log("Field Values", values)
    }
    const navigate = useNavigate()
  return (
    <div className='bg-[#000001] p-3'>
        <Typography variant='h5' className='text-center'>
            Register
        </Typography>

        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form>
                <Field as={TextField}
                    name = "fullName"
                    label = "Full Name"
                    fullWidth
                    variant = "outlined"
                    margin = "normal"
                />

                <Field as={TextField}
                    name = "email"
                    label = "Email"
                    fullWidth
                    variant = "outlined"
                    margin = "normal"
                />

                <Field as={TextField}
                    name = "password"
                    label = "Password"
                    fullWidth
                    variant = "outlined"
                    margin = "normal"
                    type="password"
                />

                <Field
                    fullWidth
                    margin="normal"
                    as={Select}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Role"
                    name="role"
                >
                    <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                    <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                </Field>

                <Button sx={{mt:2, padding:"1rem"}} fullWidth type='submit' variant='contained'>register</Button>
            </Form>
        </Formik>

        <Typography variant='body2' align='center' sx={{mt:3}}>
            If have an account already?
            <Button size='small' onClick={()=>navigate("/account/login")}>
                login
            </Button>
        </Typography>
    </div>
  )
}

export default RegisterForm
