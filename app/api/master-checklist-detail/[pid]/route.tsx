import { PrismaClient as PrismaClientOne } from "@/prisma-client/db-one";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClientOne();

// GET Request: Fetch Product by ID
export async function GET(
    request: NextRequest,
    { params }: { params: { pid: string } }
   ) {
    try {
      const { pid } = params;
   
   
      // Validate the ID
      if (!pid) {
        return NextResponse.json(
          { status: true, message: "Invalid ID" },
          { status: 400 }
        );
      }
   
   
      const show = await prisma.master_checklist_details.findUnique({
        where: { id: pid },
        select: {
          id: true,
          name: true,
          short_desc: true,
          required_image: true,
          checklist_header_id: true,
          users_master_checklist_details_created_byTousers: {
            select: { name: true },
          },
          users_master_checklist_details_updated_byTousers: {
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
   
// PUT Request: Update Product by ID
export async function PUT(
    request: NextRequest,
    { params }: { params: { pid: string } }
   ) {
    const { pid } = params;
   
   
    // Validate the ID
    if (!pid) {
      return NextResponse.json(
        { status: true, message: "Invalid ID" },
        { status: 400 }
      );
    }
   
   
    try {
      const { checklist_header_id, name, short_desc, required_image, updated_by } =
        await request.json();
   
   
      // Validate that updated_by exist in users table
      const updatedUser = await prisma.users.findUnique({
        where: { id: updated_by },
      });
   
   
      if (!updatedUser) {
        return NextResponse.json(
          { status: false, message: "Invalid created_by" },
          { status: 400 }
        );
      }
   
   
      const updated = await prisma.master_checklist_details.update({
        where: { id: pid },
        data: {
          name,
          short_desc,
          required_image,
          checklist_header_id,          
          updated_by: updated_by,
          updated_at: new Date(),
        },
      });
   
      return NextResponse.json(
        { status: true, message: "Success", datas: updated },
        { status: 200 }
      );
    } catch (error) {
      console.log(error);
   
      return NextResponse.json(
        { status: false, message: "Unknown Error", datas: {} },
        { status: 500 }
      );
    } finally {
      await prisma.$disconnect();
    }
   }

   export async function DELETE(
    request: NextRequest,
    { params }: { params: { pid: string } }
   ) {
    const { pid } = params;
  
    // Validate the ID
    if (!pid) {
      return NextResponse.json(
        { status: false, message: "Invalid ID" },
        { status: 400 }
      );
    }
   
    try {
      await prisma.master_checklist_details.delete({
        where: { id: pid },
      });
   
      return NextResponse.json(
        { status: true, message: "Data was deleted successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.log(error);
   
   
      return NextResponse.json(
        { status: false, message: "Unknown Error", datas: {} },
        { status: 500 }
      );
    } finally {
      await prisma.$disconnect();
    }
   }
   