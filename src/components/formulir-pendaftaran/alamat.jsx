import React from 'react'
import FormValidation from '../forms/validation'

const alamat = () => {
    let items = [
        {
            label: 'Kabupaten / Kota',
            error: { required: 'Field ini harus di isi' },
            name: 'name',
            type: 'text',
            placeholder: 'Enter you name'
        },
        {
            label: 'Kecamatan',
            error: { required: 'Field ini harus di isi' },
            name: 'name',
            type: 'text',
            placeholder: 'Enter you name'
        },
        {
            label: 'Alamat',
            error: { required: 'Field ini harus di isi' },
            name: 'alamat',
            type: 'text',
            placeholder: 'Masukan alamat lengkap anda'
        },
        {
            label: 'Kelurahan',
            error: { required: 'Field ini harus di isi' },
            name: 'kelurahan',
            type: 'text',
            placeholder: 'Masukan kelurahan anda'
        },
        {
            label: 'Desa',
            error: { required: 'Field ini harus di isi' },
            name: 'desa',
            type: 'text',
            placeholder: 'Masukan desa anda'
        },
        {
            label: 'Dusun',
            error: { required: 'Field ini harus di isi' },
            name: 'dusun',
            type: 'text',
            placeholder: 'Masukan dusun anda'
        }
        ,
        {
            label: 'RT',
            error: { required: 'Field ini harus di isi' },
            name: 'rt',
            type: 'text',
            placeholder: 'Masukan rt anda'
        }
        ,
        {
            label: 'RW',
            error: { required: 'Field ini harus di isi' },
            name: 'rw',
            type: 'text',
            placeholder: 'Masukan rw anda'
        }
        ,
        {
            label: 'Kose POS',
            error: { required: 'Field ini harus di isi' },
            name: 'kodepos',
            type: 'text',
            placeholder: 'Masukan kode pos anda'
        }
    ]
    return (
        <FormValidation items={items} width={4} button={false} />
    )
}

export default alamat