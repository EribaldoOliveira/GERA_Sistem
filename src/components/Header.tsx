import { FiBell } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Painel de Controle</h1>
      <div className="relative">
        <FiBell className="text-xl text-gray-600" />
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span> {/* Exemplo de número de notificações */}
      </div>
    </header>
  );
}
