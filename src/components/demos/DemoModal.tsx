import { X } from 'lucide-react';
import type { DemoModalProps } from '@/types';

export default function DemoModal({ demo, onClose, children }: DemoModalProps) {
  if (!demo) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-200">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Live Demo</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X size={24} className="text-gray-600 dark:text-gray-300" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
