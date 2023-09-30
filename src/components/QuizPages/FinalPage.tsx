import { type z } from "zod";
import { type AllTypes } from "~/server/api/routers/example";
import { useFormStore } from "~/state/stateForm";
import { api } from "~/utils/api";

export const FinalPage = () => {
  const hello = api.example.hello.useQuery(
    useFormStore.getState() as z.infer<typeof AllTypes>,
  );
  console.log(hello.data);
  return (
    <div>
      <h1>Final Page</h1>
    </div>
  );
};
