import AuthLayout from "../../../layouts/AuthLayout";
import AuthCard from "../components/AuthCard";
import "../../../styles/login.css";
import { SignUp } from "./SignUp";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthCard>
        <SignUp />
      </AuthCard>
    </AuthLayout>
  );
}
