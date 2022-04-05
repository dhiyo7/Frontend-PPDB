import React from 'react'
import Widget from '../widget'
import Alamat from './alamat'
import AlamatMap from './alamat-map'
import AsalSekolah from './asal-sekolah'
import DataProfile from './data-profile'


const index = () => {
    return (
        <div>
            <Widget>

                <h1 className='text-center bg-blue-300 text-lg px-3 py-2 my-4 text-gray-600'>Data Calon Peserta Didik</h1>
                <DataProfile />
                <h1 className='text-center bg-blue-300 text-lg px-3 py-2 my-4  text-gray-600'>Data Alamat Dari Map</h1>

                <AlamatMap />
                <h1 className='text-center bg-blue-300 text-lg px-3 py-2 my-4  text-gray-600'>Data Alamat Asal</h1>
                <Alamat />

                <h1 className='text-center bg-blue-300 text-lg px-3 py-2 my-4  text-gray-600'>Data Asal Sekolah</h1>
                <AsalSekolah />
                <button
                    type="submit"
                    class="text-white block mt-4  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Daftar
                </button>
            </Widget>

        </div>
    )
}

export default index