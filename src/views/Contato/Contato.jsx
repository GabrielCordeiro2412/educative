import React from 'react'
import './ContatoStyle.scss'
import { useForm } from "react-hook-form"

export default function Contato() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <section className='container-contato'>
            <h1>Ficou alguma dúvida?</h1>
            <h2>Fale conosco!</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='form-contato'>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="test" {...register("example")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </section>
    )
}
