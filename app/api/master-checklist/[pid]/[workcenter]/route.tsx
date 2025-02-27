import { PrismaClient as PrismaClientOne } from "@/prisma-client/db-one";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClientOne();

// GET Request: Fetch Product by ID
export async function GET(
    request: NextRequest,
    { params }: { params: { pid: string , workcenter: string } }
   ) {
    try {
      const { pid, workcenter } = await params;
   
   
      // Validate the ID
      if (!pid) {
        return NextResponse.json(
          { status: true, message: "Invalid ID" },
          { status: 400 }
        );
      }
   
   
      const show = await prisma.master_checklists.findUnique({
        where: { id: pid, workcenter: {contains: workcenter} },
        select: {
          id: true,
          name: true,
          workcenter: true,
          model: true,
          users_master_checklists_created_byTousers: {
            select: { name: true },
          },
          users_master_checklists_updated_byTousers: {
            select: { name: true },
          },
        },
      });
   
   
      if (!show) {
        return NextResponse.json(
          { status: false, message: "Data not found", data: {} },
          { status: 404 }
        );
      }
   
   
      return NextResponse.json(
        { status: true, message: "Success", data: show },
        { status: 200 }
      );
    } catch (error) {
      console.log(error);
   
   
      return NextResponse.json(
        { status: false, message: "Unknown Error", data: {} },
        { status: 500 }
      );
    } finally {
      await prisma.$disconnect();
    }
   }
   