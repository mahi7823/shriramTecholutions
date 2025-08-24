import { useState } from 'react';

export default function DocumentDemo() {
  const [documentText, setDocumentText] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');

  const handleDocumentAnalysis = () => {
    if (!documentText.trim()) return;
    
    setAnalysisResult('Analyzing document...');
    
    setTimeout(() => {
      const analysis = {
        sentiment: 'Positive (85%)',
        keyEntities: ['Company Name', 'Product Details', 'Pricing Information'],
        summary: 'This document contains business proposal with positive sentiment. Key metrics extracted successfully.',
        confidence: '94%'
      };
      
      setAnalysisResult(`📊 Analysis Complete:
• Sentiment: ${analysis.sentiment}
• Key Entities: ${analysis.keyEntities.join(', ')}
• Summary: ${analysis.summary}
• Confidence: ${analysis.confidence}`);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <textarea
        value={documentText}
        onChange={(e) => setDocumentText(e.target.value)}
        placeholder="Paste your document text here for AI analysis..."
        className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleDocumentAnalysis}
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Analyze Document
      </button>
      {analysisResult && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <pre className="whitespace-pre-wrap text-sm text-green-800">{analysisResult}</pre>
        </div>
      )}
    </div>
  );
}