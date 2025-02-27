import { PrismaClient as PrismaClientOne } from "@/prisma-client/db-one";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClientOne();


export async function POST(request: NextRequest) {
 try {
   const { name, email, password } = await request.json();
   const hashedPassword = await bcrypt.hash(password, 10);


   await prisma.users.create({
     data: {
       email,
       password: hashedPassword,
       name,
       role: "admin",
       created_at: new Date(),
       updated_at: new Date(),
     },
   });


   return NextResponse.json(
     { status: true, message: "Success", datas: {} },
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
