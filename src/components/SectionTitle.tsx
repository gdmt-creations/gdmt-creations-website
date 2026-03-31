interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
}) => {
  const alignment = align === 'left' ? 'text-left' : 'text-center';
  return (
    <div className={`mb-6 sm:mb-10 ${alignment}`}>
      <h2 className='text-xl sm:text-3xl font-bold'>{title}</h2>
      {subtitle && <p className='text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base'>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
