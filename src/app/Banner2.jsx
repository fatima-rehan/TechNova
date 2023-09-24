'use client'
import Marquee from 'react-fast-marquee';

const Banner2 = () => {
  return (
    <div>
        <div className="h-[4rem] text-[1.5rem] bg-[#FFF0EB] flex items-center text-[#FF906C]">
            <Marquee direction={"right"}>
                <p className="tracking-[4px] sm:tracking-[7px] whitespace-nowrap sm:text-[2rem]">
                    CREATE TOKEN&nbsp;&nbsp;MINT TOKEN&nbsp;&nbsp;CHECK BALANCE&nbsp;
                    PAUSE TOKEN&nbsp;&nbsp;RESUME TOKEN&nbsp;&nbsp;
                </p>
            </Marquee>
        </div>
    </div>
  )
}

export default Banner2