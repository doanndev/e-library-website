import Image from 'next/image'
import images from '@/configs/images'


export default function Information() {
  return (
    <div className="section  w-full  relative  xl:flex  lg:flex  bg-[#F4F6FD]  md: flex justify-center">
      <div className="section_left  xl:w-[65%]  h-[auto]  mb-[20px]  lg:w-[55%]  md:w-[100%]  sm:w-[100%]  w-[100%]">
          <div className="content_section_left xl:mt-[130px]  xl:pt-0  w-full h-auto xl:pl-[10.15%]  lg:pt-0  lg:mt-[86px]  lg:pl-[10.15%]  md:pt-[65px]  md:pl-[8.15%]  sm:pt-[65px]  sm:pl-[8.15%]  pt-[65px]  pl-[8.15%]  pr-[8.15%]">
            <p className='font-semibold  text-[20px]  xl:pl-[12px]  xl:pt-[12px]  text-[rgba(0,0,0,0.4)]  lg:pl-[12px]  lg:pt-[12px]  md:pl-[12px]  md:pt-[12px]  sm:pl-[12px]  sm:pt-[12px]  pl-[12px]  pt-[12px]'>Anywhere and Everywhere. </p>
            <h1 className="xl:pl-[6px]  xl:mt-[1px]  xl:text-[58.23px]  leading-[68.24px]  text-[#5352ED]  font-semibold  whitespace-pre-wrap  lg:pl-[6px]  lg:mt-[6px]  md:pl-[6px]  md:mt-[1px]  md:text-[50.23px]  sm:pl-[6px]  sm:mt-[1px]  sm:text-[50.23px]  pl-[6px]  mt-[1px]  text-[50.23px]">Welcome To TEE’S  LIBRARY</h1>
            <h4 className='xl:pl-[12px] xl:mt-[18px]  tracking-[0%]  font-semibold    text-[21.84px]  text-[#000000B2]  leading-[25.59px]  lg:pl-[12px] lg:mt-[20px]  md:pl-[12px] md:mt-[18px]  sm:pl-[12px] sm:mt-[18px]  pl-[12px] mt-[18px]'>Track your Reading and Build your Library.</h4>
            <h4 className='xl:pl-[12px] xl:mt-[18px]  tracking-[0%]  font-semibold    text-[21.84px]  text-[#000000B2]  leading-[25.59px]  lg:pl-[12px] lg:mt-[18px]  md:pl-[12px] md:mt-[18px]  sm:pl-[12px] sm:mt-[18px]  pl-[12px] mt-[18px]'>Discover your next Favourite Book. </h4>
            <h4 className='xl:pl-[12px] xl:mt-[18px]  tracking-[0%]  font-semibold    text-[21.84px]  text-[#000000B2]  leading-[25.59px]  lg:pl-[12px] lg:mt-[18px]  md:pl-[12px] md:mt-[18px]  sm:pl-[12px] sm:mt-[18px]  pl-[12px] mt-[18px]'>Browse from the Largest Collections of Ebooks.</h4>
            <h4 className='xl:pl-[12px] xl:mt-[18px]  tracking-[0%]  font-semibold    text-[21.84px]  text-[#000000B2]  leading-[25.59px]  lg:pl-[12px] lg:mt-[18px]  md:pl-[12px] md:mt-[18px]  sm:pl-[12px] sm:mt-[18px]  pl-[12px] mt-[18px]'>Read stories from anywhere at anytime.</h4>
          </div>
          <div className='xl:w-0  xl:h-0  lg:w-0  lg:h-0  md:w-[100%]  md:h-[600px]  md:flex justify-center  sm:w-[100%]  sm:h-[600px]  w-[100%]  h-auto'>
            <Image src={images.Illustration} alt={''} className='xl:hidden  xl:w-[906px]  xl:min-w-[750px]  lg:hidden  lg:min-w-0  lg:w-[680px]  md:hidden  md:w-[610px]  sm:hidden  sm:w-[610px]  w-[610px]'/>
          </div>
          <div className="box_section_left  w-full h-auto  flex  xl:pl-[8.6%]  lg:pl-[8.6%]">
            <div className="buttom_section_left  xl:w-[60%]  lg:w-[100%]  md:w-[100%]  sm:w-[100%]  w-[100%]">
              <div className='w-full  h-auto  lg:w-[80%]  flex justify-center'>
                <button className="xl:ml-[22px]  xl:p-[17px]  xl:mt-[93px]  w-[73%]  h-[39%]  rounded-[10px]  text-white  bg-[#FF7F56]  border-none  hover:bg-blue-700  lg:ml-0  lg:mt-[80px]  lg:p-[17px]  md:mt-[0px] md:p-[17px]  md:max-w-[600px]  sm:mt-[20px] sm:p-[17px]  sm:max-w-[600px]  mt-[20px] p-[17px]  max-w-[600px]">
                  <p className='font-semibold  text-[25.48px]  leading-[29.85px]'>Get Started For Free</p>
                </button>
              </div>
              <div className='xl:pl-[6.9%]  xl:pt-[145.5px]  lg:pt-[75px]  lg:pl-[3.9%]  md:pt-[50px]  md:w-[100%]  md:pl-[80px]  sm:pt-[50px]  sm:w-[100%]  sm:pl-[80px]  pt-[50px]  w-[100%]  pl-[80px]  pr-[80px]'>
                <h2 className='font-semibold  text-[24px] leading-[28.13px]  text-[#5352ED]'>Contact us:</h2>
                <h2 className='font-semibold  text-[24px] leading-[28.13px]  xl:mt-[15px]  text-[#00000080]  lg:mt-[15px]  md:mt-[15px]  sm:mt-[15px]  mt-[15px]'>Address: columbia Sc</h2>
                <h2 className='font-semibold  text-[24px] leading-[28.13px]  xl:mt-[15px]  text-[#00000080]  xl:pl-[7px]  lg:mt-[15px]  lg:pl-[7px]  md:mt-[15px]  md:pl-[7px]  sm:mt-[15px]  sm:pl-[7px]  mt-[15px]  pl-[7px]'>Email: Tee’s Library@gmail.com</h2>
                <div className="xl:pt-[25px]  box_icon  w-full  h-auto  flex  lg:pt-[25px]  md:pt-[25px]  sm:pt-[25px]  pt-[25px]">
                  <Image src={images.logos_facebook} alt={''} className='w-[33px]  h-[36px]  xl:mr-[6%]  xl:mt-[11.1px]  lg:mr-[6%]  lg:mt-[11.1px]  md:mr-[6%]  md:mt-[11.1px]  sm:mr-[6%]  sm:mt-[11.1px]  mr-[6%]  mt-[11.1px]'/>
                  <Image src={images.logos_twitter} alt={''} className='w-[32px]  h-[32px]  xl:mr-[7%]  xl:mt-[13px]  lg:mr-[7%]  lg:mt-[13px]  md:mr-[7%]  md:mt-[13px]  sm:mr-[7%]  sm:mt-[13px]  mr-[7%]  mt-[13px]'/>
                  <Image src={images.icon_park_email_block} alt={''} className='w-[48px]  h-[48px]  xl:mr-[5.83%]  xl:mt-[5px]  lg:mr-[5.83%]  lg:mt-[5px]  md:mr-[5.83%]  md:mt-[5px]  sm:mr-[5.83%]  sm:mt-[5px]  mr-[5.83%]  mt-[5px]'/>
                  <Image src={images.Group} alt={''} className='w-[40px]  h-[40px]  xl:mr-[5%]  xl:mt-[9px]  lg:mr-[5%]  lg:mt-[9px]  md:mr-[5%]  md:mt-[9px]  sm:mr-[5%]  sm:mt-[9px]  mr-[5%]  mt-[9px]'/>
                </div>
              </div>
            </div>
            <div className="box  xl:w-[40%]  h-auto  lg:w-auto  md:w-auto  sm:w-auto  w-auto"></div>
          </div>
      </div>
      <div className="section_Right  xl:w-[35%]  xl:h-[auto]  lg:w-[45%]  lg:h-auto  md:w-[0%]  sm:w-[0%]  w-[0%]"></div>
      <div className='absolute  hidden  xl:block  xl:w-auto xl:h-auto  xl:right-0  xl:left-[41%]  xl:top-[96px]  lg:block  lg:left-[43%]  lg:w-auto  lg:h-auto  lg:right-0  lg:top-[180px]  md:block  md:right-[12%]  md:top-[355px]  md:w-auto  md:h-auto  sm:block  sm:top-[420px]  sm:w-auto  sm:h-auto  top-[420px]  w-auto  h-auto'>
        <Image src={images.Illustration} alt={''} className='xl:w-[906px]  xl:min-w-[750px]  lg:min-w-0  lg:w-[680px]  md:w-[610px]  sm:w-[610px]  w-[610px]'/>
      </div>
    </div>
  );
}
