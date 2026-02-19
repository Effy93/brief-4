import "./categoryTag.css";
import type { CategoryProps } from "../../interfaces/CategoryTagsType";
export default function CategoryTag({ title }: CategoryProps) {
  return <div className="category-tag">{title}</div>;
}
