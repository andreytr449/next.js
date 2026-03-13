import { Card, CardContent } from "@/app/shared/ui";

export const MovieCardSkeleton = () => {
  return (
    <Card className="h-full overflow-hidden shadow-none">
      <CardContent className="space-y-3.5">
        <div className="mb-6 sm:mb-12">
          <div className="h-59.5 w-full rounded-lg bg-muted animate-pulse" />
        </div>

        <div className="flex items-center justify-between gap-1.5">
          <div className="flex items-center gap-1.5">
            <div className="size-6 rounded bg-muted animate-pulse" />
            <div className="h-4 w-20 rounded bg-muted animate-pulse" />
          </div>
          <div className="h-6 w-16 rounded-full bg-muted animate-pulse" />
        </div>

        <div className="space-y-2">
          <div className="h-5 w-full rounded bg-muted animate-pulse" />
          <div className="h-5 w-3/4 rounded bg-muted animate-pulse" />
        </div>

        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-muted animate-pulse" />
          <div className="h-4 w-5/6 rounded bg-muted animate-pulse" />
        </div>

        <div className="flex items-center justify-between">
          <div className="h-4 w-24 rounded bg-muted animate-pulse" />
          <div className="size-9 rounded-md bg-muted animate-pulse" />
        </div>
      </CardContent>
    </Card>
  );
};
