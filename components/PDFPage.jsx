import React from 'react'

const PDFComponent = () => {
  return (
    <div className="flex flex-col h-full" id="pdfComponent">
      <div className="bg-gray-200 border border-gray-400 p-4 mb-4 h-[29.7cm]">
        {/* First section with fixed height */}
        First Section - A4 Size Height
      </div>
      <div className="bg-gray-300 border border-gray-400 p-4 mb-4 flex-1">
        {/* Second section with variable height */}
        Second Section - Variable Height
      </div>
      <div className="bg-gray-200 border border-gray-400 p-4 h-[29.7cm]">
        {/* Third section with fixed height */}
        Third Section - A4 Size Height
      </div>
    </div>
  )
}

export default PDFComponent
