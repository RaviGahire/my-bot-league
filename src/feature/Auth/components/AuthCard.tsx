interface Props {
  // title: string;
  // subtitle?: string;
  children: React.ReactNode;
}

export default function AuthCard({ children }: Props) {
  return <div>{children}</div>;
}
