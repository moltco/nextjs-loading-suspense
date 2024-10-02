export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p>Templated Children</p>
      <div>{children}</div>
    </>
  );
}
