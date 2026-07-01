interface Props {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function AuthCard({ title, subtitle, children }: Props) {
  return (
  
  <div>
    {children}
  </div>
  );
}