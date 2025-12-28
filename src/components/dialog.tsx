import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';

import type { ToastContentProps } from 'react-toastify';
import Button from './button-component';

const Dialog = ({ closeToast, data }: ToastContentProps<string>) => {
  return (
    <div className="flex grow flex-col items-center justify-center gap-4 text-center">
      <p>{data}</p>
      <div className="flex gap-4">
        <Button
          aria-label="Confirmar ação e fechar"
          title="Confirmar ação e fechar"
          color="primary"
          size="sm"
          onClick={() => closeToast(true)}
        >
          <ThumbsUpIcon width={16} height={16} />
        </Button>

        <Button
          aria-label="Cancelar ação e fechar"
          title="Cancelar ação e fechar"
          color="secondary"
          size="sm"
          onClick={() => closeToast(false)}
        >
          <ThumbsDownIcon width={16} height={16} />
        </Button>
      </div>
    </div>
  );
};

export default Dialog;
