import { services } from "@/data/sevices";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id);

  if (!service) notFound();

  return <ServiceDetailClient service={service} />;
}
