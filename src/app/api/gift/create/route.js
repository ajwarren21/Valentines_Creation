// import { NextResponse } from "next/server";
// import { prisma } from "@/../lib/prisma";
// import { randomUUID } from "crypto";

// export async function POST(req) {
//   const body = await req.json();

//   const gift = await prisma.gift.create({
//     data: {
//       slug: randomUUID().slice(0, 8),
//       senderName: body.senderName,
//       recipientName: body.recipientName,
//       questionText: body.questionText,
//       theme: body.theme,
//       giftType: body.giftType,
//       giftConfig: body.giftConfig,
//     },
//   });

//   return NextResponse.json({ slug: gift.slug });
// }


// app/api/gift/create/route.js
import { NextResponse } from "next/server";
import { prisma } from "@/../lib/prisma";
import { randomUUID } from "crypto";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received body:", body); 

    // Validate required fields
    if (!body.senderName || !body.recipientName || !body.questionText) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const gift = await prisma.gift.create({
      data: {
        slug: randomUUID().slice(0, 8),
        senderName: body.senderName,
        recipientName: body.recipientName,
        questionText: body.questionText,
        // customMessage: body.customMessage || null,
        
        // Customization
        theme: body.theme || "classic",
        backgroundColor: body.backgroundColor || "#FFF5F7",
        accentColor: body.accentColor || "#FF69B4",
        backgroundImage: body.backgroundImage || null,
        giftWrapping: body.giftWrapping || "heart",
        
        // Gift details
        giftType: body.giftType,
        giftConfig: body.giftConfig || {},
      },
    });

    console.log("Created gift:", gift); 
    console.log("Slug:", gift.slug); 

    return NextResponse.json({ slug: gift.slug });
  } catch (error) {
    console.error("Full Error:", error);
    return NextResponse.json(
      { error: "error creating link" },
      { status: 500 }
    );
  }
}