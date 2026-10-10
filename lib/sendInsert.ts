"use server"
//新規登録の保存処理
import { prisma } from "@/lib/prisma";
export async function sendInsert(formData:FormData){
  const posts=await prisma.todo.create({
    data:{
    title: formData.get("title") as string,
    scheduledCompletion: formData.get("scheduledCompletion") as unknown as Date,
    createdAt: new Date(),
    detail: formData.get("detail") as string
    }
  })
}