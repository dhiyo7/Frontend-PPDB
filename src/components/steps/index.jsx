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

const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [openTab, setOpenTab] = useState(1)

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <div className="  w-full tabs">
          <div className="flex  lg:flex-wrap lg:flex-row w-full mb-8">
            {state.map((tab, key) => (
              <div
                key={key}
                className="flex flex-wrap w-1/3 items-center justify-center ">
                <button
                  disabled={tab.disabled}
                  onClick={() => {
                    setOpenTab(tab.index)
                  }}
                  className={`btn btn-default btn-block h-16 px-2 py-2 ${openTab === tab.index
                    ? 'bg-blue-500 text-white'
                    : tab.valid
                      ? 'bg-green-500 text-white'
                      : ''
                    }`}
                  type="button">
                  <div className='items-center justify-center text-sm  flex mx-auto'>
                    <span className={`${tab.active
                      ? 'bg-white text-black'
                      : 'bg-blue-500 text-white'
                      } inline-flex mr-2 items-center justify-center lg:px-3 lg:py-1 px-2 py-1 lg:text-lg text-sm font-bold leading-none  rounded-full`}>{tab.index}</span>
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
          </div>
          <div className={`tab-content ${openTab === 2 ? 'block' : 'hidden'}`}>
            <Settings
              index={2}
              isLast={false}
              dispatch={dispatch}
              setOpenTab={setOpenTab}
            />
          </div>
          <div className={`tab-content ${openTab === 3 ? 'block' : 'hidden'}`}>

            <DataOrangTua
              index={3}
              isLast={false}
              dispatch={dispatch}
              setOpenTab={setOpenTab}
            />
          </div>

          {/*           <div className={`tab-content ${openTab === 4 ? 'block' : 'hidden'}`}>
            <JalurPendaftaran
              index={4}
              isLast={false}
              dispatch={dispatch}
              setOpenTab={setOpenTab}
            />
          </div>

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
