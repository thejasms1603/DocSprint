"use server";
import { clerkClient} from "@clerk/nextjs/server";
import { parseStringify } from "../utils";
import { liveblocks } from "../liveblocks";

export const getClerkUsers = async ({ userIds }: { userIds: string[] }) => {
  try {
    const users = await (await clerkClient()).users.getUserList({
      emailAddress: userIds, // Correct key (plural form)
    });

    const formattedUsers = users.data?.map((user) => ({
      id: user.id,
      name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
      email: user.emailAddresses[0]?.emailAddress ?? "N/A",
      avatar: user.imageUrl,
    }));

    const sortedUsers = userIds.map((email) =>
      formattedUsers.find((user) => user.email === email)
    );

    return parseStringify(sortedUsers);
  } catch (error) {
    console.error(`Error fetching users: ${error}`);
    throw new Error("Failed to fetch Clerk users.");
  }
};

export const getDocumentUsers = async ({text,currentUser, roomId} : {roomId: string, currentUser: string, text:string}) => {
  try{
    const room = await liveblocks.getRoom(roomId);
    const users = Object.keys(room.usersAccesses).filter((email) => email !== currentUser)
    if(text.length)
    {
      const lowerCaseText = text.toLowerCase();
      const filteredUsers = users.filter((email: string) => email.toLowerCase().includes(lowerCaseText))
      return parseStringify(filteredUsers)
    }
    return parseStringify(users);
  } catch(error)
  {
    console.log("Error fetching document users:", error)
  }
}