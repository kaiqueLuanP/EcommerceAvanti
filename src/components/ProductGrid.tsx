"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Lista de produtos simulada
const products = Array(10).fill({
  image: "/camiseta.png",
  title: "Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit",
  price: "R$79,90",
  oldPrice: "R$120,00",
  discount: "20% OFF",
  badge: "NOVO",
  installment: "ou em até 10x de R$ 7,90",
});

export default function ProductGrid() {
  return (
    // Bloco principal do grid de produtos
    <section className="container mx-auto mt-8">
      {/* Título e link "Ver mais" */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Lançamentos</h2>
        <a href="#" className="text-sm text-gray-500 hover:underline">Ver mais</a>
      </div>
      {/* Carrossel de produtos */}
      <div className="relative px-8">
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={16}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }}
        >
          {/* Cada produto é um slide */}
          {products.map((product, idx) => (
            <SwiperSlide key={idx}>
              {/* Card do produto */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col items-center relative shadow-sm">
                {/* Selo "NOVO" */}
                <span className="absolute left-2 top-2 bg-blue-900 text-white text-xs px-2 py-1 rounded">{product.badge}</span>
                {/* Imagem do produto */}
                <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mb-2 cursor-pointer" />
                {/* Título do produto */}
                <h3 className="text-xs font-medium text-center mb-1">{product.title}</h3>
                {/* Preço antigo e desconto */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-gray-400 line-through">{product.oldPrice}</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">{product.discount}</span>
                </div>
                {/* Preço atual */}
                <div className="text-lg font-bold mb-1">{product.price}</div>
                {/* Parcelamento */}
                <div className="text-xs text-gray-500 mb-2">{product.installment}</div>
                {/* Botão comprar */}
                <button className="w-full bg-blue-600 text-white rounded-lg py-2 font-semibold hover:bg-blue-700 transition">Comprar</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Botão anterior do carrossel */}
        <button className="swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 text-2xl font-bold">
          {/* Ícone pode ser adicionado aqui */}
        </button>
        {/* Botão próximo do carrossel */}
        <button className="swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 text-2xl font-bold">
          {/* Ícone pode ser adicionado aqui */}
        </button>
      </div>
    </section>
  );
}