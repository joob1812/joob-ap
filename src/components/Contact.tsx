// src/components/Contact.tsx
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import Strings from '../shared/Strings'
import { FaHouseUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { IoIosContact } from "react-icons/io";




type FormInputs = {
    subject: string,
    email: string,
    message: string
}

function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()

    const onSubmit: SubmitHandler<FormInputs> = data => {
        emailjs.send(
            'service_Infini@18.12',
            'template_Infini@18.12',
            {
                subject: data.subject,
                email: data.email,
                message: data.message
            },
            'jfeuIcI1-EVjqg0Dy'

        )
    }

    return (
        <div className='h-full dark:bg-gray-900'>
            <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3">
                <div className="col-span-2 ">
                    <div className="mt-44 mb-6 lg:flex lg:flex-col md:justify-center mx-6">
                        <div className="flex items-center justify-between rounded-r-3xl pl-10 bg-gray-500 dark:bg-gray-600">
                            <h2 className="text-[18px] text-gray-200 md:text-[24px] font-bold ">
                                CONTACTS
                            </h2>
                            <IoIosContact className='mr-4 h-[20px] md:h-[30px] w-[20px] md:w-[30px] text-gray-200' />
                        </div>

                        <div className='flex flex-col justify-center rounded-xl border
                 border-gray-200 dark:border-gray-500
                my-2 p-2 bg-gray-100/50 dark:bg-gray-800'>
                            <ul className="space-y-2 list-disc list-inside md:text-[18px] text-[15px]  text-gray-600 dark:text-gray-300">
                                <div className='flex items-center gap-1'>
                                    <BsFillTelephoneFill className='h-5 w-8' />
                                    <h2>Téléphones</h2>
                                </div>
                                <li className="flex items-center gap-2 ">
                                    <ul className='list-disc list-inside'>
                                        <li>
                                            {Strings.TEL1}
                                        </li>
                                        <li>
                                            {Strings.TEL2}
                                        </li>
                                    </ul>
                                </li>
                                <h1 className='border-b'></h1>
                                <div className='flex items-center gap-1'>
                                    <MdAlternateEmail className='h-5 w-8' />
                                    <h2>Addresses Emails</h2>
                                </div>
                                <li className="flex items-center gap-2 ">
                                    <ul className='list-disc list-inside'>
                                        <li>
                                            <a href={`mailto:${Strings.ADDEMAIL1}`} >{Strings.ADDEMAIL1}</a>
                                        </li>
                                        <li>
                                            <a href={`mailto:${Strings.ADDEMAIL2}`} >{Strings.ADDEMAIL2}</a>
                                        </li>
                                    </ul>
                                </li>
                                <h1 className='border-b'></h1>
                                <div className='flex items-center gap-1'>
                                    <FaHouseUser className='h-5 w-8' />
                                    <h2>Addresses Domiciles</h2>
                                </div>
                                <li className="flex items-center gap-2 ">
                                    
                                    <ul className='list-disc list-inside'>
                                        <li>
                                            {Strings.ADDPHYSIQUE1}
                                        </li>
                                        <li>
                                            {Strings.ADDPHYSIQUE2}
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </div>

                        <div className="md:hidden flex flex-col">
                        <div className="md:hidden flex mt-6 items-center justify-between rounded-r-3xl pl-10 bg-gray-500 dark:bg-gray-600">
                            <h2 className="text-[18px] text-gray-200 md:text-[24px] font-bold ">
                                MESSAGE
                            </h2>
                            <IoIosContact className='mr-4 h-[20px] md:h-[30px] w-[20px] md:w-[30px] text-gray-200' />
                        </div>
                        <form className='mx-[70px]' onSubmit={handleSubmit(onSubmit)}>
                            <label className='block p-1 font-medium text-gray-900 dark:text-gray-300' htmlFor="subject">Objet du mail</label>
                            <input {...register("subject")} className='border mt-1 text-gray-900 dark:text-gray-300 dark:bg-gray-800 border-gray-300 rounded-lg p-1 px-[3px]' type="text" name="subject" id="subject"
                                placeholder="Quel est l'objet du mail ?" />

                            <label className='block mt-2 p-1 font-medium text-gray-900 dark:text-gray-300' htmlFor="email">Email</label>
                            <input {...register("email", { required: true })} className='border mt-1 text-gray-900 dark:text-gray-300 dark:bg-gray-800 border-gray-300 rounded-lg p-1 px-[3px]' type="email" name="email" id="email"
                                placeholder="Votre email" />
                            {errors.email && <p className='text-red-500 p-1'>Email requis !</p>}

                            <label className='block mt-2 p-1 font-medium text-gray-900 dark:text-gray-300' htmlFor="message">Message</label>
                            <textarea {...register("message")} className='border mt-1 text-gray-900 dark:text-gray-300 dark:bg-gray-800 border-gray-300 rounded-lg p-1 px-[12px] resize-none' rows={5} cols={22} name="message" id="message"
                                placeholder="Votre message" />

                            <input type="submit"
                                className='block mt-2 border border-gray-300
                       rounded-xl p-1 hover:bg-gray-300 transition-all
                        cursor-pointer bg-gray-200 shadow-lg font-medium
                        dark:bg-gray-300 dark:hover:bg-gray-400' />
                        </form>
                    </div>
                    </div>


                </div>

                <div className="hidden md:block mt-40 lg:ml-24 md:ml-8">
                    
                    <form className='mt-[10px]' onSubmit={handleSubmit(onSubmit)}>
                        <label className='block mt-4 p-1 font-medium text-gray-900 dark:text-gray-300' htmlFor="subject">Objet du mail</label>
                        <input {...register("subject")} className='border mt-1 text-gray-900 dark:text-gray-300 dark:bg-gray-800 border-gray-300 rounded-lg p-1 px-[3px]' type="text" name="subject" id="subject"
                            placeholder="Quel est l'objet du mail ?" />

                        <label className='block mt-2 p-1 font-medium text-gray-900 dark:text-gray-300' htmlFor="email">Email</label>
                        <input {...register("email", { required: true })} className='border mt-1 text-gray-900 dark:text-gray-300 dark:bg-gray-800 border-gray-300 rounded-lg p-1 px-[3px]' type="email" name="email" id="email"
                            placeholder="Votre email" />
                        {errors.email && <p className='text-red-500 p-1'>Email requis !</p>}

                        <label className='block mt-2 p-1 font-medium text-gray-900 dark:text-gray-300' htmlFor="message">Message</label>
                        <textarea {...register("message")} className='border mt-1 text-gray-900 dark:text-gray-300 dark:bg-gray-800 border-gray-300 rounded-lg p-1 px-[12px] resize-none' rows={5} cols={22} name="message" id="message"
                            placeholder="Votre message" />

                        <input type="submit"
                            className='block mt-2 border border-gray-300
                       rounded-xl p-1 hover:bg-gray-300 transition-all
                        cursor-pointer bg-gray-200 shadow-lg font-medium
                        dark:bg-gray-300 dark:hover:bg-gray-400' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

