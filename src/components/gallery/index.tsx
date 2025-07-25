"use client";

import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

import { Image as ImageType } from "@/types";
import { GalleryTab } from "./gallery-tab";

interface GalleryProps {
  images: ImageType[];
}

export const Gallery = ({ images }: GalleryProps) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 w-full max-w-2xl lg:max-w-none hidden sm:block">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image}></GalleryTab>
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full">
        {images.map((image) => (
          <TabPanel key={image.id}>
            <div className="aspect-square relative h-full w-full overflow-hidden sm:rounded-lg">
              <Image
                fill
                src={image.url}
                alt="image"
                className="object-cover object-center"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};
