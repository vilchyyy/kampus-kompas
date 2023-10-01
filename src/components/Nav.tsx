import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Nav() {
  const [value, setValue] = useState("");
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const changeLanguage = async (lang: "pl" | "en" | "ukr") => {
    await i18n.changeLanguage(lang);
  };
  return (
    <>
      <div className="z-50 mx-auto flex h-20 w-full items-center justify-between gap-6 px-4 hover:cursor-pointer sm:max-w-screen-2xl">
        <div className="mx-4 flex items-center justify-center gap-6">
          <Image
            onClick={(e) => {
              e.preventDefault();
              router.push("/").catch((err) => console.log(err));
            }}
            src="compass.svg"
            className="-mr-3 h-12 w-12 min-w-max z-50 "
            width={50}
            height={50}
            alt="logo"
          />
          <p
            onClick={(e) => {
              e.preventDefault();
              router.push("/").catch((err) => console.log(err));
            }}
            className="mr-4 hidden font-bold z-50 sm:block"
          >
            KampusKompas
          </p>
          <Link href="/FAQ">
            <p>FAQ</p>
          </Link>
          <p className="min-w-min">
            {t("About")}&nbsp;{t("Us")}
          </p>
        </div>

        <div className="flex w-full max-w-sm items-center gap-2 space-x-2">
          {lang !== "pl" && (
            <Image
              src="/pl.png"
              className="h-5 w-8 scale-125 border-2 border-zinc-400"
              width={50}
              height={50}
              alt="logo"
              onClick={() => {
                changeLanguage("pl").catch((err) => console.log(err));
              }}
            />
          )}
          {lang !== "en" && (
            <Image
              src="/gb.png"
              className="h-5 w-8 scale-125 border-2 border-zinc-400"
              width={50}
              height={50}
              alt="logo"
              onClick={() => {
                changeLanguage("en").catch((err) => console.log(err));
              }}
            />
          )}
          {lang !== "ukr" && (
            <Image
              src="/ua.png"
              className="h-5 w-8 scale-125 border-2 border-zinc-400"
              width={50}
              height={50}
              alt="logo"
              onClick={() => {
                changeLanguage("ukr").catch((err) => console.log(err));
              }}
            />
          )}
          <Input
          className="z-50"
            type="text"
            value={value}
            placeholder={t("wyszukaj uczelnie...")}
            onChange={(event) => {
              setValue(event.currentTarget.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                router
                  .push(`/uczelnie?search=${event.currentTarget.value}`)
                  .catch((err) => console.log(err));
              }
            }}
          />
          <Button className="w-10 p-2" type="submit">
            <SearchIcon
              className="h-10 w-10 z-50"
              onClick={() => {
                router
                  .push(`/uczelnie?search=${value}`)
                  .catch((err) => console.log(err));
              }}
            />
          </Button>
        </div>
      </div>
      <Separator />
    </>
  );
}
