import React from 'react'
import { Divider, Card, Button, Modal, Box, Grid, TextField } from '@mui/material'
import CartItem from './CartItem'
import Addresscard from './Addresscard'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { ErrorMessage, Field, Form, Formik } from 'formik';
// import { object, string, number, required } from 'yup';

const items = [1,1]
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.dark',
    outline : 'none',
    boxShadow: 24,
    p: 4,
  };

const initialValues = {
    streetAddress : "",
    state: "",
    pincode : "",
    city : ""
}

// let validationSchema = object({
//     streetAddress:string().required("Street Address is required"),
//     state:string().required("State is required"),
//     pincode:required("Pincode is required"),
//     city:string().required("City is required")
// });

const Cart = () => {
    const createOrderUsingSelectedAddress = () => {

    }
    const handleOpenAddressModal = () => setOpen(true);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleSubmit = (value) => {
        console.log("Form Value", value);
    };
  return (
    <>
      <main className='lg:flex justify-between'>
        <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
            {items.map((item)=><CartItem/>)}
        <Divider></Divider>
        <div className='billDetails px-5 text-sm'>
            <p className='flex font-extralight py-5'>Bill Details</p>
            <div className='space-y-3'>
                <div className='flex justify-between text-gray-400'>
                    <p>Item Total</p>
                    <p>$599</p>
                </div>

                <div className='flex justify-between text-gray-400'>
                    <p>Delivery Fee</p>
                    <p>$20</p>
                </div>

                
                <div className='flex justify-between text-gray-400'>
                    <p>GST and Restaurant Charges</p>
                    <p>$30</p>
                </div>
                <Divider></Divider>

                <div className='flex justify-between text-gray-400'>
                    <p>Total Pay</p>
                    <p>$649</p>
                </div>
            </div>
        </div>
        </section>
        <Divider orientation='vertical' flexItem></Divider>
        <section className='lg:w-[70%] flex flex-col justify-start px-5 pb-10 lg:pb-0'>
            <div>
                <h1 className='text-center font-semibold text-2xl py-10'>Choose delivery Address</h1>
            </div>
            <div className='flex gap-5 flex-wrap justify-center'>
                {
                    [1,1,1,1].map((item)=><Addresscard handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true}/>)
                }
                <Card className='flex gap-5 w-64 p-5'>
                    <AddLocationIcon/>
                    <div className='space-y-3 text-gray-500'>
                        <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
                        <Button variant='contained' fullWidth onClick={handleOpenAddressModal}>Add</Button>
                    </div>
                </Card>
            </div>
        </section>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Formik initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}>
                <Form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Field
                        as = {TextField}
                        name = "streetAddress"
                        label = "Street Address"
                        fullWidth
                        variant = "outlined"
                        error = {!ErrorMessage("streetAddress")}
                        // helperText = {
                        //     <ErrorMessage>
                        //         {(msg)=> <span className='text-red-600'>{msg}</span>}
                        //     </ErrorMessage>
                        // }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                        as = {TextField}
                        name = "city"
                        label = "City"
                        fullWidth
                        variant = "outlined"
                        error = {!ErrorMessage("city")}
                        // helperText = {
                        //     <ErrorMessage>
                        //         {(msg)=> <span className='text-red-600'>{msg}</span>}
                        //     </ErrorMessage>
                        // }
                        />
                    </Grid>
                   
                    <Grid item xs={12}>
                        <Field
                        as = {TextField}
                        name = "pincode"
                        label = "Pin code"
                        fullWidth
                        variant = "outlined"
                        error = {!ErrorMessage("pincode")}
                        // helperText = {
                        //     <ErrorMessage>
                        //         {(msg)=> <span className='text-red-600'>{msg}</span>}
                        //     </ErrorMessage>
                        // }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                        as = {TextField}
                        name = "state"
                        label = "State"
                        fullWidth
                        variant = "outlined"
                        error = {!ErrorMessage("state")}
                        // helperText = {
                        //     <ErrorMessage>
                        //         {(msg)=> <span className='text-red-600'>{msg}</span>}
                        //     </ErrorMessage>
                        // }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' type='submit' color='primary' fullWidth> Deliver Here </Button>
                    </Grid>
                </Grid>
                </Form>
            </Formik>
        </Box>
      </Modal>
    </>
  )
}

export default Cart
