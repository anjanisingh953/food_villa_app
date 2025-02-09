import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'

const Contact = () => {

    const { id } = useParams();
    return (
        <>
            <Header />
            <div>
                This is Contact {id} page welcome to about page
            </div>
        </>

    )
}

export default Contact
