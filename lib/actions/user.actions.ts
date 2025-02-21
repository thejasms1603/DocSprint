"use server";
import { clerkClient } from "@clerk/nextjs/server";
import { parseStringify } from "../utils";

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
