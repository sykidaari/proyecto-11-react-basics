import clsx from 'clsx';

const SectionBox = ({ className, children }) => {
  return (
    <section
      className={clsx(
        'z-10 bg-gradient-to-b from-app-teal-500/50 to-app-teal-500/10 p-5 rounded-lg flex flex-col justify-center gap-5',
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionBox;
