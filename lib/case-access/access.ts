import { cookies } from "next/headers";
import { findCompetitor } from "./competitors";
import { ACCESS_COOKIE, readAccessToken } from "./token";

/**
 * Whether the current request comes from a visitor who has registered. The blocklist is checked again here, not
 * only when they registered, so adding a company to it takes effect straight away for anyone who signed in earlier.
 */
export async function getAccess(): Promise<{ domain: string } | null> {
  const store = await cookies();
  const access = readAccessToken(store.get(ACCESS_COOKIE)?.value);
  if (!access) return null;
  if (findCompetitor(access.domain)) return null;
  return access;
}
