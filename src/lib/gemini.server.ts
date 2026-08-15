import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Gemini Server Helper
 * Exclusively for Reforço Brilha as per user request.
 */

export type GeminiChatMsg = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type GeminiOptions = {
  messages: GeminiChatMsg[];
  model?: string; // default gemini-1.5-flash
  temperature?: number;
  max_tokens?: number;
  json?: boolean;
};

export async function callGemini(opts: GeminiOptions) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    throw new Error("GEMINI_API_KEY is not configured in environment variables.");
  }

  const model = opts.model ?? "gemini-2.5-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;

  const body = {
    contents: opts.messages.map(m => ({
      role: m.role === "assistant" ? "model" : m.role,
      parts: [{ text: m.content }]
    })),
    generationConfig: {
      temperature: opts.temperature ?? 0.7,
      maxOutputTokens: opts.max_tokens ?? 2048,
      responseMimeType: opts.json ? "application/json" : "text/plain"
    }
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("[Gemini API Error]", res.status, errorText);
    throw new Error(`Gemini API error: ${res.status}`);
  }

  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  
  if (!text) {
    throw new Error("Empty response from Gemini");
  }

  return text;
}
