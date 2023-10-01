import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Nav from "~/components/Nav";
import { useTranslation } from "react-i18next"

export default function FaqPage() {
  const { t } = useTranslation()
  console.log(t)
  return (
    <div className="h-full">
    <Nav />
    <Accordion type="single" collapsible className="mt-[-5.1rem] h-screen flex justify-center container flex-col items-center max-w-md text-center">
      <AccordionItem value="item-1" className="w-full">
        <AccordionTrigger>{t("Czy strona internetowa kampus-kompas jest bezpłatna?")}</AccordionTrigger>
        <AccordionContent>
          {t("Tak, nasza strona jest całkowicie bezpłatna. Nie wymagamy żadnych opłat za korzystanie z naszych narzędzi i treści.")}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="w-full">
        <AccordionTrigger>{t("Jakie są korzyści z wyboru właściwego kierunku studiów?")}</AccordionTrigger>
        <AccordionContent>
          {t("Wybór odpowiedniego kierunku studiów może znacząco wpłynąć na Twoją przyszłość zawodową. Pomaga to uniknąć frustracji i niezadowolenia z wyboru zawodu, a także zwiększa szanse na sukces i satysfakcję zawodową.")}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="w-full">
        <AccordionTrigger>{t("Czy mogę znaleźć informacje o uczelniach na tej stronie?")}</AccordionTrigger>
        <AccordionContent>
          {t("Tak, znajdziesz informacje o wielu uczelniach, ich programach studiów, lokalizacjach i wymaganiach rekrutacyjnych.")}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="w-full">
        <AccordionTrigger>{t("Jakie kierunki studiów są najbardziej popularne?")}</AccordionTrigger>
        <AccordionContent>
          {t("Przygotowaliśmy listę najpopularniejszych kierunków studiów, ale warto pamiętać, że popularność może się zmieniać w zależności od regionu i trendów.")}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="w-full">
        <AccordionTrigger>{t("Jak mogę znaleźć odpowiedni kierunek studiów dla siebie?")}</AccordionTrigger>
        <AccordionContent>
          {t("Na naszej stronie oferujemy narzędzia do samooceny, w formie quizu, który pomoże Ci określić, jaka ścieżka może być najlepszy dla Ciebie.")}
        </AccordionContent>
      </AccordionItem>
    </Accordion></div>
  );
};
