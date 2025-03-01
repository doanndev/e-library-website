import Image from 'next/image'
import images from '@/configs/images'


export default function Information() {
  return (
    <div className="section  w-full  h-[1000px]  relative  flex">
      <div className="section_left  w-[65%]  h-[1000px]">
          <div className="content_section_left mt-[130px]  w-full h-[30%] pl-[95px]">
            <p className='font-semibold  text-[20px]  pl-[12px]  pt-[12px]'>Anywhere and Everywhere. </p>
            <h1 className="pl-[6px]  mt-[1px]  text-[58.23px]  leading-[68.24px]  text-indigo-600  font-semibold  whitespace-pre-wrap">Welcome To TEE’S  LIBRARY</h1>
            <h4 className='pl-[12px]  mt-[18px]  tracking-[0%]  font-semibold    text-[21.84px]  leading-[25.59px]'>Track your Reading and Build your Library.</h4>
            <h4 className='pl-[12px]  mt-[18px]  tracking-[0%]  font-semibold    text-[21.84px]  leading-[25.59px]'>Discover your next Favourite Book. </h4>
            <h4 className='pl-[12px]  mt-[18px]  tracking-[0%]  font-semibold    text-[21.84px]  leading-[25.59px]'>Browse from the Largest Collections of Ebooks.</h4>
            <h4 className='pl-[12px]  mt-[18px]  tracking-[0%]  font-semibold    text-[21.84px]  leading-[25.59px]'>Read stories from anywhere at anytime.</h4>
          </div>
          <div className="box_section_left  w-full h-[57%]  flex  pl-[85px]">
            <div className="buttom_section_left  w-[60%]">
              <div className='w-full  h-[30%]'>
                <button className="ml-[22px]  mt-[77px]  w-[73%]  h-[39%]  rounded-[10px]  text-white  bg-orange-600  hover:bg-blue-700">
                  <p className='font-semibold  text-[25.48px]  leading-[29.85px]'>Get Started For Free</p>
                </button>
              </div>
              <div className='pl-[33px]  pt-[116.5px]'>
                <h2 className='font-medium  text-[24px] leading-[28.13px]  text-[#5352ED]'>Contact us:</h2>
                <h2 className='font-medium  text-[24px] leading-[28.13px]  mt-[15px]'>Address: columbia Sc</h2>
                <h2 className='font-medium  text-[24px] leading-[28.13px]  mt-[15px] pl-[7px]'>Email: Tee’s Library@gmail.com</h2>
                <div className="pt-[25px]  box_icon  w-full  h-auto  flex">
                  <Image src={images.logos_facebook} alt={''} className='w-[7%]  h-[7%]  mr-[6%]  mt-[11px]'/>
                  <Image src={images.logos_twitter} alt={''} className='w-[7%]  h-[7%]  mr-[6.3%]  mt-[13px]'/>
                  <Image src={images.icon_park_email_block} alt={''} className='w-[10.2%]  h-[10.2%]  mr-[5.6%]  mt-[5px]'/>
                  <Image src={images.Group} alt={''} className='w-[8.4%]  h-[8.4%]  mr-[5%]  mt-[9px]'/>
                </div>
              </div>
            </div>
            <div className="box  w-[40%]"></div>
          </div>
      </div>
      <div className="section_Right  w-[35%]  h-[1000px]"></div>
      <div className='absolute  w-[848px] h-[801px]  left-[41%]  top-[98px]'>
        <Image src={images.Illustration} alt={''} className='w-full  h-full'/>
      </div>
    </div>
  );
}
