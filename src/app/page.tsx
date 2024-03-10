import { getServerSession } from "next-auth";
import PolicyFormPage from "./policyForm/page";
import LoginComponent from "@/Components/LoginComponent/LoginComponent";

export default async function Home() {
  return (
    <main>
      <LoginComponent />
    </main>
  );
}
