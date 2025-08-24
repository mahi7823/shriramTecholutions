import { useState } from 'react';

interface PredictionData {
  month: string;
  actual: number;
  predicted: number;
}

export default function PredictionDemo() {
  const [predictionData, setPredictionData] = useState<PredictionData[]>([]);

  const generatePrediction = () => {
    const data: PredictionData[] = [];
    const baseValue = 100;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    for (let i = 0; i < 12; i++) {
      data.push({
        month: months[i],
        actual: Math.floor(baseValue + Math.random() * 50 + i * 10),
        predicted: Math.floor(baseValue + Math.random() * 40 + i * 12)
      });
    }
    setPredictionData(data);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={generatePrediction}
        className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
      >
        Generate Prediction
      </button>
      {predictionData.length > 0 && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-bold mb-3">Sales Prediction Chart</h4>
          <div className="space-y-2">
            {predictionData.slice(0, 6).map((item, idx) => (
              <div key={idx} className="flex justify-between items-center p-2 bg-white rounded">
                <span className="font-medium">{item.month}</span>
                <div className="flex gap-4">
                  <span className="text-blue-600">Actual: {item.actual}</span>
                  <span className="text-purple-600">Predicted: {item.predicted}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}