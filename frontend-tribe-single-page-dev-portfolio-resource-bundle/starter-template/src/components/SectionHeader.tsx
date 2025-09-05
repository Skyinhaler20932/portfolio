export const SectionHeader = ({
  title,
  eyebrow,
  description,
  rich = false,
}: {
  title: string;
  eyebrow: string;
  description: string;
  rich?: boolean;
}) => {
  return (
    <>
      <div className="flex justify-center">
        {rich ? (
          <p
            className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent"
            dangerouslySetInnerHTML={{ __html: eyebrow }}
          />
        ) : (
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            {eyebrow}
          </p>
        )}
      </div>

      {rich ? (
        <h2
          className="font-serif text-3xl md:text-5xl text-center mt-6"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      ) : (
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          {title}
        </h2>
      )}

      {rich ? (
        <p
          className="text-center lg:text-xl md:text-lg text-white/60 mt-4 max-w-md mx-auto"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      ) : (
        <p className="text-center lg:text-xl md:text-lg text-white/60 mt-4 max-w-md mx-auto">
          {description}
        </p>
      )}
    </>
  );
};
