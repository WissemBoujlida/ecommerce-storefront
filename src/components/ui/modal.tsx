import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { X } from "lucide-react";

import { IconButton } from "@/components/ui/icon-button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <Transition show={open}>
      <Dialog as="div" onClose={onClose} className="relative z-10">
        {/* background */}
        <div className="fixed inset-0 bg-black opacity-50" />

        {/* dialog position */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full justify-center items-center text-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-50"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle">
                <div className="bg-white relative w-full flex justify-center items-center px-4 sm:px-6 pb-8 pt-14 sm:pt-8 md:pt-6 lg:pt-8 shadow-2xl">
                  <div className="absolute right-4 top-4">
                    <IconButton onClick={onClose} icon={<X size={15} />} />
                  </div>
                  {children}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
