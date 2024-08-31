import ProfileForm from "@/components/dashboard/profile/profileForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { createClient } from "@/lib/supabase/server";
import { getProfile } from "@/lib/utils";
import { User } from "lucide-react";

export default async function Profile() {
	const client = createClient()
	const { profile } = await getProfile(client);

	return <div className="flex flex-col gap-4 p-4 prose min-w-full ">
		<div className="flex flex-col w-fit ">
			<h3 className="m-0">
				Profile
			</h3>
			<p className="m-0">
				Update your profile image, username or bio here
			</p>
		</div>

		<div className="mx-auto mt-10 w-96 ">
			<div className="flex flex-col items-center gap-2">
				<Avatar className="size-32 not-prose">
					<AvatarImage src={profile?.avatar_url ?? undefined} />
					<AvatarFallback className="bg-gray-200">
						<User />
					</AvatarFallback>
				</Avatar>
				<h2 className="mt-2">{profile?.username}</h2>
			</div>
			<ProfileForm profile={profile!} />
		</div>
	</div>
}