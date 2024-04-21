export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex justify-center flex-shrink-0 ">
      <div className="flex-1 max-w-96 ">
        {children}
      </div>
      
    </div>
  );
}
