import { permanentRedirect } from "next/navigation";

// The blog was removed (its posts were placeholder content). TODO: delete this route.
export default function Page(): never {
  permanentRedirect("/");
}
