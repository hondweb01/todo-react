import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
      <form action="/send" method="POST">
      <div>タイトル<input type="text" name="title" /></div>
      <div>詳細<textarea name="detail"></textarea> </div>
      <input type="submit" value="送信" />
      </form>     
    </div>

    <div>
<hr/>
<dl className="todo-header">
  <dt>タイトル</dt>
  <dt>内容</dt>
</dl>




    </div>

</>
    
  );
}
