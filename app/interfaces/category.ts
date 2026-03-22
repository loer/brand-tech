export interface Category {
  id: string;
  parent_category_id: string;
  level: number;
  name: Record<string, string>;
  categories?: Category[];
}
