import { Trash2Icon } from 'lucide-react';
import Container from '../components/container';

const History = () => {
  return (
    <main className="p-40">
      <Container>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-lime-800">Histórico</h2>
          <button className="flex cursor-pointer items-center gap-2 rounded-md bg-lime-600 p-2 text-white transition-all hover:bg-red-500">
            Limpar Histórico
            <Trash2Icon />
          </button>
        </div>
        <div className="mt-6 overflow-hidden rounded-md">
          <table className="w-full text-left">
            <thead className="bg-gray-300">
              <tr className="border-b border-white">
                <th className="p-2">Tarefa</th>
                <th className="p-2">Duração</th>
                <th className="p-2">Data</th>
                <th className="p-2">Status</th>
                <th className="p-2">Tipo</th>
              </tr>
            </thead>
            <tbody className="bg-gray-100">
              <tr className="border-b border-white">
                <td className="p-2">Estudo</td>
                <td className="p-2">10</td>
                <td className="p-2">15/12/2025 19:55</td>
                <td className="p-2">Completa</td>
                <td className="p-2">Descanso Curto</td>
              </tr>
              <tr className="border-b border-white">
                <td className="p-2">Estudo</td>
                <td className="p-2">10</td>
                <td className="p-2">15/12/2025 19:55</td>
                <td className="p-2">Completa</td>
                <td className="p-2">Descanso Curto</td>
              </tr>
              <tr className="border-b border-white">
                <td className="p-2">Estudo</td>
                <td className="p-2">10</td>
                <td className="p-2">15/12/2025 19:55</td>
                <td className="p-2">Completa</td>
                <td className="p-2">Descanso Curto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </main>
  );
};

export default History;
