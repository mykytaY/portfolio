import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

const Contact = () => {

    const [successMessage, setSuccessMessage] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const serviceID = "service_lygukuu";
    const templateID = "template_wgem7dp";
    const publicKey = "VWFo6AIMab3EGpVFN";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            publicKey
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, publicKey) => {

        emailjs.send(serviceID, templateID, variables, publicKey)
            .then(() => {
                setSuccessMessage("Form sent successfully! I'll respond soon.");
            }).catch(err => console.error(`Something went wrong ${err}`));
    };

    return (
        <div id="contact" className='contact'>
            <div className='text-center'>
                <h1>Contact Me</h1>
                <p>I would like to hear from you</p>
                <span className='success-message'>{successMessage}</span>
                <div className='container'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='row'>
                            <div className='col-md-6 col-xs-12'>
                                <div className='text-center'>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Name'
                                        name='name'
                                        {...register('name', {
                                            required: "Please enter your name",
                                            maxLength: {
                                                value: 20,
                                                message: "Please enter name with less than 20 characters",
                                            }
                                        })
                                        }
                                    />
                                    <div className='line'></div>
                                </div>
                                <span className='error-message'>
                                    {errors.name && errors.name.message}
                                </span>
                                <div className='text-center'>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Phone Number'
                                        name='phone'
                                        {...register('phone', {
                                            required: "Please enter your phone number",
                                        })
                                        }
                                    />
                                    <div className='line'></div>
                                </div>
                                <span className='error-message'>
                                    {errors.phone && errors.phone.message}
                                </span>
                                <div className='text-center'>
                                    <input
                                        type="email"
                                        className='form-control'
                                        placeholder='Email'
                                        name='email'
                                        {...register('email', {
                                            required: "Please enter your email",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email"
                                            }
                                        })
                                        }
                                    />
                                    <div className='line'></div>
                                </div>
                                <span className='error-message'>
                                    {errors.email && errors.email.message}
                                </span>
                                <div className='text-center'>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Subject'
                                        name='subject'
                                        {...register('subject', {
                                            required: "Please enter the subject",
                                        })
                                        }
                                    />
                                    <div className='line'></div>
                                </div>
                                <span className='error-message'>
                                    {errors.subject && errors.subject.message}
                                </span>
                            </div>
                            <div className='col-md-6 col-xs-12'>
                                <div className='text-center'>
                                    <textarea
                                        type="text"
                                        className='form-control'
                                        placeholder='Short Description ...'
                                        name='description'
                                        {...register('description', {
                                            required: "Please enter a short description",
                                        })
                                        }
                                    ></textarea>
                                    <div className='line'></div>
                                </div>
                                <span className='error-message'>
                                    {errors.description && errors.description.message}
                                </span>
                            </div>
                        </div>
                        <button className='btn-main contact-btn w-50' type='submit'>Send Request</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;