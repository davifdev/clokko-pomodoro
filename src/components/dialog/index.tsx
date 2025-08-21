import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import Button from "../button";
import type { ToastContentProps } from "react-toastify";

const Dialog = ({ closeToast, data }: ToastContentProps<string>) => {
  return (
    <>
      <div className="flex flex-col grow items-center justify-center text-center gap-4">
        <p>{data}</p>

        <div className="flex gap-4">
          <Button
            aria-label="Confirmar ação e fechar"
            title="Confirmar ação e fechar"
            color="blue"
            onClick={() => closeToast(true)}
          >
            <ThumbsUpIcon width={16} height={16} />
          </Button>
          <Button
            aria-label="Cancelar ação e fechar"
            title="Cancelar ação e fechar"
            color="red"
            onClick={() => closeToast(false)}
          >
            <ThumbsDownIcon width={16} height={16} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Dialog;
