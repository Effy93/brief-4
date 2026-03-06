export interface Category {
  id: number;
  label: string;
}

export class CategoryEntity implements Category {
  id: number;
  label: string;
  constructor({ id, label }: Category) {
    this.id = id;
    this.label = label;
  }
}
