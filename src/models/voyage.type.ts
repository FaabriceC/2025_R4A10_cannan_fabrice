export type Voyage = {
  destination: string;
  description: string;
  prix: number;
  id: string;
};

export const generateID = (): string =>
  Math.random().toString().replace('.', '');
