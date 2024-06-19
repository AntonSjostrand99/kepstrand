import Image from "next/image";
import Link from 'next/link';
import Category from "@/components/Category/Category";
import Carousel from "@/components/Carousel/Carousel";
import Reviews from "@/components/Reviews/Reviews";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import DividerWithText from "@/components/DividerWithText/DividerWithText";







export default function Home() {
  return (
    <main className="flex-col justify-center items-center ">
      <div className="relative h-screen bg-cover bg-center " style={{ backgroundImage: 'url(/startimage.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold mb-4 font-Bungee">Ge Din Hjärna ett Tak</h1>
          <p className="text-lg mb-8 font-Bungee">Hatten av, Keps på</p>
          <Link href="/shop">

            <button className="bg-custom-yellow hover:bg-white text-black font-bold py-3 px-6 rounded-lg border-4 border-black shadow-md transform transition-transform duration-300 cursor-pointer font-Bungee">
              Shoppa Kepsar
            </button>
          </Link>
        </div>
      </div>
      <div className="container mx-auto mt-8 mb-24 ">
        <Category />
      </div>
      <div className="container mx-auto flex-col mt-10 mb-24">
        <DividerWithText text="Bästsäljare" />
        <Carousel />
      </div>
      <div className="container mx-auto mt-10 mb-24 ">
        <DividerWithText text="Inspo" />

        <div className=" flex flex-col lg:flex-row gap-4 ">
          <div className="lg:w-2/4 flex flex-col gap-4">
      
            <div className="relative rounded-lg border-4 border-black shadow-md overflow-hidden max-h-56">
              <img
                className="w-full h-full object-cover"
                src="/man-1845715_640.jpg"
                alt="Small Image 1"
              />
            </div>
            <div className="relative rounded-lg border-4 border-black shadow-md overflow-hidden max-h-56">
              <img
                className="w-full h-full object-cover"
                src="/man-1845715_640.jpg"
                alt="Small Image 2"
              />
            </div>
          </div>
          <div className="lg:w-2/4 flex flex-col gap-4">
       
            <div className="relative rounded-lg border-4 border-black shadow-md overflow-hidden max-h-56">
              <img
                className="w-full h-full object-cover"
                src="/man-1845715_640.jpg"
                alt="Small Image 1"
              />
            </div>
            <div className="relative rounded-lg border-4 border-black shadow-md overflow-hidden max-h-56">
              <img
                className="w-full h-full object-cover"
                src="/man-1845715_640.jpg"
                alt="Small Image 2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 mb-24">
        <Reviews />
      </div>

      <WhyChooseUs/>

    </main>
  );
}
