import IconHeart from "@/assets/icons/HeartIcon";
import ShareButton from "@/components/ui/ShareButton";
import { isLikeArticleFeatureReleased } from "@/constants/FeatureFlag.constants";
import formatPublishedDateHandler from "@/utils/date";

interface IArticleHeaderProps {
  title: string;
  publishedAt: string;
  shareLink: string;
  readTime: number;
}

const ArticleHeader: React.FC<IArticleHeaderProps> = ({
  publishedAt,
  shareLink,
  title,
  readTime,
}) => {
  return (
    <header className="mb-11 mt-12 space-y-2 md:mb-12 md:mt-14 md:space-y-5">
      <h1 className="text-body2 text-primary md:text-title2">{title}</h1>

      <div className="flex items-center justify-between border-y border-border-articles py-2 md:py-4">
        <div className="flex items-center gap-6">
          <p className="space-x-2 text-text-primary">
            <span className="text-xs font-bold tracking-wide md:text-caption2">
              Date
            </span>
            <span className="text-xs font-light md:text-caption2">
              {formatPublishedDateHandler(publishedAt)}
            </span>
          </p>
          {readTime && readTime !== 0 && (
            <p className="space-x-2 text-text-primary">
              <span className="text-xs font-bold tracking-wide md:text-caption2">
                Read
              </span>
              <span className="text-xs font-light md:text-caption2">
                {`${readTime} ${readTime > 1 ? "Mins" : "Min"}`}
              </span>
            </p>
          )}
        </div>

        <div className="flex items-center gap-9">
          <ShareButton url={shareLink} />
          {isLikeArticleFeatureReleased && (
            <IconHeart
              viewBox="0 0 32 32"
              className="h-6 w-6 cursor-pointer md:h-8 md:w-8 [&_path]:stroke-text-primary"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default ArticleHeader;
