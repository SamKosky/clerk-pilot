import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <div className="flex h-screen w-full items-start justify-center bg-gray-100 pt-10">
    <UserProfile path="/user-profile" routing="path" />
  </div>
);

export default UserProfilePage;
