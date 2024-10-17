import type { MenuItems } from "../type"

type MenuItemProps = {
    item: MenuItems,
    addItem: (item: MenuItems) => void
}


export default function MenuItem({item, addItem} :  MenuItemProps) {
  return (
    <>
    <button className="border-2 border-teal-400  hover:bg-teal-200 w-full p-3 flex justify-between mb-5 rounded-md"
    onClick={() => addItem(item)}>
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
    </>
  )
}
