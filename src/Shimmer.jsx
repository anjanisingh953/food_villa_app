import React from 'react'

const Shimmer = () => {
    return (
        <div className='restraunt-list'>
            {
                Array(50)
                    .fill("")
                    .map((el, ind) => <div key={ind} className='shimmer-card'>
                        <p className='shimmer_heading'></p>
                        <p className='shimmer_para'></p>
                        <p className='shimmer_para'></p>

                    </div>)
            }
        </div>
    )
}

export default Shimmer
