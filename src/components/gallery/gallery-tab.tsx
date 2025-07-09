import Image from "next/image";
import { Tab } from "@headlessui/react";

import { Image as ImageType } from "@/types";
import { cn } from "@/lib/utils";

interface GalleryTabProps {
  image: ImageType;
}

export const GalleryTab = ({ image }: GalleryTabProps) => {
  return (
    <Tab className="relative flex items-center justify-center aspect-square cursor-pointer rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute inset-0 h-full w-full aspect-square overflow-hidden rounded-md">
            <Image
              fill
              src={image.url}
              alt=""
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent",
            )}
          />
        </div>
      )}
    </Tab>
  );
};
