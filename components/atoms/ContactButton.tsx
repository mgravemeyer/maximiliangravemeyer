const ContactButton = ({
  name,
  target,
  className = '',
}: {
  name: string;
  target: string;
  className?: string;
}) => {
  return (
    <a
      href={target}
      className={
        `text-white font-quickMedium bg-stone-900 w-full h-12 flex justify-center items-center cursor-pointer hover:bg-stone-700 ` +
        `${className}`
      }
    >
      {name}
    </a>
  );
};

export default ContactButton;
