import React, { useRef } from 'react'

const BtnToUp = () => {
    const btnToUpRef = useRef()
    window.onscroll = ()=>{
        if(window.scrollY >= 400){
            btnToUpRef.current.style.bottom = '100px'
        }else{
            btnToUpRef.current.style.bottom = '-200px'
        }
    }
  return (
    <>
        {/* btn to up */}
        <button ref={btnToUpRef} onClick={()=>{
                        window.scroll({
                            top: 0,
                            behavior: 'smooth'
                        })
                    }} className='btn-to-up'>
                    <i class="fa-solid fa-chevron-up"></i>
                    </button>
                {/* btn to up */}
    </>
  )
}

export default BtnToUp
