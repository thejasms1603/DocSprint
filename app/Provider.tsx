"use client";
import Loader from "@/components/Loader";
import { getClerkUsers } from "@/lib/actions/user.actions";
import {
  LiveblocksProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LiveblocksProvider 
     authEndpoint='/api/liveblocks-auth'
     resolveUsers={async ({userIds}) => {
      const users = await getClerkUsers({userIds});

      return users;
     }}
     >
      <ClientSideSuspense fallback={<Loader/>}>
        {children}
      </ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;

// publicApiKey={
//         "pk_dev_oQGtD_HbLKh2GZ2qTCbNn6AwgAsG7hwXtMRZA75-Fk_9JqBvlp-XYr2VIhtm0kkm"
//       }
