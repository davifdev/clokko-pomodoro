import type { ReactNode } from "react";
import { Bounce, ToastContainer } from "react-toastify";

type MesageContainerProps = {
  children: ReactNode;
};
const MesageContainer = ({ children }: MesageContainerProps) => {
  return (
    <>
      {children}
      <ToastContainer
        position="top-left"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default MesageContainer;
