import AuthLayout from "../../../layouts/AuthLayout";
import AuthCard from "../components/AuthCard";
// import OtpSection from "../components/OtpSection";
// import PasswordSection from "../components/PasswordSection";
// import TermsSection from "../components/TermsSection";
// import SocialAuth from "../components/SocialAuth";
import "../../../styles/login.css";
import useRegister from "../hooks/useRegister";
import { SignUp } from "./SignUp";

export default function RegisterPage() {
  const register = useRegister();

  return (
    <AuthLayout>
      <AuthCard
      // title="Create New Account"
      // subtitle="Start your journey in BotLeague"
      >
        <SignUp />
      </AuthCard>
    </AuthLayout>
  );
}
