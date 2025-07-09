"use client";

import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Color, Size } from "@/types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { Filter } from "./filter";

interface MobileFiltersProps {
  colors: Color[];
  sizes: Size[];
}

export const MobileFilters = ({ colors, sizes }: MobileFiltersProps) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        onClose={onClose}
        as="div"
        className="relative z-40 lg:hidden"
      >
        {/* background */}
        <div className="fixed inset-0 bg-black opacity-25" />

        {/* dialog position */}
        <div className="fixed inset-0">
          <DialogPanel className="bg-white w-full max-w-xs h-full flex flex-col py-4 pb-6 shadow-xl overflow-y-auto">
            {/* close button */}
            <div className="flex justify-end items-center px-4">
              <IconButton icon={<X />} onClick={onClose} />
            </div>

            {/* render filters*/}
            <div className="p-4">
              <Filter valueKey="sizeId" name="Size" data={sizes} />
              <Filter valueKey="colorId" name="Color" data={colors} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
