import Tag from "@/components/ui/Tag";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  preload: true,
});

interface ITagsListProps {
  tags: string[];
}

const TagsList: React.FC<ITagsListProps> = ({ tags }) => {
  return (
    <div className="space-y-3 pt-11 md:pt-20">
      <h3
        className={`${alexandria.className} text-body1 capitalize text-gray-2`}
      >
        tags
      </h3>

      <div className="flex flex-wrap items-center gap-4">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
};

export default TagsList;
