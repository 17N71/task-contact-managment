import { useNavigate, useRouter } from "@tanstack/react-router";
import { useDeleteContact } from "../model/useDeleteContact";

export default function DeleteDialogContent() {
  const { mutateAsync, close } = useDeleteContact();
  const router = useRouter();
  const navigate = useNavigate({ from: "/contacts" });
  return (
    <div className="flex gap-10">
      <button
        className="py-2 px-4 text-center flex justify-center items-center font-semibold border border-gray-400/80 rounded-xl text-sm hover:bg-blue-500 hover:text-white transition-colors duration-150 text-blue-500 ease-out"
        onClick={async () => {
          await mutateAsync();
          navigate({ to: "/contacts/" as "/contacts", viewTransition: true });
          router.invalidate({ sync: true });
        }}
      >
        Yes
      </button>
      <button
        className="py-2 px-4 text-center flex justify-center items-center font-semibold border border-gray-400/80 rounded-xl text-sm hover:bg-red-500 hover:text-white transition-colors duration-150 text-red-500 ease-out"
        onClick={close}
      >
        No
      </button>
    </div>
  );
}
