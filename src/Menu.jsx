    import React from 'react'
    import hicet from './assets/hicet.jpeg'

    const Menu = () => {
    return (
        <div className='text-center'>
        <img className='w-75 pt-2 rounded-pill' src={hicet} alt='hicet'></img><br></br>
        <i class="fa-solid fa-user-group text-white fs-1 pt-5"></i>
        <p>Student Management</p>
        <i class="fa-solid fa-inbox text-white fs-1 pt-5"></i>
        <p>Financial Management</p>
        <i class="fa-solid fa-certificate text-white fs-1 pt-5"></i>
        <p>Quality Control</p>
        <i class="fa-solid fa-table text-white fs-1 pt-5"></i>
        <p>Report Delivery</p>
        <i class="fa-solid fa-file text-white fs-1 pt-5"></i>
        <p>Attendence</p>
        </div>
    )
    }

    export default Menu
