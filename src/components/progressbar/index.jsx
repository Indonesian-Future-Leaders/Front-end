import { formatCurrency } from "../../utils/formatCurrency";

const ProgressBar = ({ className, current_donation, target_donation }) => {
  const progress = current_donation ? Math.round((current_donation / target_donation) * 100) : 0;
  const color = progress < 33 ? "bg-red-600" : progress <= 66 ? "bg-yellow-500" : "bg-green-600";

  return (
    <div className={`relative w-full h-6 bg-gray-300 rounded-xl overflow-hidden ${className ?? ""}`}>
      <div className={`h-full transition-all duration-300 rounded-xl ${progress ? color : "bg-gray-300"}`} style={{ width: `${progress}%` }} />
      <span className="absolute text-xs -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-light-1 whitespace-nowrap">
        <strong>Rp. {formatCurrency(current_donation)}</strong> <strong className="ml-1">({progress}%)</strong>
      </span>
    </div>
  );
};
export default ProgressBar;
