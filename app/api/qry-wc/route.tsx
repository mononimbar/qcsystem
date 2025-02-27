import { PrismaClient as PrismaClientTwo } from "@/prisma-client/db-two";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClientTwo();


export async function GET(request: NextRequest) {
 try {
   console.log(request);
  
   const QryWC = await prisma.QrySLWC.findMany();


   return NextResponse.json(
     { status: true, message: "Success", datas: QryWC },
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
