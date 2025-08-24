import { useState } from 'react';
import { Eye } from 'lucide-react';

export default function VisionDemo() {
  const [imageAnalysis, setImageAnalysis] = useState('');

  const analyzeImage = () => {
    setImageAnalysis('Analyzing image...');
    
    setTimeout(() => {
      setImageAnalysis(`🔍 Computer Vision Analysis:
• Objects Detected: 3 items
• Quality Score: 96.5%
• Defects Found: None
• Classification: Product A (Confidence: 98.2%)
• Recommendation: Approved for shipping`);
    }, 1500);
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <Eye size={48} className="mx-auto mb-4 text-gray-400" />
        <p className="text-gray-600 mb-4">Upload an image for AI analysis</p>
        <button
          onClick={analyzeImage}
          className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
        >
          Simulate Image Analysis
        </button>
      </div>
      {imageAnalysis && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <pre className="whitespace-pre-wrap text-sm text-orange-800">{imageAnalysis}</pre>
        </div>
      )}
    </div>
  );
}