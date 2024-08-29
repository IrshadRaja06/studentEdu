import React from 'react'

const Content = () => {
  return (
    <div className='container  w-50 '>
            <p className='text-center'>Menu</p>
            <div className="row mt-5 text-center">
                <div className="col-4">
                <i class="fa-solid fa-user fs-1 text-primary text-center " />
                <p className=''>Register Enrollment</p>
                </div>
            <div className="col-4">
            <i class="fa-solid fa-book fs-1 text-primary text-center " />
            <p>Remedial Enrollment</p>
            </div>
            <div className="col-4">
            <i class="fa-solid fa-people-group fs-1 text-primary text-center" />
            <p>Club Management</p>
            </div>
            </div>
            <div className="row mt-5 text-center">
                <div className="col-4">
                <i class="fa-solid fa-book-open-reader fs-1 text-primary text-center " />
                <p className=''><span className='ms-2'>Classroom</span>
                    <br></br> Management
                </p>
                </div>
            <div className="col-4">
            <i class="fa-solid fa-envelope fs-1 text-primary text-center " />
            <p className=''>SMS/EMAIL</p>
            </div>
            <div className="col-4">
            <i class="fa-solid fa-book fs-1 text-primary text-center" />
            <p className=''>Attendence</p>
            </div>
            </div>
            <div className="row mt-5 text-center">
                <div className="col-4"></div>
                <div className="col-4">
                <i class="fa-regular fa-hospital fs-1 text-primary text-center" />
                <p className=''> Clinic</p>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
  )
}

export default Content


