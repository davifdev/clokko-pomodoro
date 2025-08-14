export const secondsToMinutes = (seconds: number) => {
  const minutesFormated = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsFormated = String(Math.floor(seconds % 60)).padStart(2, "0");
  return `${minutesFormated}:${secondsFormated}`;
};
