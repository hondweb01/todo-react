@AGENTS.md

## Chakra UI v2 → v3 移行メモ

`@chakra-ui/react` は v3 系を使用。v2時代の `Modal` / `ModalOverlay` /
`ModalContent` / `ModalHeader` / `ModalBody` / `ModalFooter` /
`ModalCloseButton` は存在せず、`Dialog` 名前空間のコンポーネントに統合された。
`useDisclosure` の戻り値も `isOpen` → `open` に名称変更されている。

| v2 | v3 |
|---|---|
| `Modal` | `Dialog.Root` |
| `ModalOverlay` | `Dialog.Backdrop` |
| `ModalContent` | `Dialog.Content` |
| `ModalHeader` | `Dialog.Header` |
| `ModalBody` | `Dialog.Body` |
| `ModalFooter` | `Dialog.Footer` |
| `ModalCloseButton` | `Dialog.CloseTrigger` |
| `isOpen` | `open` |

React 19 を使用しているため、Chakra UI v2 への降格は非推奨(v2はReact 19を
正式サポートしておらずpeer dependencyの問題が出やすい)。
