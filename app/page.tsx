import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-col justify-center items-center ">


      <div className="relative h-screen bg-cover bg-center " style={{ backgroundImage: 'url(/startimage.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Ge Din Hjärna ett Tak</h1>
          <p className="text-lg mb-8">Hatten av, Keps på</p>
          <Link href="/shop">

            <button className="bg-custom-yellow hover:bg-yellow-500 active:bg-yellow-300 text-black font-bold py-3 px-6 rounded-lg border-4 border-black shadow-md transform transition-transform duration-300 cursor-pointer">
              Shoppa Kepsar
            </button>
          </Link>
        </div>
      </div>




     


      <hr className="container mx-auto my-8" />

     

      <hr className="container mx-auto my-10" />











  



      


    </main>
  );
}
