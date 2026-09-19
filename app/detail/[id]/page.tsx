export default async function Detail({params}:{params: Promise<{id:string}>}){
const {id}=await params;
return(
<div>
    <h1>詳細ページ</h1>
    <p>ID: {id}</p>
</div>

)

}
// export default function DetailTodo({params}:{params: Promise<{id:string}>}){
//     return <Detail params={params}/>
// }