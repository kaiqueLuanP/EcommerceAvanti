import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-[#f7f7f7] pt-12 pb-4 mt-16">
            {/* Newsletter - bloco de cadastro */}
            <div className="max-w-3xl mx-auto mb-10">
                <div className="bg-[#eaeaea] rounded-lg p-6 flex flex-col gap-4 items-center">
                    <span className="font-semibold text-center">
                        Cadastre-se na nossa <span className="text-blue-600">newsletter</span>
                    </span>
                    <form className="w-full flex flex-col md:flex-row gap-4 items-center justify-center">
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            className="rounded px-4 py-2 w-full md:w-1/3 border border-gray-300 outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            className="rounded px-4 py-2 w-full md:w-1/3 border border-gray-300 outline-none"
                        />
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="privacidade" className="accent-blue-600" />
                            <label htmlFor="privacidade" className="text-xs text-gray-600">
                                Estou de acordo com a <a href="#" className="underline">Política de Privacidade</a>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
                        >
                            Cadastrar
                        </button>
                    </form>
                </div>
            </div>
            {/* Bloco principal do footer */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-4">
                {/* Logo e redes sociais */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <img src="/avanti-logo.png" alt="AVANTI" className="h-8" style={{ filter: "invert(1)" }} />
                    <div className="flex gap-4 text-xl text-blue-600">
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaYoutube /></a>
                        <a href="#"><FaTiktok /></a>
                    </div>
                </div>
                {/* Links institucionais e de atendimento */}
                <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
                    <div>
                        <div className="font-semibold mb-2">Institucional</div>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li><a href="#">Sobre Nós</a></li>
                            <li><a href="#">Nossas Lojas</a></li>
                            <li><a href="#">Privacidade e Segurança</a></li>
                            <li><a href="#">Termos e Condições</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-semibold mb-2">Central de ajuda</div>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li><a href="#">Fale Conosco</a></li>
                            <li><a href="#">Frete e Entrega</a></li>
                            <li><a href="#">Trocas e Devoluções</a></li>
                            <li><a href="#">Formas de Pagamento</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-semibold mb-2">Atendimento</div>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>Telefone: (00) 1234-5678</li>
                            <li>E-mail: exemplo@exemplo.com.br</li>
                            <li>
                                Horário de atendimento:<br />
                                Segunda a Sábado: 07h00 às 20h00<br />
                                Domingos e Feriados: 07h00 às 21h00
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Bloco de ícones de pagamento */}
            <div className="flex gap-4 mt-8 justify-center">
                <FaCcVisa size={25} />
                <FaCcMastercard size={25} />
                <FaCcAmex size={25} />
                <FaCcPaypal size={25} />
                <FaPix size={25} />
            </div>
        </footer>
    );
}