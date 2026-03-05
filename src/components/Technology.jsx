const Technology = ({ Icon, label, color }) => {
  return (
    <div className="flex items-center gap-1.5">
      <Icon size={16} color={color} />
      <span className="font-medium text-xs">{label}</span>
    </div>
  );
};

export default Technology;
