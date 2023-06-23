// import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaGlobe, FaHome, FaSearch } from 'react-icons/fa'
import { MdAdd, MdLibraryMusic } from 'react-icons/md'
import { Button } from '../../components'

const styles = {
    background: 'rgb(0, 0, 0, 1)',
    height: '100vh',
    width:'430px'
}

const SideBar = () => {
  return (
    <aside className='text-whit px-2' style={styles}>
        {/* First section with Home and Search Links*/}
        <section className='mt-2 p-4 bg-dark rounded'>
            <NavLink 
                to='/' 
                className='fw-bold text-decoration-none'
            >
                <FaHome className='me-4 mb-2 fs-3'/> Home
            </NavLink>

            <NavLink 
                to='/search' 
                className='d-block fw-bold text-decoration-none mt-2'
            >
                <FaSearch className='me-4 mb-2 fs-3'/> Search
            </NavLink>
        </section>

        {/* Second section with your library, create playlist and browse podcasts. */}
        <section className='mt-2 p-4 pe-2 bg-dark rounded'>
            <div className="d-flex justify-content-between">
                <NavLink 
                    to='library' 
                    className='fw-bold text-decoration-none'
                >
                    <MdLibraryMusic className='me-4 mb-2 fs-2'/> Your Library
                </NavLink>

                <button 
                    title='Create playlist or folder'
                    className='btn btn-transparent'
                >
                    <MdAdd className='fs-3 text-secondary'/>
                </button>
            </div>

            <div className="mt-2 p-3 bg-secondary rounded text-white">
                <p>
                    <span className='fw-bold'>Create your first playlist</span>
                    <br />
                    It&apos;s easy, we&apos;ll help you
                </p>

                <Button content='Create playlist' />
            </div>

            <div className="mt-3 p-3 bg-secondary rounded text-white">
                <p>
                    <span className='fw-bold'>Let&apos;s find some podcasts to follow</span>
                    <br />
                    We&apos;ll keep you updated on new episodes
                </p>

                <Button content='Browse podcasts' />
            </div>

            <div className='lh-lg mt-5 pt-5 '>
                <br />
                Legal &nbsp; Privacy Center &nbsp; Privacy Policy &nbsp; About Ads 
                <br />
                Accessibility <br />
                Cookies

                <button type="button" className='btn bg-transparent text-white mt-3 p-2 px-3 d-block border border-secondary rounded-5'> <FaGlobe className='mb-1'/> English </button>
            </div>
        </section>
    </aside>
  )
}

export default SideBar