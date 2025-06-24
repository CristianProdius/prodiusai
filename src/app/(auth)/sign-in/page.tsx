import { auth } from "@/lib/auth";
import { SignInView } from "@/modules/auth/ui/views/sign-in-view";
import React from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    redirect("/home");
  }
  return <SignInView />;
};

export default Page;
