import React from 'react'

const MyButton = ({onClick}) => {
  return (
    <>
        <div>
            <button
              onClick={onClick}
              className='bg-blue-700 hover:bg-blue-600 transition-all rounded-sm text-sm w-24 h-10 shadow-md text-white'>
                Update
            </button>
        </div>
    </>
  )
}

export default MyButton