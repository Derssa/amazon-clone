import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse lg:flex lg:flex-row bg-[#ddd] px-8 py-4 m-auto">
      <Link href="/">
        <a>
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={60}
            objectFit="contain"
            className="cursor-pointer"
          />
        </a>
      </Link>
      <div className="flex items-center justify-center space-x-8 font-semibold text-center text-xs lg:ml-20 my-4">
        <Link href="/policies/privacy_policy">
          <a>Politique de confidentialité</a>
        </Link>
        <Link href="/policies/terms_of_use">
          <a>Conditions d&apos;utilisation</a>
        </Link>
        <Link href="/policies/refund_policy">
          <a>Politique de remboursement</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
