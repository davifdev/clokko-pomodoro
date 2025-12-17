import { Trash2Icon } from 'lucide-react';
import Container from '../components/container';
import Button from '../components/button-component';

const History = () => {
  return (
    <main className="p-40">
      <Container>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-sky-500 dark:text-slate-100">
            Histórico
          </h2>
          <Button className="text-sm">
            Limpar Histórico
            <Trash2Icon size={18} />
          </Button>
        </div>
        <div className="mt-6 overflow-hidden rounded-md">
          <table className="w-full text-left">
            <thead className="bg-sky-100 dark:bg-slate-800">
              <tr className="border-b border-white dark:border-slate-600">
                <th className="p-2">Duração</th>
                <th className="p-2">Tarefa</th>
                <th className="p-2">Data</th>
                <th className="p-2">Status</th>
                <th className="p-2">Tipo</th>
              </tr>
            </thead>
            <tbody className="bg-sky-50 dark:bg-slate-700">
              <tr className="border-b border-white dark:border-slate-600">
                <td className="p-2">Estudo</td>
                <td className="p-2">10</td>
                <td className="p-2">15/12/2025 19:55</td>
                <td className="p-2">Completa</td>
                <td className="p-2">Descanso Curto</td>
              </tr>
              <tr className="border-b border-white dark:border-slate-600">
                <td className="p-2">Estudo</td>
                <td className="p-2">10</td>
                <td className="p-2">15/12/2025 19:55</td>
                <td className="p-2">Completa</td>
                <td className="p-2">Descanso Curto</td>
              </tr>
              <tr className="border-b border-white dark:border-slate-600">
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
