export function Word({back, front}) {
    return (
      <section className="relative flex items-center justify-center h-40">
        <h1 className="absolute text-[90px] font-extrabold text-neutral-700 opacity-70 select-none">
          {back}
        </h1>
        <p className="relative w-200 text-lg text-center tracking-[0.3em] text-gray-200 ttt">
          {front}
        </p>
      </section>
    );
}