import "./categoryTag.css";
interface CategoryProps {
  title: string;
}
export default function CategoryTag({ title }: CategoryProps) {
  return <div className="category-tag">{title}</div>;
}
