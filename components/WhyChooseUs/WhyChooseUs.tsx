import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import DividerWithText from '../DividerWithText/DividerWithText';
import ReplayIcon from '@mui/icons-material/Replay';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


const WhyChooseUs = () => {
  return (

    <section className="py-12 container mx-auto">
      <div className="w-full">
<DividerWithText text={'Varför välja oss'} />
        <div className="lg:text-center sm:[90%] w-full">
          <p className="mt-4 max-w-2xl text-2xl text-white lg:mx-auto">
            Vi strävar efter att erbjuda den bästa shoppingupplevelsen med följande fördelar:
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0">
              <LocalShippingIcon  className=' text-custom-yellow sm:h-14 sm:w-14 h-10 w-10'/>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-black">
                  Snabb leverans
                </h3>
                <p className="mt-2 text-base text-white ">
                  Vi levererar dina produkter så snabbt som möjligt.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex-shrink-0">
              <ReplayIcon  className=' text-custom-yellow sm:h-14 sm:w-14 h-10 w-10'/>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-black">
                  Enkel retur
                </h3>
                <p className="mt-2 text-base text-white">
                  Du kan returnera produkter utan krångel.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex-shrink-0">
              <EmailIcon  className=' text-custom-yellow sm:h-14 sm:w-14 h-10 w-10'/>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-black">
                  Kundservice dygnet runt
                </h3>
                <p className="mt-2 text-base text-white">
                  Vi finns här för att hjälpa dig när som helst.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;