import { contentData } from '../data/contentData';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface DetailedContentProps {
  itemId: string;
}

const DetailedContent = ({ itemId }: DetailedContentProps) => {
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set());

  const content = contentData[itemId];

  if (!content) {
    return null;
  }

  const toggleStep = (stepId: string) => {
    const newExpanded = new Set(expandedSteps);
    if (newExpanded.has(stepId)) {
      newExpanded.delete(stepId);
    } else {
      newExpanded.add(stepId);
    }
    setExpandedSteps(newExpanded);
  };

  return (
    <div className="detailed-content">
      <div className="content-intro">
        <p className="intro-text">
          Panduan lengkap tentang cara melakukan {content.itemTitle.toLowerCase()} di sistem informasi rumah sakit.
        </p>
      </div>

      <div className="steps-container">
        {content.steps.map((step) => (
          <div key={step.id} className="step-card">
            <button
              className="step-header"
              onClick={() => toggleStep(step.id)}
            >
              <div className="step-header-content">
                <span className="step-number">{step.number}</span>
                <div className="step-title-section">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`step-chevron ${expandedSteps.has(step.id) ? 'expanded' : ''}`}
              />
            </button>

            {expandedSteps.has(step.id) && (
              <div className="step-content">
                {step.details && step.details.length > 0 && (
                  <div className="step-details">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="detail-item">
                        <span className="detail-bullet">•</span>
                        <span className="detail-text">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}

                {step.image && (
                  <div className="step-media">
                    <div className="media-label">Gambar Ilustrasi:</div>
                    <img src={step.image} alt={step.title} className="step-image" />
                  </div>
                )}

                {step.video && (
                  <div className="step-media">
                    <div className="media-label">Video Tutorial:</div>
                    <div className="video-container">
                      <iframe
                        width="100%"
                        height="400"
                        src={step.video}
                        title={step.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedContent;
