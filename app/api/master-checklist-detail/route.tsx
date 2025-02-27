import { PrismaClient as PrismaClientOne } from "@/prisma-client/db-one";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClientOne();


  //id                                               String            @id @default(uuid())
  //checklist_header_id                              String
  //name                                             String            @db.VarChar(255)
  //short_desc                                       String?           @db.VarChar(255)
//   required_image                                   String?           @db.VarChar(255)
//   updated_by                                       String
//   created_by                                       String
//   updated_at                                       DateTime?         @db.DateTime
//   created_at                                       DateTime?         @db.DateTime
//   master_checklists                                master_checklists @relation(fields: [checklist_header_id], references: [id], onUpdate: NoAction, map: "FK_master_checklist_details_master_checklists")
//   users_master_checklist_details_updated_byTousers users             @relation("master_checklist_details_updated_byTousers", fields: [updated_by], references: [id], onUpdate: NoAction, map: "FK_master_checklist_details_users")
//   users_master_checklist_details_created_byTousers users             @relation("master_checklist_details_created_byTousers", fields: [created_by], references: [id], onUpdate: NoAction, map: "FK_master_checklist_details_users1")

export async function POST(request: NextRequest) {
  try {
    const { checklist_header_id, name, short_desc, required_image, created_by } =
      await request.json();
    console.log(request);
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

    const inserted = await prisma.master_checklist_details.create({
      data: {
        checklist_header_id,
        name,
        short_desc,
        required_image,        
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
 
 
    const masterChecklistDetails = await prisma.master_checklist_details.findMany({
        select: {
          id: true,
          name: true,
          short_desc: true,          
          required_image: true,
          users_master_checklist_details_created_byTousers: {
            select: { name: true }, // Equivalent to `cb.name AS created_name`
          },
          users_master_checklist_details_updated_byTousers: {
            select: { name: true }, // Equivalent to `ub.name AS updated_name`
          },
        },
      });
 
 
    return NextResponse.json(
      { status: true, message: "Success", datas: masterChecklistDetails },
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
 
 