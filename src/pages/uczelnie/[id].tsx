import Nav from "~/components/Nav";
import { UniversityCard } from "~/components/UniversityCard";
import { api } from "~/utils/api";
import { useRouter } from "next/router";


export default function Uczelnia() {
  const router = useRouter();
  console.log(router.query);
  const uczelnia = api.example.getOne.useQuery(parseInt(router.query.id as string));
  return (
    <div className="h-screen">
      <Nav />
      <div className="mt-[-5.1rem] flex h-screen">
            <p className="text-7xl">{uczelnia.data?.name}</p>
        </div>
      </div>
  );
}
