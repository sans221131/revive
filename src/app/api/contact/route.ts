import { db } from "@/db/client";
import { contacts } from "@/db/schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, city, university } = body;

    // Validate required fields
    if (!name || !phone || !city || !university) {
      return NextResponse.json(
        { error: "Name, phone, city, and university are required" },
        { status: 400 }
      );
    }

    // Insert into database
    const [newContact] = await db
      .insert(contacts)
      .values({
        name,
        phone,
        email: email || "",
        city,
        university,
      })
      .returning();

    return NextResponse.json(
      { success: true, contact: newContact },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating contact:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry" },
      { status: 500 }
    );
  }
}
