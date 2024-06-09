import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer";
import { ProfileAvatar } from "./profileAvatar";

import ProfileForm from "./profileForm";

interface DialogProps {
	children?: React.ReactNode;
	dialogProps?: {
		open: boolean;
		onOpenChange: (open: boolean) => void;
	};
}

export function ProfileDialog({ children, dialogProps }: DialogProps) {
	return (
		<Dialog {...dialogProps}>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className="w-11/12 px-4 sm:max-w-md md:px-6">
				<DialogHeader className="flex flex-col items-center space-y-2">
					<ProfileAvatar />
					<DialogDescription>Change your profile picture and username here.</DialogDescription>
				</DialogHeader>
				<ProfileForm />
			</DialogContent>
		</Dialog>
	);
}

interface DrawerProps {
	children: React.ReactNode;
}

export function ProfileDrawer({ children }: DrawerProps) {
	return (
		<Drawer>
			<DrawerTrigger asChild>{children}</DrawerTrigger>
			<DrawerContent className="p-4">
				<DrawerHeader className="flex flex-col items-center space-y-2">
					<ProfileAvatar />
					<DrawerDescription>Change your profile picture and username here.</DrawerDescription>
				</DrawerHeader>
				<ProfileForm />
			</DrawerContent>
		</Drawer>
	);
}
