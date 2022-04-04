import React from 'react'
import SectionTitle from '../components/section-title'
import Widget from '../components/widget'
import Steps from '../components/steps'

const FormPilihSekolah = () => {
  return (
    <>
      <SectionTitle title="Form" subtitle="Pendaftaran" />
      <Widget>
        <Steps />
      </Widget>
    </>
  )
}

export default FormPilihSekolah
