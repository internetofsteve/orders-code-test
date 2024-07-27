export type Order = {
  id: number;
  name: string;
  created_at: string;
  shipped_at?: string | null;
  deleted_at?: string | null;
};
