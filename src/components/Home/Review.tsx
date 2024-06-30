import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Review() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="relative w-full select-none"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="border-2 border-slate-800 dark:border-slate-200">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-4">
                    <img
                      src="https://senjaio.b-cdn.net/public/media/JHOxdriHVVlkzPf5RibQbcFz.jpeg?width=63&height=63&format=webp"
                      alt="avatar"
                      className="w-12 rounded-full"
                    />
                    <div>
                      <h3>Kent Nick</h3>
                      <p>Sr. Executive Officer</p>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Pariatur soluta dignissimos quo libero repellendus nesciunt
                    sit culpa doloribus a. Labore nam itaque aliquam alias
                    eveniet distinctio voluptatum perspiciatis, asperiores
                    cupiditate.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Dec 19, 2024
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute -top-10 right-20">
        <CarouselPrevious className="-mx-2 size-12" />
        <CarouselNext className="-mx-2 size-12" />
      </div>
    </Carousel>
  );
}
