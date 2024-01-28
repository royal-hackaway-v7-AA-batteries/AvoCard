interface props {
  content: string[];
}

const ActionButton = ({ content = [""] }: props) => {
  return (
    <div className=" pointer-events-none absolute left-0 top-0 flex h-full w-full items-end justify-center ">
      <div className=" pointer-events-auto flex gap-1 rounded-full bg-zinc-900 text-gray-100 ">
        {content.map((i) => {
          return (
            <>
              <div className=" px-6 py-2 ">{i}</div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ActionButton;
