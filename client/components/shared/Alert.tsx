"use client";
import { forwardRef, LegacyRef } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
const Alert = forwardRef(
  (
    {
      alertBtnRef,
      alertMsg,
      alertDesc,
      OnClick,
    }: {
      alertBtnRef: LegacyRef<HTMLButtonElement> | null;
      alertMsg: string;
      alertDesc: string;
      OnClick: () => void;
    },
    ref
  ) => {
    return (
      <AlertDialog>
        <AlertDialogTrigger ref={alertBtnRef} className="hidden">
          Open
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-[#271538] text-white border-none outline-none">
          <AlertDialogHeader>
            <AlertDialogTitle>{alertMsg}</AlertDialogTitle>
            <AlertDialogDescription className="text-white">
              {alertDesc}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
            <AlertDialogAction
              onClick={OnClick}
              className="bg-white/10 hover:bg-black text-base font-sans"
            >
              Okay
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
);

export default Alert;
