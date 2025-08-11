import Container from "../../components/container";

const History = () => {
  return (
    <>
      <Container>
        <h2>History</h2>

        <div>
          <table>
            <thead>
              <tr>
                <td>Tarefa</td>
                <td>Duração</td>
                <td>Data</td>
                <td>Status</td>
                <td>Tipo</td>
              </tr>
            </thead>
          </table>
        </div>
      </Container>
    </>
  );
};

export default History;
