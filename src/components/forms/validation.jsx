import React from 'react'
import { useForm } from 'react-hook-form'
import Alert from '../alerts'

const FormValidation = ({ items, onSubmit, alerts, width, button, span, step }) => {
  const { handleSubmit, errors, register } = useForm()
  console.log(step, width, "ini alerts");
  const onSubmitFn = data => {
    if (onSubmit) {
      onSubmit(data)
    }
  }
  items = items.map(item => {
    item['ref'] = register(item['error'])
    return item
  })

  return (
    <div className=''>
      <form className=''
        onSubmit={handleSubmit(onSubmitFn)}
      >
        {alerts &&
          items.map((item, i) => {
            if (!errors[item.name]) return null
            let msg = errors[item.name].message
            if (msg.length === 0) msg = `${item.label} is required`
            return (
              <div className="flex flex-col w-full">
                {errors[item.name] && (
                  <div className="mb-2" key={i}>
                    <Alert
                      color="bg-transparent border-red-500 text-red-500"
                      borderLeft
                      raised>
                      {msg}
                    </Alert>
                  </div>
                )}
              </div>
            )
          })}
        <div className='flex flex-col'>
          <div className={` grid xl:grid-cols-4 xl:gap-6 `}>
            {items.map((item, i) => {
              if (item.type === 'checkbox') {
                return (
                  <div className="form-element w-full">
                    {item.label && <div className="form-label">{item.label}</div>}
                    {item.options.map((option, j) => (
                      <label className="flex items-center justify-start space-x-2">
                        <input
                          ref={item.ref}
                          type="checkbox"
                          value={option.value}
                          name={item.name}
                          className={`form-checkbox h-4 w-4 ${errors[item.name] ? 'text-red-500' : ''
                            }`}
                        />
                        <span
                          className={`${errors[item.name] ? 'text-red-500' : ''
                            }`}>
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )
              }
              if (item.type === 'radio') {
                return (
                  <div className="form-element w-full" >
                    {item.label && <div className="form-label">{item.label}</div>}
                    {item.options.map((option, j) => (
                      <label className="flex items-center justify-start space-x-2">
                        <input
                          type="radio"
                          value={option.value}
                          name={item.name}
                          ref={register({ required: true })}
                          className={`form-radio h-4 w-4 ${errors[item.name] ? 'text-red-500' : ''
                            }`}
                        />
                        <span
                          className={`${errors[item.name] ? 'text-red-500' : ''
                            }`}>
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )
              }
              if (item.type === 'select') {
                return (
                  <div className="form-element w-full ">
                    {item.label && <div className="form-label">{item.label}</div>}
                    <select
                      ref={item.ref}
                      name={item.name}
                      className={`bg-gray-400 shadow-sm outline-none border-gray-300 text-gray-900 text-sm rounded-lg -mt-1 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light form-select border  ${errors[item.name] ? 'border border-red-500' : ''
                        }`}>
                      {item.options.map((option, j) => (
                        <option key={j} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {!alerts && errors[item.name] && (
                      <div className="form-error">{errors[item.name].message}</div>
                    )}
                  </div>
                )
              }
              if (item.type === 'textarea') {
                return (
                  <>
                    <div className="form-element w-full">
                      {item.label && <div className="form-label">{item.label}</div>}
                      <textarea
                        ref={item.ref}
                        name={item.name}
                        className={`form-textarea ${errors[item.name] ? 'border border-red-500' : ''
                          }`}
                        rows="3"
                        placeholder={item.placeholder}></textarea>
                      {!alerts && errors[item.name] && (
                        <div className="form-error">
                          {errors[item.name].message}
                        </div>
                      )}
                    </div>
                  </>
                )
              }
              return (
                <>

                  <div className={`form-element ${item.span}`} >
                    {item.label && <label className="block mb-2 text-sm font-medium text-black dark:text-gray-300">{item.label}</label>}
                    <input
                      ref={item.ref}
                      name={item.name}
                      type={item.type}
                      className={`shadow-sm bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${errors[item.name] ? 'border-red-500' : ''}`}
                      placeholder={item.placeholder}
                    />

                    {!alerts && errors[item.name] && (
                      <div className="text-red-700">{errors[item.name].message}</div>
                    )}
                  </div>

                </>
              )
            })}

          </div>
        </div>

        {/*  {button ? (
          <div className='flex justify-between'>
            <button
              disabled
              type="submit"
              className={`${step === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-700'} text-white block mt-4    focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
              Previous
            </button>

            <button

              type="submit"
              class="text-white block mt-4   bg-green-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Next
            </button>
          </div>
        ) : null}

        */}

      </form>
    </div>
  )
}
export default FormValidation
