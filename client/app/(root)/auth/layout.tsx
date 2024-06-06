import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session: any = await getServerSession(options);
  console.log("sess", session);

  if (session) {
    redirect(`/chat`);
  }

  return <div className="min-h-full w-full">{children}</div>;
};

export default layout;
