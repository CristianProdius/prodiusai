import { auth } from "@/lib/auth";
import { LandingView } from "@/modules/landing/ui/views/landig-view";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
  // Check if user is authenticated
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // If authenticated, redirect to home page
  if (session) {
    redirect("/home");
  }

  // Otherwise show landing page
  return <LandingView />;
};

export default Page;
