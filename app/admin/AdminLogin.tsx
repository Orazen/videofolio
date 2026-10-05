"use client";

import { useState } from "react";
import { storeKey } from "@/lib/admin/client-api";

/**
 * Key entry for /admin.
 *
 * The server used to redirect to "/" whenever the key was missing or wrong,
 * which just looked like a broken panel. Now `/admin` always renders
 * something: this form, or the dashboard once the key checks out.
 *
 * On submit the key is stored for the tab and the URL is rewritten to
 * `/admin?key=…` so the server-side gate in page.tsx can validate it.
 */
export default function AdminLogin({ reason }: { reason: "missing" | "invalid" }) {
  const [value, setValue] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const key = value.trim();
    if (!key) return;
    storeKey(key);
    window.location.replace(`/admin?key=${encodeURIComponent(key)}`);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
      <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">
        Studio — Admin
      </p>

      <form onSubmit={submit} className="flex w-full max-w-sm flex-col gap-3">
        <label
          htmlFor="admin-key"
          className="font-mono text-[11px] uppercase tracking-widest text-muted"
        >
          Admin key
        </label>
        <input
          id="admin-key"
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          autoComplete="off"
          spellCheck={false}
          placeholder="paste your key"
          className="border border-line bg-transparent px-4 py-3 font-mono text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#e7fe55]"
        />
        <button
          type="submit"
          disabled={value.trim() === ""}
          className="bg-[#e7fe55] px-4 py-3 font-mono text-[11px] uppercase tracking-widest text-black transition-opacity disabled:opacity-40"
        >
          Unlock
        </button>
      </form>

      {reason === "invalid" ? (
        <p className="font-mono text-[11px] uppercase tracking-widest text-[#ff5a5a]">
          That key wasn&apos;t accepted
        </p>
      ) : (
        <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">
          The key is set as ADMIN_SECRET_KEY on the deployment
        </p>
      )}
    </div>
  );
}