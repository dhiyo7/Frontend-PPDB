import React from 'react'
import FormValidation from '../forms/validation'

const AsalSekolah = () => {

    let items = [
        {
            label: 'Pendidikan Terakhir',
            error: {
                required: 'is required',
                validate: (value) =>
                    ['SMP / Sederajat', 'SD / Sederajat'].includes(value) ||
                    'is required'
            },
            name: 'pendidikan',
            type: 'select',
            options: [
                { value: null, label: 'Pilih Pendidikan terakhir' },
                { value: 'SMP / Sederajat', label: 'SMP / Sederajat' },
                { value: 'SD / Sederajat', label: 'SD / Sederajat' },

            ]
        },
        {
            label: 'Nama Sekolah Asal',
            error: { required: 'Field ini harus di isi' },
            name: 'name',
            type: 'text',
            placeholder: 'Enter you name',
            span: 'col-span-3'
        },
    ]
    return (
        <FormValidation span={2} width={3} button={false} items={items} />
    )
}

export default AsalSekolah