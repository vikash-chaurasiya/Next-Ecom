"use client"

import Input from '@/components/common/Input'
import MyButton from '@/components/common/MyButton'
import { handleChange } from '@/utils/commonFunc'
import React from 'react'
import { useState } from 'react'

const Address = () => {

  const [addressData,setAddressData] = useState({
    name : "",
    phone : "",
    pincode : "",
    locality : "",
  })

  const [error,setError] = useState("")


  return (
    <>
      <main className='px-8 py-6'>
        <section>
          <div className='flex gap-4 items-center mb-4'>
            <div>
              <h6 className='font-lg font-semibold mb-4'>Name</h6>
              <Input
              type="text"
              name="name"
              placeholder={"Name"}
              error={error.name}
              value={addressData.name}
              onChange={(e)=>handleChange(e,setAddressData,setError)}
            />
            </div>
            <div>
              <h6 className='font-lg font-semibold mb-4'>Phone number</h6>
              <Input
              type="text"
              name="phone"
              placeholder={"Phone number"}
              maxLength={10}
              error={error.phone}
              value={addressData.phone}
              onChange={(e)=>handleChange(e,setAddressData,setError)}
            />
            </div>
          </div>
          <div className='flex gap-4 items-center mb-4'>
            <div>
              <h6 className='font-lg font-semibold mb-4'>Pincode</h6>
              <Input
              type="text"
              name="pincode"
              placeholder={"Pin code"}
              error={error.pincode}
              value={addressData.pincode}
              maxLength={6}
              onChange={(e)=>handleChange(e,setAddressData,setError)}
            />
            </div>
            <div>
              <h6 className='font-lg font-semibold mb-4'>Locality</h6>
              <Input
              type="text"
              name="locality"
              placeholder={"Locality"}
              error={error.locality}
              value={addressData.locality}
              onChange={(e)=>handleChange(e,setAddressData,setError)}
            />
            </div>
          </div>
        </section>
        <section>
          <MyButton/>
        </section>
      </main>
    </>
  )
}

export default Address