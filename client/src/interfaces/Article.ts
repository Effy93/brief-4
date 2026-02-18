export interface Category {
  id: number;
  label: string;
}

export interface Article {
  id: number;
  notion: string;
  content: string;
  categories: Category[];
}
export type PropsArticle = {
  selectedArticle: Article | null;
  setSelectedArticle: React.Dispatch<React.SetStateAction<Article | null>>;
};
