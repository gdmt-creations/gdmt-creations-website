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
    <div className={`mb-10 ${alignment}`}>
      <h2 className='text-3xl font-bold'>{title}</h2>
      {subtitle && <p className='text-gray-500 mt-2'>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
