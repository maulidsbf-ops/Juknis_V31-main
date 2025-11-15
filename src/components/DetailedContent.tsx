import { contentData, DetailItem } from '../data/contentData';
import { ChevronDown, Play } from 'lucide-react';
import { useState } from 'react';

interface DetailedContentProps {
  itemId: string;
  onBack: () => void;
}

const DetailedContent = ({ itemId, onBack }: DetailedContentProps) => {
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

  const isDetailItem = (detail: string | DetailItem): detail is DetailItem => {
    return typeof detail === 'object' && detail !== null && 'type' in detail;
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
                    {step.details.map((detail, idx) => {
                      if (isDetailItem(detail)) {
                        if (detail.type === 'text') {
                          return (
                            <div key={idx} className="detail-item">
                              <span className="detail-bullet">•</span>
                              <span className="detail-text">{detail.content}</span>
                            </div>
                          );
                        } else if (detail.type === 'image') {
                          return (
                            <div key={idx} className="step-media detail-media">
                              <div className="media-label">{detail.title || 'Gambar:'}</div>
                              <img src={detail.content} alt={detail.title} referrerPolicy="no-referrer" className="step-image" />

                            </div>
                          );
                        } else if (detail.type === 'video') {
                          return (
                            <div key={idx} className="step-media detail-media">
                              <a
                                href={detail.content}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-video"
                              >
                                <Play size={18} />
                                <span>{detail.title || 'Lihat Video'}</span>
                              </a>
                            </div>
                          );
                        }
                      }
                      return (
                        <div key={idx} className="detail-item">
                          <span className="detail-bullet">•</span>
                          <span className="detail-text">{detail}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="content-footer">
        <button className="btn-back" onClick={onBack}>
          ← Kembali
        </button>
      </div>
    </div>
  );
};

export default DetailedContent;