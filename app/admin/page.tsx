import { isValidAdminKey } from "@/lib/admin/auth";
import AdminClient from "./AdminClient";
import AdminLogin from "./AdminLogin";

/**
 * Secret gate: /admin?key=SECRET. Missing or wrong key → the key form.
 * The secret is never passed to the client — AdminClient reads the key the
 * user typed from the URL, falling back to this tab's session copy.
 */
export default async function AdminPage({ searchParams }: PageProps<"/admin">) {
  const params = await searchParams;
  const key = params.key;

  // No key at all → ask for one rather than bouncing to "/", which read as
  // the admin panel being broken rather than locked.
  if (typeof key !== "string" || key === "") return <AdminLogin reason="missing" />;
  if (!isValidAdminKey(key)) return <AdminLogin reason="invalid" />;

  // Filters + tab (never the key) so the first render already matches the URL.
  const initialParams: Record<string, string> = {};
  for (const [k, v] of Object.entries(params)) {
    if (k !== "key" && typeof v === "string") initialParams[k] = v;
  }
  return <AdminClient initialParams={initialParams} />;
}