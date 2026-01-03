import React from 'react'
import { useParams } from 'react-router-dom'

const AnyCourse = () => {

    const params = useParams()

    return (
        <div>
            <h1 className='text-4xl font-bold text-stone-700 bg-stone-100 px-12 py-6 rounded-2xl shadow-md mx-auto mt-24 w-fit'>
                {params.courseId} Course Page
            </h1>
        </div>
    )
}

export default AnyCourse