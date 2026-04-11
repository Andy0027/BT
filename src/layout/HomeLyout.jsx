import React, { useLayoutEffect } from 'react'
import MegaMenu from '../components/MegaMenu'
import Footer from '../components/Footer'
import { Outlet,useLocation  } from 'react-router-dom'

function HomeLyout() {
  const location = useLocation();

    // scroll to top of page after a page transition.
    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
    }, [location.pathname]);
  return (
    <main>
        <MegaMenu/>
        <Outlet/>
        <Footer/>
    </main>
  )
}

export default HomeLyout