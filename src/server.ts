import "@/utils/error-capture";

import { consumeLastCapturedError } from "@/utils/error-capture";
import { renderErrorPage } from "@/utils/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// Client disconnects (navigating away / reloading mid-request) surface as
// "Error: aborted" with code ECONNRESET. Not an app bug — never render an error page.
function isClientAbort(error: unknown): boolean {
  const seen = new Set<unknown>();
  let cur: any = error;
  while (cur && typeof cur === "object" && !seen.has(cur)) {
    seen.add(cur);
    if (cur.code === "ECONNRESET" || cur.code === "ERR_STREAM_PREMATURE_CLOSE") return true;
    if (cur.name === "AbortError") return true;
    if (typeof cur.message === "string" && /\baborted\b/i.test(cur.message)) return true;
    cur = cur.cause;
  }
  return false;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  const captured = consumeLastCapturedError();
  if (isClientAbort(captured) || /\baborted\b/i.test(body)) {
    return new Response(null, { status: 499 });
  }

  console.error(captured ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}


export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/index" || url.pathname === "/index/") {
        url.pathname = "/";
        return Response.redirect(url.toString(), 302);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
