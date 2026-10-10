import { ModalComponents } from "@/components/modal";
import { prisma } from "@/lib/prisma";
import "@/app/modalStyle.css"; //CSSの適用方法
import { Fragment } from "react/jsx-runtime";
import "@/app/page.css";
export default async function Home() {
  const posts = await prisma.todo.findMany();

  return (
    <>
      <ModalComponents />
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>タイトル</th>
            <th>完了予定日</th>
            <th>完了日時</th>
            <th><label htmlFor="end-check">完了確認</label></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.scheduledCompletion?.toString()}</td>
              <td>{post.completedAt?.toString()}</td>
              <td><input type="checkbox" name="end-check" id="end-check"/></td>              
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
