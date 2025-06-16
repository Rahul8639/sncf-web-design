import React, { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'
import heal from '../assets/image/icons/heal.webp'
import enrich from '../assets/image/icons/enrich.webp'
import empower from '../assets/image/icons/empower.webp'
import video from '../assets/video/SantNirankariCharitableFoundation.mp4'
import healthCity from '../assets/image/vision-card/health-city.jpg'
import onenessVann from '../assets/image/vision-card/health-city.jpg'
import bloodDonation from '../assets/image/vision-card/health-city.jpg'

const imgs = [
  '/src/assets/image/crousel/baner1.jpg',
  '/src/assets/image/crousel/banner2.jpg',
  '/src/assets/image/crousel/banner3.jpg',
  '/src/assets/image/crousel/banner4.jpg',
  '/src/assets/image/crousel/banner5.jpg',
  '/src/assets/image/crousel/banner6.jpg',
  '/src/assets/image/crousel/banner7.jpg',
]

const ONE_SECOND = 1000
const AUTO_DELAY = ONE_SECOND * 10
const DRAG_BUFFER = 50

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
}

const Images = ({ imgIndex }) => {
  // Create a circular array by duplicating images
  const circularImages = [...imgs, ...imgs, ...imgs]
  const startIndex = imgs.length // Start from the middle set of images

  return (
    <>
      {circularImages.map((imgSrc, idx) => {
        const adjustedIndex = idx - startIndex
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === adjustedIndex ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="carousel-image"
          />
        )
      })}
    </>
  )
}

const GradientEdges = () => {
  return (
    <>
      <div className="gradient-edge left" />
      <div className="gradient-edge right" />
    </>
  )
}

// Define blog post data as an array of objects
const blogPosts = [
  {
    id: 1,
    image: '/src/assets/blogs/blog1/img.png',
    date: 'October 26, 2023',
    title: 'Understanding Sant Nirankari Mission\'s Principles',
    description: 'Explore the core beliefs and values that guide the Sant Nirankari Mission and its followers.',
    link: '/blog/1',
  },
  {
    id: 2,
    image: '/src/assets/blogs/blog1/img.png',
    date: 'November 10, 2023',
    title: 'Community Service: Making a Difference Together',
    description: 'Learn about the various community service initiatives undertaken by the mission globally.',
    link: '/blog/2',
  },
  {
    id: 3,
    image: '/src/assets/blogs/blog1/img.png',
    date: 'December 01, 2023',
    title: 'The Role of Meditation in Spiritual Growth',
    description: 'Discover the importance of meditation in achieving inner peace and spiritual enlightenment.',
    link: '/blog/3',
  },
  {
    id: 4,
    image: '/src/assets/blogs/blog1/img.png',
    date: 'December 15, 2023',
    title: 'Youth Engagement: Building a Better Future',
    description: 'Highlighting programs and activities for the youth within the Sant Nirankari Mission.',
    link: '/blog/4',
  },
  {
    id: 5,
    image: '/src/assets/blogs/blog1/img.png',
    date: 'December 16, 2023',
    title: 'Youth Engagement: Building a Better Future',
    description: 'Highlighting programs and activities for the youth within the Sant Nirankari Mission.',
    link: '/blog/5',
  },
]

// Appreciation carousel data
const appreciationCards = [
  {
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'If I could give 11 stars, I would give 12.',
    author: 'Andre, CEO at COMPANY',
  },
  {
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    quote: 'SO SO SO HAPPY WE FOUND YOU GUYS!!!! I\'d bet you saved me 100 hours so far.',
    author: 'Jeremy, CEO at COMPANY',
  },
  {
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: 'Took some convincing, but now that we\'re on COMPANY, we\'re never going back.',
    author: 'Pam, CEO at COMPANY',
  },
  {
    image: 'https://randomuser.me/api/portraits/men/23.jpg',
    quote: 'It\'s just the best. Period.',
    author: 'Fernando, CEO at COMPANY',
  },
  {
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    quote: 'I switched and never looked back.',
    author: 'Andy, CEO at COMPANY',
  },
  {
    image: 'https://randomuser.me/api/portraits/men/77.jpg',
    quote: 'The ROI is enormous.',
    author: 'Daniel, CEO at COMPANY',
  },
];

// Partner logos data
const partnerLogos = [
  '/src/assets/partners/partner1.png',
  '/src/assets/partners/partner2.png',
  '/src/assets/partners/partner3.png',
  '/src/assets/partners/partner4.png',
  '/src/assets/partners/partner5.png',
  '/src/assets/partners/partner6.png',
  '/src/assets/partners/partner7.png',
  '/src/assets/partners/partner8.png',
];

function InfiniteLogoBelt() {
  return (
    <div className="infinite-logos-track">
      <div className="infinite-logos-track-inner">
        {[...partnerLogos, ...partnerLogos].map((logo, index) => (
          <div key={index} className="partner-logo">
            <img src={logo} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function AppreciationCarousel() {
  const [centerIdx, setCenterIdx] = React.useState(2);
  const total = appreciationCards.length;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCenterIdx((i) => (i + 1) % total);
    }, 10000);
    return () => clearInterval(interval);
  }, [total]);

  const getCard = (offset) => appreciationCards[(centerIdx + offset + total) % total];

  const visible = [-2, -1, 0, 1, 2].map(getCard);

  // Card positions and styles
  const positions = [
    { scale: 0.85, rotate: -8, z: 1, color: '#fff', x: -320 },
    { scale: 0.92, rotate: -4, z: 2, color: '#fff', x: -160 },
    { scale: 1.08, rotate: 0, z: 3, color: '#4b53ec', x: 0 },
    { scale: 0.92, rotate: 4, z: 2, color: '#fff', x: 160 },
    { scale: 0.85, rotate: 8, z: 1, color: '#fff', x: 320 },
  ];

  const autoSlideRef = React.useRef();
  React.useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setCenterIdx((i) => (i + 1) % total);
    }, 10000);
    return () => clearInterval(autoSlideRef.current);
  }, [centerIdx, total]);

  const handlePrev = () => {
    setCenterIdx((i) => (i - 1 + total) % total);
  };
  const handleNext = () => {
    setCenterIdx((i) => (i + 1) % total);
  };

  return (
    <div className="appreciation-carousel-wrapper">
      <div className="appreciation-carousel">
        <AnimatePresence initial={false}>
          {visible.map((card, i) => (
            <motion.div
              key={card.image + card.author}
              className={`appreciation-card${i === 2 ? ' center' : ''}`}
              initial={{
                opacity: 0,
                scale: positions[i].scale * 0.95,
                x: positions[i].x * 1.2,
                rotate: positions[i].rotate * 1.2,
              }}
              animate={{
                opacity: 1,
                scale: positions[i].scale,
                x: positions[i].x,
                rotate: positions[i].rotate,
                zIndex: positions[i].z,
                background: positions[i].color,
                boxShadow: positions[i].shadow,
              }}
              exit={{
                opacity: 0,
                scale: positions[i].scale * 0.95,
                x: positions[i].x * 1.2,
                rotate: positions[i].rotate * 1.2,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 40 }}
              style={{
                clipPath: 'polygon(0 0, 92% 0, 100% 8%, 100% 100%, 0 100%)',
                position: 'absolute',
                top: 0,
                left: '460px',
                transform: 'translateX(-50%)',
                color: i === 2 ? '#fff' : '#222',
                pointerEvents: i === 2 ? 'auto' : 'none',
              }}
            >
              <img className="appreciation-avatar" src={card.image} alt="profile" />
              <div className="appreciation-quote">"{card.quote}"</div>
              <div className="appreciation-author">– {card.author}</div>
            </motion.div>
          ))}
        </AnimatePresence>
        <button className="appreciation-arrow left" onClick={handlePrev}>
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <button className="appreciation-arrow right" onClick={handleNext}>
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </div>
  );
}

gsap.registerPlugin(ScrollTrigger)

function AboutUsContent() {
  const text = "The Sant Nirankari Charitable Foundation isn't just about handing out aid. Guided by the principle of oneness, we bring compassion, care, and kindness to communities across the globe. Our work extends beyond basic charity, tackling social and environmental issues head-on. We strive to empower the underprivileged and protect our planet, creating a better world for all.";
  const words = text.split(' ');

  return (
    <div className="about-us-content">
      <h2>About Us</h2>
      <p>
        {words.map((word, index) => (
          <span key={index} className="word">
            {word}{' '}
          </span>
        ))}
      </p>
      <Link to="/about">
        Who We Are <i className="ri-arrow-right-up-line"></i>
      </Link>
    </div>
  );
}

const Home = () => {
  const [imgIndex, setImgIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const dragX = useMotionValue(0)
  const videoRef = React.useRef(null)
  const blogContentRef = React.useRef(null)

  // Refs for sections
  const coreValuesRef = useRef(null)
  const aboutUsRef = useRef(null)
  const visionMissionRef = useRef(null)
  const appreciationRef = useRef(null)

  useEffect(() => {
    // Core Values animation
    const coreValues = coreValuesRef.current
    if (coreValues) {
      // Animate the container first
      gsap.fromTo(coreValues,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }
      )

      // Animate each block individually
      const blocks = coreValues.querySelectorAll('.heal, .enrich, .empower')
      blocks.forEach((block, index) => {
        gsap.fromTo(block,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.3,
            ease: "power3.out"
          }
        )

        // Animate the icon with improved animation
        const icon = block.querySelector('img')
        if (icon) {
          gsap.fromTo(icon,
            {
              scale: 0.5,
              opacity: 0
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.3 + 0.2,
              ease: "power2.out"
            }
          )
        }

        // Animate the content with fade
        const content = block.querySelector('.heal-content, .enrich-content, .empower-content')
        if (content) {
          gsap.fromTo(content,
            {
              opacity: 0,
              y: 20
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.3 + 0.4,
              ease: "power2.out"
            }
          )
        }

        // Animate the button with fade
        const button = block.querySelector('.heal-button, .enrich-button, .empower-button')
        if (button) {
          gsap.fromTo(button,
            {
              opacity: 0,
              y: 20
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.3 + 0.6,
              ease: "power2.out"
            }
          )
        }
      })
    }

    // About Us animation
    const aboutUs = aboutUsRef.current
    if (aboutUs) {
      // Video animation
      const video = aboutUs.querySelector('.about-us-video')
      if (video) {
        gsap.fromTo(video,
          {
            x: -100,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: video,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none"
            }
          }
        )
      }

      // Content animation
      const content = aboutUs.querySelector('.about-us-content')
      if (content) {
        // Title animation
        const title = content.querySelector('h2')
        if (title) {
          gsap.fromTo(title,
            {
              y: 50,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: content,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none"
              }
            }
          )
        }

        // Words animation
        const words = content.querySelectorAll('.word')
        words.forEach((word, index) => {
          gsap.fromTo(word,
            {
              y: 20,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              delay: index * 0.03, // Stagger words
              ease: "power2.out",
              scrollTrigger: {
                trigger: content,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none"
              }
            }
          )
        })

        // Link animation
        const link = content.querySelector('a')
        if (link) {
          gsap.fromTo(link,
            {
              y: 30,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: 0.5, // Delay after words
              ease: "power2.out",
              scrollTrigger: {
                trigger: content,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none"
              }
            }
          )
        }
      }
    }

    // Vision Mission animation
    const visionMission = visionMissionRef.current
    if (visionMission) {
      // Title animation
      const title = visionMission.querySelector('.vision-mission-title')
      if (title) {
        gsap.fromTo(title,
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: title,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none none"
            }
          }
        )
      }

      // Cards animation
      const cards = visionMission.querySelectorAll('.card-wrapper')
      cards.forEach((card, index) => {
        // Card container animation
        gsap.fromTo(card,
          {
            y: 100,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none none"
            }
          }
        )

        // Card image animation
        const image = card.querySelector('.card-image')
        if (image) {
          gsap.fromTo(image,
            {
              scale: 1.2,
              opacity: 0
            },
            {
              scale: 1,
              opacity: 1,
              duration: 1.2,
              delay: index * 0.2 + 0.3,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none none"
              }
            }
          )
        }

        // Card content animation
        const content = card.querySelector('.card-content')
        if (content) {
          // Title animation
          const cardTitle = content.querySelector('.card-title')
          if (cardTitle) {
            gsap.fromTo(cardTitle,
              {
                y: 30,
                opacity: 0
              },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: index * 0.2 + 0.4,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 70%",
                  end: "bottom 30%",
                  toggleActions: "play none none none"
                }
              }
            )
          }

          // Description animation
          const description = content.querySelector('.card-description')
          if (description) {
            gsap.fromTo(description,
              {
                y: 30,
                opacity: 0
              },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: index * 0.2 + 0.5,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 70%",
                  end: "bottom 30%",
                  toggleActions: "play none none none"
                }
              }
            )
          }
        }

        // Arrow animation
        const arrow = card.querySelector('.card-arrow')
        if (arrow) {
          gsap.fromTo(arrow,
            {
              scale: 0,
              opacity: 0,
              rotation: -45
            },
            {
              scale: 1,
              opacity: 1,
              rotation: 0,
              duration: 0.6,
              delay: index * 0.2 + 0.6,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none none"
              }
            }
          )
        }
      })
    }

    // Appreciation animation
    const appreciation = appreciationRef.current
    if (appreciation) {
      gsap.fromTo(appreciation.children,
        {
          scale: 0.8,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: appreciation,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
          }
        }
      )
    }

    // Latest Blogs animation
    const latestBlogs = document.querySelector('#latest-blogs')
    if (latestBlogs) {
      // Title and navigation buttons animation
      const titleSection = latestBlogs.querySelector('.latest-blogs-title')
      if (titleSection) {
        gsap.fromTo(titleSection,
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleSection,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none none"
            }
          }
        )
      }

      // Blog cards animation
      const blogCards = latestBlogs.querySelectorAll('.blog-card-wrapper')
      blogCards.forEach((card, index) => {
        // Card container animation
        gsap.fromTo(card,
          {
            x: 200,
            opacity: 0,
            scale: 0.95
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none none"
            }
          }
        )

        // Blog image animation
        const image = card.querySelector('.blog-card-image')
        if (image) {
          gsap.fromTo(image,
            {
              scale: 1.2,
              opacity: 0
            },
            {
              scale: 1,
              opacity: 1,
              duration: 1.2,
              delay: index * 0.15 + 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none none"
              }
            }
          )
        }

        // Blog content animation
        const content = card.querySelector('.blog-card-content')
        if (content) {
          // Date animation
          const date = content.querySelector('.blog-card-date')
          if (date) {
            gsap.fromTo(date,
              {
                y: 20,
                opacity: 0
              },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: index * 0.15 + 0.3,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 70%",
                  end: "bottom 30%",
                  toggleActions: "play none none none"
                }
              }
            )
          }

          // Title animation
          const title = content.querySelector('.blog-card-title')
          if (title) {
            gsap.fromTo(title,
              {
                y: 20,
                opacity: 0
              },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: index * 0.15 + 0.4,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 70%",
                  end: "bottom 30%",
                  toggleActions: "play none none none"
                }
              }
            )
          }

          // Description animation
          const description = content.querySelector('.blog-card-description')
          if (description) {
            gsap.fromTo(description,
              {
                y: 20,
                opacity: 0
              },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: index * 0.15 + 0.5,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 70%",
                  end: "bottom 30%",
                  toggleActions: "play none none none"
                }
              }
            )
          }
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const onDragEnd = () => {
    const x = dragX.get()

    if (x <= -DRAG_BUFFER) {
      setImgIndex((pv) => {
        if (pv === imgs.length - 1) {
          return 0
        }
        return pv + 1
      })
    } else if (x >= DRAG_BUFFER) {
      setImgIndex((pv) => {
        if (pv === 0) {
          return imgs.length - 1
        }
        return pv - 1
      })
    }
  }

  const handlePrev = () => {
    setImgIndex((pv) => {
      if (pv === 0) {
        return imgs.length - 1
      }
      return pv - 1
    })
  }

  const handleNext = () => {
    setImgIndex((pv) => {
      if (pv === imgs.length - 1) {
        return 0
      }
      return pv + 1
    })
  }

  // Reset dragX to 0 after each transition
  useEffect(() => {
    dragX.set(0)
  }, [imgIndex])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handlePrevBlog = () => {
    if (blogContentRef.current) {
      // Scroll left by the width of one card + gap (adjust if needed)
      const scrollDistance = 300 + 32 // Card width (300px) + gap (2rem = 32px)
      blogContentRef.current.scrollBy({ left: -scrollDistance, behavior: 'smooth' })
    }
  }

  const handleNextBlog = () => {
    if (blogContentRef.current) {
      // Scroll right by the width of one card + gap (adjust if needed)
      const scrollDistance = 300 + 32 // Card width (300px) + gap (2rem = 32px)
      blogContentRef.current.scrollBy({ left: scrollDistance, behavior: 'smooth' })
    }
  }

  return (
    <>
      <div id='home-container'>
        <div className='home-carousel'>
          <div className="carousel-arrows">
            <button onClick={handlePrev} className="carousel-arrow left">
              <i className="ri-arrow-left-s-line"></i>
            </button>
            <button onClick={handleNext} className="carousel-arrow right">
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
          <motion.div
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            style={{
              x: dragX,
            }}
            animate={{
              translateX: `-${imgIndex * 100}%`,
            }}
            transition={SPRING_OPTIONS}
            onDragEnd={onDragEnd}
            className="carousel-container"
            dragElastic={0.1}
            dragMomentum={false}
          >
            <Images imgIndex={imgIndex} />
          </motion.div>
          <GradientEdges />
        </div>
        <div id="core-values" ref={coreValuesRef}>
          <div className="core-values-container">
            <div className="heal">
              <div className="heal-icon">
                <img src={heal} alt="heal" />
              </div>
              <div className="heal-content">
                <h3>SNCF Provides Essential Care, Promotes Wellness, and Reaches Those in Need.</h3>
              </div>
              <div className="heal-button">
                <Link to="/heal"><span className='heal-button-icon'><i className="ri-arrow-right-line"></i></span></Link>
              </div>
            </div>
            <div className="enrich">
              <div className="enrich-icon">
                <img src={enrich} alt="enrich" />
              </div>
              <div className="enrich-content">
                <h3>SNCF Enriching Lives, Nurturing Values, and Building Stronger Communities.</h3>
              </div>
              <div className="enrich-button">
                <Link to="/enrich"><span className='enrich-button-icon'><i className="ri-arrow-right-line"></i></span></Link>
              </div>
            </div>
            <div className="empower">
              <div className="empower-icon">
                <img src={empower} alt="empower" />
              </div>
              <div className="empower-content">
                <h3>SNCF Investing in Self-Sufficiency, Instilling Empowerment through Opportunity.</h3>
              </div>
              <div className="empower-button">
                <Link to="/empower"><span className='empower-button-icon'><i className="ri-arrow-right-line"></i></span></Link>
              </div>
            </div>
          </div>
        </div>
        <div id="about-us" ref={aboutUsRef}>
          <div className="about-us-container">
            <div className="about-us-video">
              <video 
                ref={videoRef}
                src={video} 
                autoPlay 
                loop 
                muted={isMuted}
                playsInline
              />
              <div className="video-controls">
                <button onClick={toggleMute} aria-label={isMuted ? "Unmute video" : "Mute video"}>
                  <i className={isMuted ? "ri-volume-mute-line" : "ri-volume-up-line"}></i>
                </button>
              </div>
            </div>
            <AboutUsContent />
          </div>
        </div>
        <div id="vision-mission" ref={visionMissionRef}>
          <div className="vision-mission-container">
            <div className="vision-mission-title">
              <h2>Vision to Actions</h2>
            </div>
            <div className="vision-mission-cards">
              <Link to="/health-city" className="card-wrapper">
                <div className="health-city">
                  <div className="card-image">
                    <img src={healthCity} alt="Health City Initiative" />
                    <i className="ri-arrow-right-line card-arrow"></i>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Nirankari Health City</h3>
                    <p className="card-description">
                      A comprehensive healthcare program providing free medical services, 
                      health camps, and awareness programs to underprivileged communities. 
                      Our initiative focuses on preventive care and making quality healthcare 
                      accessible to all.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/oneness-vann" className="card-wrapper">
                <div className="oneness-vann">
                  <div className="card-image">
                    <img src={onenessVann} alt="Oneness Vann" />
                    <i className="ri-arrow-right-line card-arrow"></i>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Oneness Vann</h3>
                    <p className="card-description">
                      Our environmental initiative dedicated to creating sustainable green 
                      spaces and promoting ecological balance. Through tree plantation drives 
                      and environmental awareness, we're building a greener, healthier future.
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/blood-donation" className="card-wrapper">
                <div className="blood-donation">
                  <div className="card-image">
                    <img src={bloodDonation} alt="Blood Donation" />
                    <i className="ri-arrow-right-line card-arrow"></i>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Blood Donation</h3>
                    <p className="card-description">
                      A life-saving initiative that organizes regular blood donation camps 
                      and maintains a network of voluntary donors. Our campaign ensures 
                      timely access to blood for those in need across various hospitals.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div id="latest-blogs">
          <div className="latest-blogs-container">
            <div className="latest-blogs-title">
              <h2>Latest Blogs</h2>
              <div className="navigation-buttons">
                <button className="prev-button" onClick={handlePrevBlog} aria-label="Previous blog post">
                  <i className="ri-arrow-left-line"></i>
                </button>
                <button className="next-button" onClick={handleNextBlog} aria-label="Next blog post">
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
            <div className="latest-blogs-content" ref={blogContentRef}>
              {blogPosts.map(post => (
                <Link to={post.link} className="blog-card-wrapper" key={post.id}>
                  <div className="blog-card">
                    <div className="blog-card-image">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="blog-card-content">
                      <p className="blog-card-date">{post.date}</p>
                      <h3 className="blog-card-title">{post.title}</h3>
                      <p className="blog-card-description">{post.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div id="appriciation" ref={appreciationRef}>
          <div className="appriciation-container">
            <div className="appriciation-title">
              <h2>Empanelment and Accreditations</h2>
            </div>
            <div className="appriciation-content">
              <AppreciationCarousel />
            </div>
          </div>
        </div>
        <div id="infinite-logos">
          <div className="infinite-logos-container">
            <div className="infinite-logos-title">
              <h2>Our Partners</h2>
            </div>
            <div className="infinite-logos-content">
              <InfiniteLogoBelt />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home