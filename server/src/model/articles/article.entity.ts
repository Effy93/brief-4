import type { Category } from "../categories/category.entity";
export interface Article {
  id: number;
  notion: string;
  content: string;
  categories?: Category[];
}

export class ArticleEntity implements Article {
  id: number;
  notion: string;
  content: string;
  categories?: Category[] | undefined;
  constructor({ id, notion, content, categories }: Article) {
    this.id = id;
    this.notion = notion;
    this.content = content;
    this.categories = categories;
  }
}
