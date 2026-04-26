import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarBadge,
} from "@/components/ui/avatar";
import { Camera } from "lucide-react";
import ProfileCard from "@/components/ProfileCard";
import PersonalInfo from "@/components/PersonalInfo";
import ChangePassword from "@/components/ChangePassword";

function Profile() {
  return (
    <div className="grid col-span-1 md:col-end-2 ">
      <header className="mb-5">
        <h1 className="text-3xl font-semibold">Profile Settings</h1>
        <p className="text-gray-400">Manage your account information</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 items-start ">
        <ProfileCard />

        <div className="grid grid-cols-1 gap-4">
          <PersonalInfo />
          <ChangePassword />
        </div>
      </div>
    </div>
  );
}

export default Profile;
