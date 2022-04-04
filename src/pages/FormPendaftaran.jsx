import React from 'react'

import FormulirPendaftaran from '../components/formulir-pendaftaran/index'


const FormPendaftaran = () => {
    return (
        <div className='container px-10 py-25 mx-auto overflow-hidden'>
            <h1 className='text-center text-4xl py-10'>Formulir <span className='text-blue-600'>Pendaftaran PPDB 2022</span> </h1>
            <FormulirPendaftaran />
        </div>
    )
}

export default FormPendaftaran