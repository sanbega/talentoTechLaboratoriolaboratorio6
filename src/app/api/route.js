import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");

  if (!filename) {
    return NextResponse.json(
      { error: "Filename is required" },
      { status: 400 }
    );
  }

  const filePath = path.join(process.cwd(), "src", "public", filename);

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    return new Response(fileContent, {
      status: 200,
      headers: {
        "Content-Type": "text/html",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}

export async function POST(request) {
  return GET(request);
}
