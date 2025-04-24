import React from "react";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { FiMapPin } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <div className="pt-40">
        <Header />
        <div className="Banner flex flex-col md:flex-row items-center justify-center bg-[#e8e9eb] px-4 md:px-0 py-8 md:py-0 w-full">
          {/* Imagem à esquerda */}
          <div className="BannerImage flex-1 flex justify-center">
            <img
              src="/banner.png"
              alt="Banner"
              className="w-full max-w-xs md:max-w-md h-auto object-contain"
            />
          </div>
          {/* Texto à direita */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-0 md:px-8 font-montserrat">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-[0.35em] mb-4 uppercase">
              super sale
            </h1>
            <span className="block text-sm md:text-base text-[#1763e7] tracking-[0.25em] font-semibold mb-2 uppercase">
              ITENS SELECIONADOS COM ATÉ
            </span>
            <span className="block text-3xl md:text-4xl font-bold text-[#1763e7] tracking-wide">
              50%OFF
            </span>
          </div>
        </div>
        <ProductGrid />

        {/* Exemplo para cada bloco/section */}
        <section className="max-w-5xl mx-auto my-12 px-4">
          <div className="flex flex-col md:flex-row bg-[#e8e9eb] rounded-lg overflow-hidden">
            <div className="flex-1 flex justify-center items-center bg-[#d1d1d1] p-6">
              <img
                src="/copo.png"
                alt="Copo Avanti"
                className="w-60 h-60 object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center p-8">
              <h2 className="text-2xl font-bold mb-4">LOREM IPSUM</h2>
              <p className="text-gray-700 mb-4">
                Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.
              </p>
              <p className="text-gray-700">
                Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.
              </p>
            </div>
          </div>
        </section>

        {/* ...próximo bloco... */}
        <section className="max-w-5xl mx-auto my-12 px-4">
          <div className="flex flex-col md:flex-row bg-[#e8e9eb] rounded-lg overflow-hidden">
            {/* Texto à esquerda */}
            <div className="flex-1 flex flex-col justify-center items-center md:items-start p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left">LOREM IPSUM</h2>
              <ul className="space-y-6 w-full">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1763e7] flex items-center justify-center">
                    <FiMapPin className="text-white text-2xl" />
                  </span>
                  <span className="text-gray-700 text-sm">
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1763e7] flex items-center justify-center">
                    <FiMapPin className="text-white text-2xl" />
                  </span>
                  <span className="text-gray-700 text-sm">
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1763e7] flex items-center justify-center">
                    <FiMapPin className="text-white text-2xl" />
                  </span>
                  <span className="text-gray-700 text-sm">
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                  </span>
                </li>
              </ul>
            </div>
            {/* Imagem à direita */}
            <div className="flex-1 flex justify-center items-center bg-[#d1d1d1] p-6">
              <img
                src="/copo2.png"
                alt="Copo Avanti"
                className="w-80 h-80 object-contain"
              />
            </div>
          </div>
        </section>

        {/* ...próximo bloco... */}
        <section className="max-w-5xl mx-auto my-12 px-4">
          <div className="flex flex-col md:flex-row bg-[#e8e9eb] rounded-lg overflow-hidden">
            <div className="flex-1 flex justify-center items-center bg-[#d1d1d1] p-6">
              <img
                src="/copo.png"
                alt="Copo Avanti"
                className="w-60 h-60 object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center p-8">
              <h2 className="text-2xl font-bold mb-4">LOREM IPSUM</h2>
              <p className="text-gray-700 mb-4">
                Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.
              </p>
              <p className="text-gray-700">
                Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.
              </p>
            </div>
          </div>
        </section>

        <ProductGrid />
        <div className="flex-1 flex justify-center items-center ">
              <img
                src="/avanti_banner_final.png"
                alt="Copo Avanti"
                className="w-100% h-100% object-contain"
              />
            </div>
        <Footer />
      </div>
    </>
  );
}
