import type { Category } from "./category";
export interface Article {
  id: number;
  notion: string;
  content: string;
  caterories?: Category[];
}

export class ArticleEntity implements Article {
  id: number;
  notion: string;
  content: string;
  caterories?: Category[] | undefined;
  constructor({ id, notion, content, caterories }: Article) {
    this.id = id;
    this.notion = notion;
    this.content = content;
    this.caterories = caterories;
  }
}
