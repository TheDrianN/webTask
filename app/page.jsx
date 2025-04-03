import Formlogin from "@/components/login";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUnlock,faLock, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faLock,faUnlock, faUser)
export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <div className="w-full">
      hola
      </div>
      <div className="w-full">
        <Formlogin/>
      </div>
    </main>
  );
}
