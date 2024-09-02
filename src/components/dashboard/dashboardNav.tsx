
import { CalendarCheck, Copy, ListPlus, LogOut, MessageCircleQuestion, SquareUserRound, User, UserSearch } from "lucide-react";
import Link from "next/link";
import QueryButton from "../queryButton";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { getCurrentProfile } from "@/lib/session";
import CopyProfileLink from "./copyProfileLink";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardNav() {
	const { profile } = await getCurrentProfile();
	return (
		<nav className="prose size-full p-2 border-r flex flex-col justify-between">
			<div className="flex flex-col justify-start gap-2">
				<QueryButton query="dialog" value="new" className="flex gap-2" variant={"secondary"} >
					<ListPlus className="size-5" />
					Create event
				</QueryButton>

				<Button variant={'ghost'} className="flex gap-2 justify-start" asChild>
					<Link href="events" className="no-underline underline-offset-2">
						<CalendarCheck className="size-5" />
						Events
					</Link>
				</Button>
				<Button variant={'ghost'} className={`flex gap-2 justify-start `} asChild>
					<Link href="availability" className="no-underline underline-offset-2">
						<MessageCircleQuestion className="size-5" />
						Availability
					</Link>
				</Button>
				<Button variant={'ghost'} className="flex gap-2 justify-start" asChild>
					<Link href="friends" className="no-underline underline-offset-2">
						<UserSearch className="size-5" />
						Friends
					</Link>
				</Button>
			</div >


			<div className="flex flex-col justify-center">
				<Button variant={"ghost"} className="flex gap-2 justify-start" asChild>
					<Link href="profile" className="no-underline">
						< User className="size-5" />
						edit profile
					</Link>
				</Button>
				<Button variant={"ghost"} className="flex gap-2 justify-start" asChild>
					<Link href={`/me/${profile?.id}`} className="no-underline">
						< SquareUserRound className="size-5" />
						go to public profile page
					</Link>
				</Button>
				<CopyProfileLink path={`${process.env.BASE_URL}/me/${profile!.id}`} />
				<Separator className="mt-2" />
				<div className="my-2">
					<Button variant={"ghost"} className="flex gap-2 justify-start" asChild>
						<Link href="availability" className="no-underline">
							<LogOut className="size-5" />
							sign out
						</Link>
					</Button>
				</div>
			</div>
		</nav >
	)
}