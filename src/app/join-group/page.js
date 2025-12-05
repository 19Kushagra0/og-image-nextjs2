import React from "react";
import JoinGroup from "@/app/join-group/components/JoinGroup";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const groupName = params.groupName || "Your Group";

  return {
    openGraph: {
      images: [
        {
          url: `/api/og/dynamic?groupName=${groupName}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function page({ searchParams }) {
  const params = await searchParams;
  const groupName = params.groupName || "Your Group";
  return (
    <div>
      <JoinGroup groupName={groupName} />
    </div>
  );
}
