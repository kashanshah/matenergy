import { permanentRedirect } from "next/navigation";

// The per-area pages were removed (near-duplicate content). TODO: delete this route.
export default function Page(): never {
  permanentRedirect("/services/");
}
