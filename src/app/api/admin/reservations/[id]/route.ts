import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/session";
import { sendStatusUpdateMail } from "@/lib/mail";
import { Status } from "@/generated/prisma/client";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession();
  if (!session.isAdmin) {
    return NextResponse.json({ error: "認証が必要です" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const { status, sendMail, email, name } = await request.json();

    if (!["CONFIRMED", "CANCELLED"].includes(status)) {
      return NextResponse.json({ error: "無効なステータスです" }, { status: 400 });
    }

    const updated = await prisma.reservation.update({
      where: { id: Number(id) },
      data: { status: status as Status },
    });

    // Send notification mail if requested
    if (sendMail && email && name) {
      try {
        await sendStatusUpdateMail(email, name, status as "CONFIRMED" | "CANCELLED");
      } catch (mailError) {
        console.error("Status mail failed:", mailError);
        // Don't fail the update even if mail fails
      }
    }

    return NextResponse.json({ success: true, reservation: updated });
  } catch (error) {
    console.error("Status update error:", error);
    return NextResponse.json(
      { error: "更新に失敗しました" },
      { status: 500 }
    );
  }
}
