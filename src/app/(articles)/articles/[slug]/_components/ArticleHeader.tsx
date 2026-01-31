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
    <header className="mt-12 mb-11 space-y-2 md:mt-14 md:mb-12 md:space-y-5">
      <h1 className="text-body2 text-primary md:text-title2">{title}</h1>

      <div className="border-border-articles flex items-center justify-between border-y py-2 md:py-4">
        <div className="flex items-center gap-6">
          <p className="text-text-primary space-x-2">
            <span className="md:text-caption2 text-xs font-bold tracking-wide">
              Date
            </span>
            <span className="md:text-caption2 text-xs font-light">
              {formatPublishedDateHandler(publishedAt)}
            </span>
          </p>
          {readTime && readTime !== 0 && (
            <p className="text-text-primary space-x-2">
              <span className="md:text-caption2 text-xs font-bold tracking-wide">
                Read
              </span>
              <span className="md:text-caption2 text-xs font-light">
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
              className="[&_path]:stroke-text-primary h-6 w-6 cursor-pointer md:h-8 md:w-8"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default ArticleHeader;
