import Divider from "./Divider";

interface props {
  content: string[];
}

const ActionButton = ({ content = [""] }: props) => {
  return (
    <div className=" pointer-events-none absolute left-0 top-0 flex h-full w-full items-end justify-center p-4 ">
      <div className=" pointer-events-auto flex w-full max-w-72 items-center justify-around gap-1 rounded-full bg-zinc-900 text-gray-100 ">
        {content.map((i, index) => {
          return (
            <>
              <div className=" px-6 py-2 ">{i}</div>

              {index < content.length - 1 && <Divider />}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ActionButton;
