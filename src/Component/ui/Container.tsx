import React from "react";

interface IContainer {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, children }: IContainer) {
  return (
    <section className={`${className} w-[90%] mx-auto px-3`}>
      {children}
    </section>
  );
}
