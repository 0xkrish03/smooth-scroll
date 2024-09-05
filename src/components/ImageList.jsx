import Image from 'next/image'
import React from 'react'
import Parrallax from './Parrallax'

const ImageList = () => {
  return (
    <>
        <Image src={"https://picsum.photos/600/400?random=1"} alt='smooth scroll' width={600} height={400} className='p-4 '/>
        <Parrallax speed={1.5} className={"self-end overflow-hidden"}>

            <Image src={"https://picsum.photos/600/400?random=2"} alt='smooth scroll' width={600} height={400} className='p-4 '/>
        </Parrallax>
        <Parrallax speed={2} className={"self-start overflow-auto"}>
            
        <Image src={"https://picsum.photos/600/400?random=3"} alt='smooth scroll' width={600} height={400} className='p-4 '/>
        </Parrallax>
        <Parrallax className={"self-end"} speed={3}>

        <Image src={"https://picsum.photos/600/400?random=4"} alt='smooth scroll' width={600} height={400} className='p-4 '/>
        </Parrallax>
        <Image src={"https://picsum.photos/600/400?random=5"} alt='smooth scroll' width={600} height={400} className='p-4 '/>
        <Image src={"https://picsum.photos/600/400?random=6"} alt='smooth scroll' width={600} height={400} className='p-4 '/>
        <Image src={"https://picsum.photos/600/400?random=7"} alt='smooth scroll' width={600} height={400} className='p-4 '/>
        <Image src={"https://picsum.photos/600/400?random=8"} alt='smooth scroll' width={600} height={400} className='p-4 '/>
        <Image src={"https://picsum.photos/600/400?random=9"} alt='smooth scroll' width={600} height={400} className='p-4 '/>
        <Image src={"https://picsum.photos/600/400?random=10"} alt='smooth scroll' width={600} height={400} className='p-4 '/>
    </>
  )
}

export default ImageList