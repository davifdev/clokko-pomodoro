import beepSound from '../assets/audios/beep.mp3';

export const loadBeep = () => {
  const audio = new Audio(beepSound);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play().catch((err) => console.log('Erro ao tocar áudio', err));
  };
};
