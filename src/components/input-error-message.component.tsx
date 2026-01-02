import type { ReactNode } from 'react';

interface InputErrorMessage {
  children: ReactNode;
}
const InputErrorMessage = ({ children }: InputErrorMessage) => {
  return <p className="mt-1 text-xs text-red-400">{children}</p>;
};

export default InputErrorMessage;
