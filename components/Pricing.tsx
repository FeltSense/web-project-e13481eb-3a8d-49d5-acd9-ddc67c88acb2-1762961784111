export default function Pricing() {
  return (
    export default function PricingCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 border border-gray-200">
        {/* Price */}
        <div className="text-center mb-2">
          <div className="text-5xl font-bold text-gray-900">$29</div>
          <p className="text-gray-600 text-sm mt-2">One-time payment</p>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200"></div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <span className="text-green-500 font-bold mt-1">✓</span>
            <span className="text-gray-700 text-sm">Curated portfolio of $1M+ luxury properties</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 font-bold mt-1">✓</span>
            <span className="text-gray-700 text-sm">Advanced search with virtual tour integration</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 font-bold mt-1">✓</span>
            <span className="text-gray-700 text-sm">Expert agents specializing in luxury market</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 font-bold mt-1">✓</span>
            <span className="text-gray-700 text-sm">Comprehensive neighborhood insights</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 font-bold mt-1">✓</span>
            <span className="text-gray-700 text-sm">Premium marketing packages for sellers</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 font-bold mt-1">✓</span>
            <span className="text-gray-700 text-sm">Exclusive access to off-market listings</span>
          </li>
        </ul>

        {/* CTA Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
          Get Your Website - $29
        </button>
      </div>
    </div>
  );
}
  );
}