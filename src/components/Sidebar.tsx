import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-800 text-white p-4 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">GERA System</h2>
      <h6 className="text-yellow-300 font-semibold text-lg">Gerenciando Atividades</h6>
      <br />
      <nav className="flex flex-col gap-4">
        <Link href="/projetos" className="hover:text-gray-300">Projetos</Link>
        <Link href="/tarefas" className="hover:text-gray-300">Tarefas</Link>
        <Link href="/pessoais" className="hover:text-gray-300">Pessoais</Link>
        <Link href="/calendario" className="hover:text-gray-300">Calendário</Link>
        <Link href="/financas" className="hover:text-gray-300">Finanças</Link>

      </nav>
    </aside>
  );
}
