'use client';
import React, { useState } from "react";
import { FaUser, FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import ResponsiveNavigationMenu, {
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(search);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="w-full bg-blue-600 text-white text-center text-sm py-1">
        Ganhe <span className="bg-blue-950 rounded ">R$10,00</span> de desconto no seu primeiro pedido. Utilize o cupom <span className="font-semibold">DESCONTO10</span>.
      </div>

      <div className="bg-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img src="/avanti-logo.png" alt="Avanti" className="h-8" style={{ filter: "invert(1)" }} />
          </div>
          <form
            onSubmit={handleSearch}
            className="flex-1 mx-8 relative border border-gray-200 rounded-lg"
          >
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Digite aqui o que você procura"
              className="w-full p-2 rounded-lg text-gray-800 outline-none"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              aria-label="Buscar"
            >
              <FaSearch />
            </button>
          </form>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaUser />
              <span>Olá, <br />Nome cliente</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaShoppingCart />
              <span>0</span>
            </div>
            <button
              className="md:hidden ml-4 p-2"
              onClick={() => setSideMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
        {result && (
          <div className="container mx-auto text-center text-sm text-gray-700 mt-2">
            <div>
              Você buscou por: <span className="font-semibold">&quot;{result}&quot;</span>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white shadow-md hidden md:block">
        <div className="container mx-auto">
          <ResponsiveNavigationMenu>
            <NavigationMenuList className="flex space-x-6 p-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="flex items-center gap-2 bg-white text-black font-medium">
                  <FaBars className="text-lg" />
                  Todas as Categorias
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[900px] p-4 bg-white">
                    <div className="flex">
                      <div className="w-1/4 border-r pr-4">
                        <ul className="space-y-2">
                          {[...Array(10)].map((_, i) => (
                            <li key={i}>
                              <NavigationMenuLink
                                href="#"
                                className={`block text-sm px-2 py-1 rounded hover:text-blue-600 hover:bg-gray-100 transition ${i === 0 ? "text-blue-600 font-semibold bg-gray-100" : ""
                                  }`}
                              >
                                Departamento
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex-1 pl-4">
                        <div className="grid grid-cols-3 gap-8">
                          {[1, 2, 3].map((col) => (
                            <div key={col}>
                              <h4 className="font-semibold mb-2 text-blue-600">Categoria</h4>
                              <ul className="space-y-1">
                                {[...Array(8)].map((_, idx) => (
                                  <li key={idx}>
                                    <NavigationMenuLink
                                      href="#"
                                      className="block text-sm text-gray-600 hover:text-blue-600"
                                    >
                                      Categoria
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-black font-medium hover:text-blue-600 hover:bg-gray-100 transition">
                  Departamento
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[700px] p-4 bg-white">
                    <div className="grid grid-cols-3 gap-8">
                      {[1, 2, 3].map((col) => (
                        <div key={col}>
                          <h4 className="font-semibold mb-2 text-blue-600">Categoria</h4>
                          <ul className="space-y-1">
                            {[...Array(8)].map((_, idx) => (
                              <li key={idx}>
                                <NavigationMenuLink
                                  href="#"
                                  className="block text-sm text-gray-600 hover:text-blue-600"
                                >
                                  Categoria
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="text-black font-medium hover:text-blue-600 hover:bg-gray-100 transition"
                >
                  Departamento
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="text-black font-medium hover:text-blue-600 hover:bg-gray-100 transition"
                >
                  Departamento
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="text-black font-medium hover:text-blue-600 hover:bg-gray-100 transition"
                >
                  Departamento
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="text-black font-medium hover:text-blue-600 hover:bg-gray-100 transition"
                >
                  Departamento
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </ResponsiveNavigationMenu>
        </div>
      </div>

      {sideMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="bg-black/40 flex-1" onClick={() => setSideMenuOpen(false)} />
          <div className="bg-white w-64 h-full shadow-lg p-6 animate-slide-in-left flex flex-col">
            <button
              className="mb-6 self-end"
              aria-label="Fechar menu"
              onClick={() => setSideMenuOpen(false)}
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-black font-medium hover:text-blue-600">Todas as Categorias</a>
              <a href="#" className="text-black font-medium hover:text-blue-600">Departamento 1</a>
              <a href="#" className="text-black font-medium hover:text-blue-600">Departamento 2</a>
              <a href="#" className="text-black font-medium hover:text-blue-600">Departamento 3</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}