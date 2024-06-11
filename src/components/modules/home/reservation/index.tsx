import { distopianFont } from "@/lib/font";
import { cn } from "@/lib/utils";
import { list } from "./data";
import { NicknameContainer } from "./nickname-container";

export default function ReserveNickName() {
  return (
    <section className="flex flex-col items-center p-12">
      <h1 className={cn("text-6xl text-center pb-12", distopianFont.className)}>
        Reserver your nickname
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {list.map((l, index) => (
          <NicknameContainer
            key={index}
            price={l.price}
            title={l.title}
            list={l.list}
            url="/"
            color={l.color}
          />
        ))}
      </div>
    </section>
  );
}
