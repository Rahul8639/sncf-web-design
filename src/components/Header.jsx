import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/image/logonew.png'
import 'remixicon/fonts/remixicon.css'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowRight, FiChevronDown } from 'react-icons/fi'

const Header = () => {
  const [selected, setSelected] = useState(null)
  const [dir, setDir] = useState(null)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsHeaderVisible(false)
    } else {
      // Scrolling up
      setIsHeaderVisible(true)
    }
    
    setLastScrollY(currentScrollY)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l")
    } else if (val === null) {
      setDir(null)
    }
    setSelected(val)
  }

  const MENU_ITEMS = [
    { 
      id: 1, 
      title: "Projects", 
      hasDropdown: true,
      content: {
        items: [
          {
            title: "Sant Nirankari Health City",
            path: "/projects/sant-nirankari-health-city"
          },
          {
            title: "Watershed Program",
            path: "/projects/watershed-program"
          },
          {
            title: "Project Amrit",
            path: "/projects/project-amrit"
          },
          {
            title: "Oneness Vann",
            path: "/projects/oneness-vann"
          }
        ]
      }
    },
    { 
      id: 2, 
      title: "Core Values", 
      hasDropdown: true,
      content: {
        sections: [
          {
            title: "Heal",
            items: [
              {
                title: "Blood Donation Drive",
                path: "/core-values/heal/blood-donation"
              },
              {
                title: "Eye Care Activities",
                path: "/core-values/heal/eye-care"
              },
              {
                title: "Health Checkup Camps",
                path: "/core-values/heal/health-checkup"
              },
              {
                title: "Health Awareness Drives",
                path: "/core-values/heal/health-awareness"
              }
            ]
          },
          {
            title: "Enrich",
            items: [
              {
                title: "Education",
                path: "/core-values/enrich/education"
              },
              {
                title: "Skill Development",
                path: "/core-values/enrich/skill-development"
              }
            ]
          },
          {
            title: "Empower",
            items: [
              {
                title: "Preserving Nature",
                path: "/core-values/empower/preserving-nature"
              },
              {
                title: "Adopted Villages",
                path: "/core-values/empower/adopted-villages"
              },
              {
                title: "Disaster Relief & Rehabilitation",
                path: "/core-values/empower/disaster-relief"
              },
              {
                title: "Youth Empowerment",
                path: "/core-values/empower/youth"
              },
              {
                title: "Philanthropic Support to the Society",
                path: "/core-values/empower/philanthropic-support"
              }
            ]
          }
        ]
      }
    },
    { 
      id: 3, 
      title: "Gallery", 
      hasDropdown: true,
      content: {
        items: [
          {
            title: "Event Reports",
            path: "/gallery/event-reports"
          },
          {
            title: "Video Reports",
            path: "/gallery/video-reports"
          }
        ]
      }
    },
    { 
      id: 4, 
      title: "Who We Are", 
      hasDropdown: true,
      content: {
        items: [
          {
            title: "About us",
            path: "/who-we-are/about-us"
          },
          {
            title: "Mission & Vision",
            path: "/who-we-are/mission-vision"
          },
          {
            title: "Honors and Recognitions",
            path: "/who-we-are/honors"
          },
          {
            title: "Our Partners",
            path: "/who-we-are/partners"
          },
          {
            title: "Contact",
            path: "/who-we-are/contact"
          }
        ]
      }
    }
  ]

  return (
    <>
      <div id='header-container' className={!isHeaderVisible ? 'header-hidden' : ''}>
        <div id='header-logo'>
          <Link to="/">
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div id='header-menu' onMouseLeave={() => handleSetSelected(null)}>
          <Link to="/">Home</Link>
          {MENU_ITEMS.map((item) => (
            <div key={item.id} className="dropdown-wrapper">
              <button 
                className="dropdown-link"
                id={`shift-tab-${item.id}`}
                onMouseEnter={() => handleSetSelected(item.id)}
                aria-expanded={selected === item.id}
              >
                {item.title} <FiChevronDown />
              </button>
              <AnimatePresence>
                {selected === item.id && (
                  <motion.div
                    id="overlay-content"
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                    }}
                    className="dropdown-content"
                  >
                    <div className="bridge" />
                    <Nub selected={selected} />
                    <div className="content-wrapper">
                      <motion.div
                        initial={{
                          opacity: 0,
                          x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                        }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="content-inner"
                      >
                        {item.id === 1 || item.id === 3 || item.id === 4 ? (
                          <div className="dropdown-items projects-dropdown">
                            {item.content.items.map((link, index) => (
                              <Link 
                                key={index} 
                                to={link.path}
                                className="project-link"
                                style={{
                                  transition: 'transform 0.3s ease',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '8px',
                                  fontSize: '14px'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.transform = 'translateX(8px)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.transform = 'translateX(0)';
                                }}
                              >
                                {link.title}
                                <i className="ri-arrow-right-up-line"></i>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <div className="dropdown-items">
                            {item.content.sections.map((section, index) => (
                              <div key={index} className="dropdown-section">
                                <h3>{section.title}</h3>
                                {section.items.map((item, subIndex) => (
                                  <Link 
                                    key={subIndex} 
                                    to={item.path}
                                    className="section-link"
                                    style={{
                                      transition: 'transform 0.3s ease',
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '8px',
                                      fontSize: '14px'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.transform = 'translateX(8px)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.transform = 'translateX(0)';
                                    }}
                                  >
                                    {item.title}
                                    <i className="ri-arrow-right-up-line"></i>
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Link to="/our-guiding-force">Our Guiding Force</Link>
          <Link to="/careers">Careers</Link>
        </div>
      </div>
    </>
  )
}

const Nub = ({ selected }) => {
  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
        left: "50px"
      }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="dropdown-nub"
    />
  );
};

export default Header