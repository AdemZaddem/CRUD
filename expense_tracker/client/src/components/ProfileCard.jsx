import React, { useRef, useState } from "react";
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
import { Button } from "./ui/button";
import { updateAvatar } from "@/services/api";
import { toast } from "sonner";

function ProfileCard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [avatar, setAvatar] = useState(user.avatar);

  function handleCameraClick() {
    fileInputRef.current.click();
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  }

  async function handleAvatar() {
    try {
      const res = await updateAvatar(user.id, selectedFile);
      console.log(res.avatar);

      toast.success("Avatar updated!");
      setSelectedFile(null);
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, avatar: res.avatar }),
      );
      setAvatar(res.avatar);
      setPreview(null);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Picture</CardTitle>
        <CardDescription>Update your avatar</CardDescription>
      </CardHeader>
      <CardContent
        className={"flex justify-center flex-col items-center gap-2"}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
        <div className="relative w-24 h-24">
          <Avatar className="w-24 h-24">
            <AvatarImage src={preview || `http://localhost:3000/${avatar}`} />
            <AvatarFallback className="bg-black text-white text-3xl">
              {user.username?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="absolute bottom-0 right-0 bg-gray-700 rounded-full p-2 cursor-pointer">
            <Camera
              onClick={handleCameraClick}
              size={14}
              className="text-white"
            />
          </div>
        </div>
        <div className="text-center">
          <p>{user.username}</p>
          <p className="text-gray-400">{user.email}</p>
        </div>
      </CardContent>
      {selectedFile && (
        <CardFooter className={"gap-4 flex justify-center"}>
          <Button onClick={handleAvatar}>Confirm</Button>
          <Button
            onClick={() => {
              setSelectedFile(null);
              setPreview(null);
              fileInputRef.current.value = ''
            }}
            variant="outline"
          >
            Cancel
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}

export default ProfileCard;
