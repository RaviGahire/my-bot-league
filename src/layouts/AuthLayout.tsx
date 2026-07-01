import mascote from ".././assets/mascote.png";
import bg_1 from ".././assets/bg-1.png";
import bg_2 from ".././assets/bg-2.png";

const LOGO_URL = "https://botleague.in/logo/bot.png";

interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
<div>
  {children}
</div>
  );
}