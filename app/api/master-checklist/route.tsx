import { PrismaClient as PrismaClientOne } from "@/prisma-client/db-one";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClientOne();



export async function POST(request: NextRequest) {
  try {
    const { name, short_desc, workcenter, model, created_by } =
      await request.json();

    const updatedBy = created_by;

    // Validate that created_by and updated_by exist in users table
    const createdUser = await prisma.users.findUnique({
      where: { id: created_by },
    });

    if (!createdUser) {
      return NextResponse.json(
        { status: false, message: "Invalid created_by" },
        { status: 400 }
      );
    }

    const inserted = await prisma.master_checklists.create({
      data: {
        name,
        short_desc,
        workcenter,
        model,
        status: true,
        updated_by: updatedBy,
        created_by,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    return NextResponse.json(
      { status: true, message: "Success", datas: inserted },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: false, message: "Unknown Error", datas: {} },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

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
            select: { name: true }, // Equivalent to `cb.name AS created_name`
          },
          users_master_checklists_updated_byTousers: {
            select: { name: true }, // Equivalent to `ub.name AS updated_name`
          },
        },
      });
 
 
    return NextResponse.json(
      { status: true, message: "Success", datas: masterChecklists },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: false, message: "Unknown Error", datas: {} },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
 }
 
 