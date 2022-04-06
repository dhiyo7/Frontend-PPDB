import React, { useState, useReducer } from 'react'
import { initialState, reducer } from './reducer'
import Profile from './profile'
import Settings from './settings'
import DataOrangTua from './dataorangtua'
import Finish from './finish'
import '../../css/components/steps.css'
import JalurPendaftaran from './jalurpendaftaran'
import UploadDokumen from './uploaddokumen'
import Item from '../left-sidebar-1/item'
import AlamatMap from '../formulir-pendaftaran/alamat-map'
import RadioProfile from './radio-profile'

const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [openTab, setOpenTab] = useState(1)
  console.log(openTab, "open tab");

  return (
    <div className="">
      <div className="w-full">
        <div className="  w-full tabs">
          <div className="flex  lg:flex-wrap lg:flex-row w-full mb-8">
            {state.map((tab, key) => (
              <div
                key={key}
                className="flex flex-wrap w-1/4 items-center justify-center ">
                <button
                  disabled={tab.disabled}
                  onClick={() => {
                    setOpenTab(tab.index)
                  }}
                  className={`btn btn-default btn-block h-16 px-2 py-2  ${openTab === tab.index
                    ? 'bg-blue-500 text-white'
                    : tab.valid
                      ? 'bg-green-500 text-white'
                      : ''
                    }`}
                  type="button">
                  <div className='items-center justify-center text-sm  flex mx-auto '>
                    {tab.title}
                  </div>
                </button>
              </div>
            ))}
          </div>
          <div className={`tab-content ${openTab === 1 ? 'block' : 'hidden'}`}>
            <Profile
              index={1}
              isLast={false}
              dispatch={dispatch}
              setOpenTab={setOpenTab}
            />
            <RadioProfile />



            {state.map((tab, key) => {

              if (openTab === tab.index) {
                return (
                  (
                    <div className='flex justify-between'>
                      <button
                        disabled
                        onClick={() => {
                          setOpenTab(tab.index - 1)
                        }}
                        type="submit"
                        className={`${tab.index === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-700'} text-white block mt-4    focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                      >
                        Previous
                      </button>

                      <button

                        onClick={() => {
                          dispatch({ type: 'validate', index: tab.index })
                          dispatch({ type: 'active', index: tab.index })
                          dispatch({ type: 'enable', index: tab.index + 1 })
                          setOpenTab(tab.index + 1)
                        }}
                        type="submit"
                        class="text-white block mt-4   bg-green-500  focus:ring-4  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Next
                      </button>
                    </div>
                  )
                )
              } else {
                null
              }

            })}
          </div>
          <div className={`tab-content ${openTab === 2 ? 'block' : 'hidden'}`}>
            <h1 className='text-center text-lg mb-6 font-semibold'>Alamat Calon Peserta Didik</h1>
            <Settings
              index={2}
              isLast={false}
              dispatch={dispatch}
              setOpenTab={setOpenTab}
            />

            <div className='w-full'>
              <hr className='w-full h-5' />
              <h1 className='text-center text-lg mb-6 font-semibold'>Alamat Calon Peserta Didik dari Map</h1>

              <AlamatMap />
            </div>
            {state.map((tab, key) => {

              if (openTab === tab.index) {
                return (
                  (
                    <div className='flex justify-between'>
                      <button


                        onClick={() => {
                          setOpenTab(tab.index - 1)
                        }}
                        type="submit"
                        className={`${tab.index === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-700'} text-white block mt-4    focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                      >
                        Previous
                      </button>

                      <button

                        onClick={() => {
                          dispatch({ type: 'validate', index: tab.index })
                          dispatch({ type: 'active', index: tab.index })
                          dispatch({ type: 'enable', index: tab.index + 1 })
                          setOpenTab(tab.index + 1)
                        }}
                        type="submit"
                        class="text-white block mt-4   bg-green-500  focus:ring-4  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Next
                      </button>
                    </div>
                  )
                )
              } else {
                null
              }

            })}
          </div>
          <div className={`tab-content ${openTab === 3 ? 'block' : 'hidden'}`}>

            <DataOrangTua
              index={3}
              isLast={false}
              dispatch={dispatch}
              setOpenTab={setOpenTab}
            />
            {state.map((tab, key) => {

              if (openTab === tab.index) {
                return (
                  (
                    <div className='flex justify-between'>
                      <button

                        onClick={() => {
                          setOpenTab(tab.index - 1)
                        }}
                        type="submit"
                        className={`${tab.index === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-700'} text-white block mt-4    focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                      >
                        Previous
                      </button>

                      <button

                        onClick={() => {
                          dispatch({ type: 'validate', index: tab.index })
                          dispatch({ type: 'active', index: tab.index })
                          dispatch({ type: 'enable', index: tab.index + 1 })
                          setOpenTab(tab.index + 1)
                        }}
                        type="submit"
                        class="text-white block mt-4   bg-green-500  focus:ring-4  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Next
                      </button>
                    </div>
                  )
                )
              } else {
                null
              }

            })}
          </div>

          <div className={`tab-content ${openTab === 4 ? 'block' : 'hidden'}`}>
            <Finish
              index={4}
              isLast={false}
              dispatch={dispatch}
              setOpenTab={setOpenTab}
            />
          </div>
          {/*           
          <div className={`tab-content ${openTab === 5 ? 'block' : 'hidden'}`}>
            <UploadDokumen
              index={5}
              isLast={false}
              dispatch={dispatch}
              setOpenTab={setOpenTab}
            />
          </div>

     


          <div className={`tab-content ${openTab === 4 ? 'block' : 'hidden'}`}>
            <Finish
              index={4}
              isLast={true}
              dispatch={dispatch}
              setOpenTab={setOpenTab}
            />
          </div>
               */}

        </div>
      </div>
    </div>
  )
}

export default Index
