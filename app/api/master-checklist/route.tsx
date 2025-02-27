import { PrismaClient as PrismaClientOne } from "@/prisma-client/db-one";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClientOne();

/**
 * CREATE NEW MASTER CHECKLIST
 */
export async function POST(request: NextRequest) {
  try {
    const { name, short_desc, workcenter, model, created_by } = await request.json();
    const updated_by = created_by;

    // Cek apakah user (created_by) ada
    const createdUser = await prisma.users.findUnique({
      where: { id: created_by },
    });

    if (!createdUser) {
      return NextResponse.json(
        { status: false, message: "Invalid created_by" },
        { status: 400 }
      );
    }

    // Insert ke database
    const newChecklist = await prisma.master_checklists.create({
      data: {
        name,
        short_desc,
        workcenter,
        model,
        status: true,
        created_by,
        updated_by,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    return NextResponse.json(
      { status: true, message: "Success", datas: newChecklist },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: false, message: "Internal Server Error", datas: {} },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * GET ALL MASTER CHECKLISTS
 */
export async function GET(request: NextRequest) {
  try {
    console.log(request);

    const masterChecklists = await prisma.master_checklists.findMany({
      select: {
        id: true,
        name: true,
        workcenter: true,
        model: true,
        users_master_checklists_created_byTousers: {
          select: { name: true }, // Created By
        },
        users_master_checklists_updated_byTousers: {
          select: { name: true }, // Updated By
        },
        master_checklist_details:true,
      },
    });

    return NextResponse.json(
      { status: true, message: "Success", datas: masterChecklists },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: false, message: "Internal Server Error", datas: {} },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}