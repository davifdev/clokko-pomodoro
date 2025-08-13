import { Trash } from "lucide-react";
import Container from "../../components/container";

const History = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 pt-40 w-full">
          <div className="w-full flex items-center justify-between">
            <h2 className="text-3xl mb-4 font-semibold">Histórico</h2>
            <button className="flex items-center gap-1 cursor-pointer">
              <span>Limpar histórico</span>
              <Trash />
            </button>
          </div>

          <div className="w-full">
            <table className="w-full border-2 border-blue-200 rounded-lg overflow-hidden">
              <thead className="bg-blue-100 border-b-2 border-b-blue-200 dark:bg-gray-900 dark:border-b-gray-700">
                <tr>
                  <th className="p-4 text-left hover:bg-blue-200 transition-all duration-[300ms] cursor-pointer dark:hover:bg-gray-950">
                    Tarefa
                  </th>
                  <th className="p-4 text-left hover:bg-blue-200 transition-all duration-[300ms] cursor-pointer dark:hover:bg-gray-950">
                    Duração
                  </th>
                  <th className="p-4 text-left hover:bg-blue-200 transition-all duration-[300ms] cursor-pointer dark:hover:bg-gray-950">
                    Data
                  </th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Tipo</th>
                </tr>
              </thead>

              <tbody className="bg-blue-50 dark:bg-gray-800">
                <tr className="border-b-2 border-b-blue-200 h-12 dark:border-gray-700">
                  <td className="p-4 text-left">Leitura</td>
                  <td className="p-4 text-left">25min</td>
                  <td className="p-4 text-left">20/09/2000</td>
                  <td className="p-4 text-left">Interrompida</td>
                  <td className="p-4 text-left">Foco</td>
                </tr>
                <tr className="border-b-2 border-b-blue-200 h-12 dark:border-gray-700">
                  <td className="p-4 text-left">Leitura</td>
                  <td className="p-4 text-left">25min</td>
                  <td className="p-4 text-left">20/09/2000</td>
                  <td className="p-4 text-left">Interrompida</td>
                  <td className="p-4 text-left">Foco</td>
                </tr>
                <tr className="border-b-2 border-b-blue-200 h-12 dark:border-gray-700">
                  <td className="p-4 text-left">Leitura</td>
                  <td className="p-4 text-left">25min</td>
                  <td className="p-4 text-left">20/09/2000</td>
                  <td className="p-4 text-left">Interrompida</td>
                  <td className="p-4 text-left">Foco</td>
                </tr>
                <tr className="border-b-2 border-b-blue-200 h-12 dark:border-gray-700">
                  <td className="p-4 text-left">Leitura</td>
                  <td className="p-4 text-left">25min</td>
                  <td className="p-4 text-left">20/09/2000</td>
                  <td className="p-4 text-left">Interrompida</td>
                  <td className="p-4 text-left">Foco</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </>
  );
};

export default History;
