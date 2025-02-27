import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export async function GET(request: NextRequest) {
 try {
   console.log(request);
  
   const TblModel = await prisma.tblModel.findMany();


   return NextResponse.json(
     { status: true, message: "Success", datas: TblModel },
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
