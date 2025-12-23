import { format } from 'date-fns';

export const formatDate = (timestamp: number) => {
  const currentDate = new Date(timestamp);
  return format(currentDate, 'dd/MM/yyyy HH:mm');
};
