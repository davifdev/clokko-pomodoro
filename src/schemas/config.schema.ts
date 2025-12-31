import z from 'zod';

export const configSchema = z.object({
  focus: z.string().min(1, 'Tempo de foco obrigatório'),

  shortResting: z.string().min(1, 'Tempo de descanso curto é obrigatório'),

  longResting: z
    .string()
    .min(1, 'Tempo de descanso longo é obrigatório')
    .max(60, 'Digite um valor entre 1 e 60 para descanso longo'),
});
