import React from 'react'
import FormValidation from '../forms/validation'

const RadioProfile = () => {
    const items = [

        {
            label: 'Jenis Kelamin',
            error: {
                required: 'Gender is required'
            },
            name: 'gender',
            type: 'radio',
            options: [
                { value: 'laki-laki', label: 'Laki-laki' },
                { value: 'perempuan', label: 'Perempuan' }
            ]
        },
        {
            label: 'Penerima KIP',
            error: {
                required: 'Penerima KIP is required'
            },
            name: 'penerimakip',
            type: 'radio',
            options: [
                { value: 'ya', label: 'Ya' },
                { value: 'tidak', label: 'Tidak' }
            ]
        }, {
            label: 'Jenis Tinggal',
            error: {
                required: 'Jenis Tinggal is required'
            },
            name: 'jenisTinggal',
            type: 'radio',
            options: [
                { value: 'bersama orang tua', label: 'Bersama Orang Tua' },
                { value: 'bersama wali', label: 'Bersama Wali' }
            ]
        }
    ]
    return (
        <FormValidation items={items} />
    )
}

export default RadioProfile