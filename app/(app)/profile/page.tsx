import { getUser } from "@/lib/auth";
import { getUserData } from "@/lib/userService";
import { Avatar } from "@/components/app/Avatar";

export default async function ProfilePage() {
  const user = await getUser();
  const result = await getUserData(user.id);
  let userData;
  if (result.success) userData = result.data;

  return (
    <section className="max-w-4xl mx-auto w-full px-8">
      <div className=""></div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <Avatar uri={userData.profileimage} />
        <p className="text-white text-xl font-medium">{userData.username}</p>
      </div>
    </section>
  );
}
