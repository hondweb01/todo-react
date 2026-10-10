"use client"
import { Dialog } from "radix-ui";
import { sendInsert } from "@/lib/sendInsert";


export const ModalComponents=()=> {

//formdata作成処理はReactがやってくれる
  return (

    <>
<Dialog.Root>
		<Dialog.Trigger asChild>
			<button className="Button violet"> 新規登録</button>
		</Dialog.Trigger>
		<Dialog.Portal>
			<Dialog.Overlay className="DialogOverlay" />
			<Dialog.Content className="DialogContent background">
        <div className="background">
				<Dialog.Title className="DialogTitle">新規登録モーダル</Dialog.Title>
        <form id="insert" action={sendInsert}>
          <input type="hidden"  />
				<fieldset className="Fieldset">
					<label className="Label" htmlFor="title">
						タイトル：
					</label>
					<input type="text" name="title" id="title" />
				</fieldset>
				<fieldset className="Fieldset">
					<label className="Label" htmlFor="scheduledCompletion">
						完了予定日時：
					</label>
					<input type="date" name="date" id="scheduledCompletion" />
				</fieldset>
				<fieldset className="Fieldset">
					<label className="Label" htmlFor="detail">
						詳細：
					</label>
					<textarea name="detail" id="detail"></textarea>
				</fieldset>
        <input type="submit" id="insertBtn" value="送信" />
        </form>
				<div
					style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
				>
					<Dialog.Close asChild>
						<button className="Button green">閉じる</button>
					</Dialog.Close>
				</div>
        </div>

			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
    </>
  )
}