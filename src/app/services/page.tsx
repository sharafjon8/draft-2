import { generateMetadata } from "@/lib/seo";
import ServicesClient from "./ServicesClient";

export const metadata = generateMetadata({
  title: "Услуги – IT Академия JNR Tech",
  description:
    "IT Академия JNR Tech в Бохтаре – обучение и сертификация IT-специалистов. Индивидуальные и групповые решения проблем",
  url: "https://jnrftech.com/services",
});

export default function ServicesPage() {
  return <ServicesClient />;
}
