import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
  
  interface AlertNotificationProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  export function AlertNotification({ isOpen, onClose }: AlertNotificationProps) {
    return (
      <AlertDialog open={isOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Request berhasil disimpan</AlertDialogTitle>
            <AlertDialogDescription>
                Terima kasih telah mengajukan request.
                Silakan tunggu admin kami menghubungi Anda. terima kasih 👋
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={onClose}>Ok bro</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }