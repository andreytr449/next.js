import { SearchIcon, ArrowRightIcon, CalendarDaysIcon } from "lucide-react";

import { Card, CardContent, Button, Badge } from "@/app/shared/ui";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export type BlogPost = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  date: string;
  category: string;
  author: string;
  authorLink: string;
  blogLink: string;
  categoryLink: string;
};

export const MovieCard = ({
  author,
  authorLink,
  blogLink,
  category,
  categoryLink,
  date,
  description,
  imageAlt,
  imageUrl,
  title,
}: BlogPost) => {
  return (
    <Card className="group h-full overflow-hidden shadow-none transition-all duration-300">
      <CardContent className="space-y-3.5">
        <div className="mb-6 overflow-hidden rounded-lg sm:mb-12">
          <Link href={blogLink}>
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={1920}
              height={1080}
              className="h-59.5 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>
        <div className="flex items-center justify-between gap-1.5">
          <div className="text-muted-foreground flex items-center gap-1.5">
            <CalendarDaysIcon className="size-6" />
            <span>{date}</span>
          </div>
          <a href={categoryLink}>
            <Badge className="bg-primary/10 text-primary rounded-full border-0 text-sm">
              {category}
            </Badge>
          </a>
        </div>
        <h3 className="line-clamp-2 text-lg font-medium md:text-xl">
          <a href={blogLink}>{title}</a>
        </h3>
        <p className="text-muted-foreground line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <a href={authorLink} className="text-sm font-medium">
            {author}
          </a>
          <Button
            size="icon"
            variant="outline"
            className="group-hover:bg-primary! group-hover:text-primary-foreground group-hover:border-primary hover:border-primary hover:bg-primary! hover:text-primary-foreground"
            asChild
          >
            <a href={blogLink}>
              <ArrowRightIcon className="size-4 -rotate-45" />
              <span className="sr-only">Read more: {title}</span>
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
