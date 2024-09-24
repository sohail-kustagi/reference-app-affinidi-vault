import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { personalAccessTokenConfigured } from "src/lib/env";

const IotaRedirectFlowCallbackPage = dynamic(
  () => import("../components/iota/RedirectFlowCallbackPage"),
  { ssr: false },
);

export const getServerSideProps = (async () => {
  return { props: { featureAvailable: personalAccessTokenConfigured() } };
}) satisfies GetServerSideProps<{ featureAvailable: boolean }>;

export default function Page() {
  return <IotaRedirectFlowCallbackPage />;
}
